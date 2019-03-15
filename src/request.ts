import { get, RequestOptions } from "https";
import { parse as parseUrl } from "url";
import { parse as parseQuery, stringify } from "querystring";
import { createGunzip } from "zlib";
import ScryfallError from "types/ScryfallError";
import ScryfallObject from "types/ScryfallObject";

type APICallBack<T> = (err: ScryfallError, value?: T) => void;

export default async function APIRequest(uri: string): Promise<any>;
export default async function APIRequest(uri: string, preserve: boolean): Promise<any>;
export default function APIRequest(uri: string, cb: APICallBack<any>): void;
export default function APIRequest(uri: string, cb: APICallBack<any>, preserve: boolean): void;
export default function APIRequest(uri: string, cb?: any, preserve: boolean = false): Promise<any> | void {
    if (cb && typeof (cb) === "boolean") {
        preserve = cb;
        cb = undefined;
    }
    const body = (res: (val: any) => void, rej: (err: any) => void) => {
        try {
            request(uri, (value: ScryfallObject) => {
                if (!value.object || value.object !== "error") {
                    res(value);
                } else {
                    rej(value);
                }
            }, preserve);
        } catch (err) {
            rej(err);
        }
    };

    if (!cb) {
        return new Promise(body);
    } else if (typeof (cb) === "function") {
        // If we get to this point, cb is guaranteed to exist and be function.
        body((val) => cb(null, val), cb);
    }
}

let latency = 0; // The latency to use for API calls.

/**
 * Makes a request to the Scryfall API.
 * @param uri The path to request, including any query parameters.
 * @param cb The callback to invoke when the request has completed.
 * @param preserve Whether or not to preserve the original response structure from this request.
 * @param gzip Whether or not to request a gzip-encoded result.
 */
function request(uri: string, cb: (value: any) => void, preserve: boolean = false, gzip: boolean = false) {
    const parsedUrl = parseUrl(uri);
    const query = parseQuery(parsedUrl.query);
    query.format = query.format || "json";
    const reqOps: RequestOptions = {
        host: parsedUrl.host || "api.scryfall.com",
        path: (parsedUrl.pathname || "") + "?" + stringify(query),
        headers: {
            // "Accept-Encoding": "gzip"
        }
    };
    const req = get(reqOps, (resp) => {
        if (resp.statusCode === 429) {
            latency = 100; // A 429 error is Scryfall asking us to slow down, so adjust latency to permitted lower bound (100ms).
        }
        const encoding = resp.headers["content-encoding"];
        if (encoding && encoding.toLowerCase().indexOf("gzip") >= 0) {
            resp.pipe(createGunzip());
        }
        const responseData: string[] = [];
        resp.on("data", (chonk) => responseData.push(chonk));
        resp.on("end", () => {
            try {
                let jsonResp: any = JSON.parse(responseData.join(""));
                // Certain response objects have a .data field but aren't a list object - check for this.
                if (jsonResp.object === "list" && jsonResp.data) {
                    jsonResp = jsonResp.data;
                }
                // Ensure response is an array.
                jsonResp = Array.isArray(jsonResp) ? jsonResp : [jsonResp];
                // Iterate through response, converting dates where needed.
                jsonResp.forEach((entry: any) => {
                    for (const key in entry) {
                        if (typeof (entry[key]) === "string" && !isNaN(Date.parse(entry[key]))) {
                            entry[key] = new Date(entry[key]);
                        }
                    }
                });
                // Collapse into single object if requested.
                if (!preserve && jsonResp.length === 1) {
                    jsonResp = jsonResp[0];
                }
                setTimeout(() => cb(jsonResp), latency);
            } catch (err) {
                const message = `An internal error with this Scryfall API wrapper has occurred: ${err.message}.
                Please open an issue for this on our Github resporitory at https://github.com/Harubex/scryfall`;
                const scryfallError: ScryfallError = {
                    object: "error",
                    name: "ScryfallError",
                    code: resp.statusMessage,
                    status: resp.statusCode,
                    details: message,
                    message,
                    stack: err.stack
                };
                throw scryfallError;
            }
        });
    });
    req.end();
}
