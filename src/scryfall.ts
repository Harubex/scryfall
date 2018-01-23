import * as https from "https";
import * as qs from "querystring";
import * as url from "url";
import { ScryfallListResponse } from "./ScryfallResponses";
import { ScryfallSet } from "./ScryfallSet";
import { ScryfallCard } from "./ScryfallCard";
import { ScryfallError } from "./ScryfallError";

/**
 * Attempts to autocomplete the specified token, returning a list of possible matches.
 * @param token The token to search for.
 * @param cb The callback to pass names to.
 */
export function autocomplete(token: string, cb: (matches: Array<string>) => void) {
    APIRequest(`/cards/autocomplete?q=${token}`, (cards) => {
        cb(Array.isArray(cards) ? cards : [cards]);
    }, true);
}

/**
 * Fetches a specified page of cards from the list of all recorded cards.
 * @param page The page to retrieve.
 * @param cb The callback ot pass card info to.
 */
export function getAllCards(page: number, cb: (cards: ScryfallCard[]) => void) {
    APIRequest(`/cards?page=${page}`, cb, true, [], true);
}

/**
 * Gets a card by its set code and collector number. Only available for cards that have collector numbers.
 * @param code The set code for this card.
 * @param number The collector number for this card.
 * @param cb The callback to pass card data to.
 */
export function getCard(code: string, number: number, cb: (err: ScryfallError, card?: ScryfallCard) => void): void;

/**
 * Gets a card by its multiverse id. Only available to cards that have multiverse ids.
 * @param multiverseId The multiverse id for this card.
 * @param type The type of this id. Must be the string literal "multiverse".
 * @param cb The callback to pass card data to.
 */
export function getCard(multiverseId: number, type: "multiverse", cb: (err: ScryfallError, card?: ScryfallCard) => void): void;

/**
 * Gets a card by its Magic Online id. Only available to cards that exist on Magic Online.
 * @param multiverseId The Magic Online id for this card.
 * @param type The type of this id. Must be the string literal "mtgo".
 * @param cb The callback to pass card data to.
 */
export function getCard(mtgoId: number, type: "mtgo", cb: (err: ScryfallError, card?: ScryfallCard) => void): void;

/**
 * Gets a card by its Scryfall id. Available to every card fetchable through this API. It'd be kind of weird if it wasn't.
 * @param scryfallId The Scryfall id for this card.
 * @param cb The callback to pass card data to.
 */
export function getCard(scryfallId: string, cb: (err: ScryfallError, card?: ScryfallCard) => void): void;

export function getCard(first?: number | string, second?: any, cb?: (err: ScryfallError, card?: ScryfallCard) => void): void {
    let firstType = typeof (first);
    let secondType = isNaN(parseInt(second.replace ? second.replace(/[^0-9]/g, "") : second)) ? typeof (second) : "number";
    let url = "/cards/";
    let err = null;
    switch (secondType) {
        case "function": // This will be a scryfall id lookup.
            if (firstType !== "string") {
                err = "The given Scryfall id is invalid";
            } else {
                url += first;
                cb = second;
            }
            break;
        case "string" || false: // This will be a lookup by a multiverse or mtgo id.
            if (second !== "mtgo" && second !== "multiverse") {
                err = "Unable to determine the type of id being used";
            } else {
                url += `${second}/${first}`;
            }
            break;
        case "number": // This will be a lookup by a set/collector pair.
            if (firstType !== "string") {
                err = "Unable to determine set code/collector number being used."
            } else {
                url += `${first}/${encodeURIComponent(second)}`;
            }
            break;
    }
    if (err) {
        cb(err);
    } else {
        APIRequest(url, (cardData) => {
            if (cardData.object === "error") {
                cb(cardData as ScryfallError);
            } else if (cardData.object === "list") {
                console.warn("Scryfall card request returned more than one result - check your parameters.");
                cb(null, cardData);
            } else {
                cb(null, cardData);
            }
        });
    }
}

/**
 * Gets all versions of a card with the specified name.
 * @param name The card name to search for.
 * @param cb The callback to pass card data to.
 */
export function cardVersions(name: string, cb: (cards: ScryfallCard[]) => void) {
    APIRequest(`/cards/search?q=%2b%2b!%22${name}%22`, (cardData) => {
        cb(cardData);
    }, true);
}

/**
 * Fetches a list of all sets available on scryfall.
 * @param cb The callback to pass set data to.
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
 * @param code The code of the set to search for.
 * @param cb The callback to pass card data to.
 */
export function fromSet(code: string, cb: (cards: ScryfallCard[]) => void): void {
    APIRequest(`/cards/search?order=set&q=%2B%2Be%3A${code}`, (resp) => {
        cb(resp);
    }, true);
}

/**
 * Fetches a random card.
 * @param cb The callback to pass card data to.
 * @param format The format to retrieve this card as.
 */
export function randomCard(cb: (card: ScryfallCard) => void, format: "json" | "image" | "text" = "json"): void {
    APIRequest("/cards/random", (resp) => {
        cb(resp);
    });
}

const scryfallMethods = {
    fromSet: fromSet,
    allSets: allSets,
    autocomplete: autocomplete,
    cardVersions: cardVersions,
    getCard: getCard
}

export { scryfallMethods as Scryfall };


/**
 * Makes a request to the Scryfall API.
 * @param uri The path to request, including any query parameters.
 * @param cb The callback to invoke when the request has completed.
 * @param preserve Whether or not to preserve the original response structure from this request.
 * @param page Whether or not to return data as pages.
 */
function APIRequest(uri: string, cb: (res: any) => void, preserve: boolean = false, _partialData = [], page: boolean = false) {
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