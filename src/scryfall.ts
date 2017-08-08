import * as https from "https";
import * as qs from "querystring";
import * as url from "url";
import { ScryfallListResponse } from "./ScryfallResponses";
import { ScryfallSet } from "./ScryfallSet";
import { ScryfallCard } from "./ScryfallCard";

/**
 * Attempts to autocomplete the specified token, returning a list of possible matches.
 * @param token - The token to search for.
 * @param cb - The callback to pass names to.
 */
export function autocomplete(token: string, cb: (matches: Array<string>) => void) {
    APIRequest(`/cards/autocomplete?q=${token}`, (cards) => {
        cb(Array.isArray(cards) ? cards : [cards]);
    }, true);
}

/**
 * Gets a card by its set code and collector number. Only available for cards that have collector numbers.
 * @param code - The set code for this card.
 * @param number - The collector number for this card.
 * @param cb - The callback to pass card data to.
 */
export function getCard(code: string, number: number, cb: (card: ScryfallCard) => void) {
    APIRequest(`/cards/${code}/${number}`, (cardData) => {
        cb(cardData);
    });
}

/**
 * Gets all versions of a card with the specified name.
 * @param name - The card name to search for.
 * @param cb - The callback to pass card data to.
 */
export function cardVersions(name: string, cb: (cards: ScryfallCard[]) => void) {
    APIRequest(`/cards/search?q=%2b%2b!%22${name}%22`, (cardData) => {
        cb(cardData);
    }, true);
}

/**
 * Fetches a list of all sets available on scryfall.
 * @param cb - The callback to pass set data to.
 */
export function allSets(cb: (sets: ScryfallSet[]) => void) {
    APIRequest("/sets", (resp) => {
        for (let i = 0; i < resp.length; i++) {
            resp[i].released_at = new Date(resp[i].released_at);
        }
        cb(resp);
    }, true);
}

/**
 * Gets all the cards printed in a set with the specified code.
 * @param code - The code of the set to search for.
 * @param cb - The callback to pass card data to.
 */
export function fromSet(code: string, cb: (cards: ScryfallCard[]) => void) {
    APIRequest(`/cards/search?order=set&q=%2B%2Be%3A${code}`, (resp) => {
        cb(resp);
    }, true);
}


/**
 * Makes a request to the Scryfall API.
 * @param uri - The path to request, including any query parameters.
 * @param cb - The callback to invoke when the request has completed.
 * @param preserve - Whether or not to preserve the original response structure from this request.
 */
function APIRequest(uri: string, cb: (res: any) => void, preserve: boolean = false, _partialData = []) {
    let parsedUrl = url.parse(uri);
    let query = qs.parse(parsedUrl.query);
    if (!query.format) {
        query.format = "json";
    }
    let reqOps = {
        host: parsedUrl.host || "api.scryfall.com",
        path: (parsedUrl.pathname || "") + "?" + qs.stringify(query),
        headers: {}
    };
    let req = https.get(reqOps, (resp) => {
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
                if (jsonResp.has_more) {
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