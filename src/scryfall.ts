import * as https from "https";
import * as qs from "querystring";
import * as url from "url";
import { ScryfallListResponse } from "./types/ScryfallResponses";
import { ScryfallSet } from "./types/ScryfallSet";
import { ScryfallCard } from "./types/ScryfallCard";
import { ScryfallError } from "./types/ScryfallError";
import { ScryfallRuling } from "./types/ScryfallRuling";
import request from "./request";
import scryfall from "./Scry";

/**
 * Attempts to autocomplete the specified token, returning a list of possible matches.
 * @param token The token to search for.
 * @param cb An optional callback to pass names to.
 * @returns A promise, if no callback is specified. Otherwise nothing.
 */
export function autocomplete(token: string, cb?: (matches: string[]) => void): Promise<string[]> {
    const ret = (cb) => {
        APIRequest(`/cards/autocomplete?q=${token}`, (cards) => {
            cb(Array.isArray(cards) ? cards : [cards]);
        }, true);
    };
    if (cb) {
        ret(cb);
    } else {
        return new Promise<string[]>((resolve, reject) => ret(resolve));
    }
}

export function autocomplete(token: string): Promise<string[]>;

/**
 * Fetches a card with the given name, if only one match if found. Fails on multiple matches.
 * @param name The card name to search for, case-insensitive.
 * @param fuzzy Whether to use a fuzzy or an exact search.
 * @param cb An optional callback to pass card data to.
 * @returns A promise, if no callback is specified. Otherwise nothing.
 */
export function getCardByName(name: string, fuzzy: boolean = false, cb?: (err: ScryfallError, card: ScryfallCard) => void): Promise<ScryfallCard> {
    const ret = (res, rej) => {
        APIRequest(`/cards/named?${fuzzy ? "fuzzy" : "exact"}=${name}`, (card: ScryfallError | ScryfallCard) => {
            if (card.object === "error") {
                rej ? rej(card) : res(card);
            } else {
                rej ? res(card) : res(null, card);
            }
        });
    }
    if (cb) {
        ret(cb, null);
    } else {
        return new Promise<ScryfallCard>((resolve, reject) => ret(resolve, reject));
    }
}

/**
 * Fetches a list of rulings for the specified card.
 * @param card The card object to retrieve rulings for.
 * @param cb An optional callback to pass names to.
 * @returns A promise, if no callback is specified. Otherwise nothing.
 */
export function getRulings(card: ScryfallCard, cb?: (rulings: ScryfallRuling[]) => void): Promise<ScryfallRuling[]>;
/**
 * Fetches a list of rulings for a card with the specified set/code.
 * @param setCode The card set.
 * @param cardNumber The card number.
 * @param cb An optional callback to pass names to.
 * @returns A promise, if no callback is specified. Otherwise nothing.
 */
export function getRulings(setCode: string, cardNumber: string, cb?: (rulings: ScryfallRuling[]) => void): Promise<ScryfallRuling[]>;
export function getRulings(first: ScryfallCard | string, second?: any, cb?: (rulings: ScryfallRuling[]) => void): Promise<ScryfallRuling[]> {
    const ret = (cb) => {
        let code = first;
        let num = second;
        if (typeof (first) !== "string") {
            code = first.set;
            num = first.collector_number;
            cb = second;
        }
        APIRequest(`/cards/${code}/${num}`, (rulings) => {
            cb(rulings);
        }, true);
    }
    if (cb) {
        ret(cb);
    } else {
        return new Promise<ScryfallRuling[]>((resolve, reject) => ret(resolve));
    }
}

/**
 * Fetches a specified page of cards from the list of all recorded cards.
 * @param page The page to retrieve.
 * @param cb An optional callback to pass card data to.
 * @returns A promise, if no callback is specified. Otherwise nothing.
 */
export function getAllCards(page: number, cb?: (cards: ScryfallCard[]) => void): Promise<ScryfallCard[]> {
    const ret = (cb) => {
        APIRequest(`/cards?page=${page}`, cb, true, [], true);
    };
    if (cb) {
        ret(cb);
    } else {
        return new Promise<ScryfallCard[]>((resolve, reject) => ret(resolve));
    }
}

/**
 * Gets a card by its set code and collector number. Only available for cards that have collector numbers.
 * @param code The set code for this card.
 * @param number The collector number for this card.
 * @param cb An optional callback to pass card data to.
 * @returns A promise, if no callback is specified. Otherwise nothing.
 */
export function getCard(code: string, number: number, cb?: (err: ScryfallError, card?: ScryfallCard) => void): Promise<ScryfallCard>;

/**
 * Gets a card by its multiverse id. Only available to cards that have multiverse ids.
 * @param multiverseId The multiverse id for this card.
 * @param type The type of this id. Must be the string literal "multiverse".
 * @param cb An optional callback to pass card data to.
 * @returns A promise, if no callback is specified. Otherwise nothing.
 */
export function getCard(multiverseId: number, type: "multiverse", cb?: (err: ScryfallError, card?: ScryfallCard) => void): Promise<ScryfallCard>;

/**
 * Gets a card by its Magic Online id. Only available to cards that exist on Magic Online.
 * @param multiverseId The Magic Online id for this card.
 * @param type The type of this id. Must be the string literal "mtgo".
 * @param cb An optional callback to pass card data to.
 * @returns A promise, if no callback is specified. Otherwise nothing.
 */
export function getCard(mtgoId: number, type: "mtgo", cb?: (err: ScryfallError, card?: ScryfallCard) => void): Promise<ScryfallCard>;

/**
 * Gets a card by its Scryfall id. Available to every card fetchable through this API. It'd be kind of weird if it wasn't.
 * @param scryfallId The Scryfall id for this card.
 * @param cb An optional callback to pass card data to.
 * @returns A promise, if no callback is specified. Otherwise nothing.
 */
export function getCard(scryfallId: string, cb?: (err: ScryfallError, card?: ScryfallCard) => void): Promise<ScryfallCard>;

export function getCard(first?: number | string, second?: any, cb?: (err: ScryfallError, card?: ScryfallCard) => void): Promise<ScryfallCard> {
    const ret = (res, rej) => {
        let firstType = typeof (first);
        let secondType = isNaN(parseInt((second && second.replace) ? second.replace(/[^0-9]/g, "") : second)) ? typeof (second) : "number";
        let url = "/cards/";
        let err = new Error();
        switch (secondType) {
            case "undefined":
            case "function": // This will be a scryfall id lookup.
                if (firstType !== "string") {
                    err.message = "The given Scryfall id is invalid";
                } else {
                    url += first;
                    if (typeof (second) === "function") {
                        res = second;
                    }
                }
                break;
            case "string": // This will be a lookup by a multiverse or mtgo id.
                if (second !== "mtgo" && second !== "multiverse") {
                    err.message = "Unable to determine the type of id being used";
                } else {
                    url += `${second}/${first}`;
                }
                break;
            case "number": // This will be a lookup by a set/collector pair.
                if (firstType !== "string") {
                    err.message = "Unable to determine set code/collector number being used."
                } else {
                    url += `${first}/${encodeURIComponent(second)}`;
                }
                break;
            default:
                err.message = `Unable to parse arguments: ${secondType}`;
                rej ? rej(err) : res(err);
        }
        if (err && err.message) {
            rej ? rej(err) : res(err);
        } else {
            APIRequest(url, (cardData) => {
                if (cardData.object === "error") {
                    rej ? rej(cardData as ScryfallError) : res(cardData as ScryfallError);
                } else if (cardData.object === "list") {
                    console.warn("Scryfall card request returned more than one result - check your parameters.");
                    rej ? res(cardData) : res(null, cardData);
                } else {
                    rej ? res(cardData) : res(null, cardData);
                }
            });
        }
    };
    if (cb || typeof (second) === "function") {
        ret(cb, undefined);
    } else {
        return new Promise<ScryfallCard>(ret);
    }
}

/**
 * Fetches all versions of a card with the specified name.
 * @param name The card name to search for.
 * @param cb An optional callback to pass card data to.
 * @returns A promise, if no callback is specified. Otherwise nothing.
 */
export function cardVersions(name: string, cb?: (cards: ScryfallCard[]) => void): Promise<ScryfallCard[]> {
    const ret = (cb) => {
        APIRequest(`/cards/search?q=%2b%2b!%22${name}%22`, (cardData) => {
            cb(cardData);
        }, true);
    };
    if (cb) {
        ret(cb);
    } else {
        return new Promise<ScryfallCard[]>((resolve, reject) => ret(resolve));
    }
}

/**
 * Fetches a list of all sets available on scryfall.
 * @param cb An optional callback to pass set data to.
 * @returns A promise, if no callback is specified. Otherwise nothing.
 */
export function allSets(cb?: (sets: ScryfallSet[]) => void): Promise<ScryfallSet[]> {
    const ret = (cb) => {
        APIRequest("/sets", (resp) => {
            for (let i = 0; i < resp.length; i++) {
                resp[i].released_at = new Date(resp[i].released_at);
            }
            cb(resp);
        }, true);
    }
    if (cb) {
        ret(cb);
    } else {
        return new Promise<ScryfallSet[]>((resolve, reject) => ret(resolve));
    }
}

/**
 * Fetches all the cards printed in a set with the specified code.
 * @param code The code of the set to search for.
 * @param cb An optional callback to pass card data to.
 * @returns A promise, if no callback is specified. Otherwise nothing.
 */
export function fromSet(code: string, cb?: (cards: ScryfallCard[]) => void): Promise<ScryfallCard[]> {
    const ret = (cb) => {
        APIRequest(`/cards/search?order=set&q=%2B%2Be%3A${code}`, (resp) => {
            cb(resp);
        }, true);
    };
    if (cb) {
        ret(cb);
    } else {
        return new Promise<ScryfallCard[]>((resolve, reject) => ret(resolve));
    }
}

/**
 * Fetches a random card.
 * @param format The format to retrieve this card as. Defaults to json.
 * @param cb An optional callback to pass card data to.
 * @returns A promise, if no callback is specified. Otherwise nothing.
 */
export function randomCard(format: "json" | "image" | "text" = "json", cb?: (card: ScryfallCard) => void): Promise<ScryfallCard> {
    const ret = (cb) => {
        APIRequest("/cards/random", (resp) => {
            cb(resp);
        });
    };
    if (cb) {
        ret(cb);
    } else {
        return new Promise<ScryfallCard>((resolve, reject) => ret(resolve));
    }
}

const scryfallMethods = {
    fromSet: fromSet,
    allSets: allSets,
    autocomplete: autocomplete,
    cardVersions: cardVersions,
    getCard: getCard,
    getRulings: getRulings,
    randomCard: randomCard/**
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
}

export { scryfallMethods as Scryfall };


