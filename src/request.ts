import { get } from "https";
import { parse as parseUrl } from "url";
import { parse as parseQuery, stringify } from "querystring";

/**
 * Makes a request to the Scryfall API.
 * @param uri The path to request, including any query parameters.
 * @param cb The callback to invoke when the request has completed.
 * @param preserve Whether or not to preserve the original response structure from this request.
 * @param page Whether or not to return data as pages.
 */
export default function (uri: string, cb: (res: any) => void, preserve: boolean = false, _partialData = [], page: boolean = false) {
    let parsedUrl = parseUrl(uri);
    let query = parseQuery(parsedUrl.query);
    if (!query.format) {
        query.format = "json";
    }
    let reqOps = {
        host: parsedUrl.host || "api.scryfall.com",
        path: (parsedUrl.pathname || "") + "?" + stringify(query),
        headers: {}
    };
    let req = get(reqOps, (resp) => {
        if (resp.statusCode === 429) {
            throw new Error("Too many requests have been made. Please wait a moment before making a new request.");
        }
        let responseData = "";
        resp.on("data", (chunk) => {
            responseData += chunk;
        });
        resp.on("end", () => {
            try {
                let jsonResp = JSON.parse(responseData);
                _partialData = _partialData.concat(jsonResp.data || jsonResp);
                if (!page && jsonResp.has_more && jsonResp.data.length > 0) {
                    APIRequest(jsonResp.next_page, cb, preserve, _partialData);
                }
                else {
                    if (!preserve && Array.isArray(_partialData) && _partialData.length) {
                        _partialData = _partialData[0];
                    }
                    cb(_partialData);
                }
            }
            catch (e) {
                console.error(e);
            }
        });
    });
    req.end();
}