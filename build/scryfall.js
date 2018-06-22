"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const https = require("https");
const qs = require("querystring");
const url = require("url");
/**
 * Attempts to autocomplete the specified token, returning a list of possible matches.
 * @param token The token to search for.
 * @param cb An optional callback to pass names to.
 * @returns A promise, if no callback is specified. Otherwise nothing.
 */
function autocomplete(token, cb) {
    const ret = (cb) => {
        APIRequest(`/cards/autocomplete?q=${token}`, (cards) => {
            cb(Array.isArray(cards) ? cards : [cards]);
        }, true);
    };
    if (cb) {
        ret(cb);
    }
    else {
        return new Promise((resolve, reject) => ret(resolve));
    }
}
exports.autocomplete = autocomplete;
/**
 * Fetches a card with the given name, if only one match if found. Fails on multiple matches.
 * @param name The card name to search for, case-insensitive.
 * @param fuzzy Whether to use a fuzzy or an exact search.
 * @param cb An optional callback to pass card data to.
 * @returns A promise, if no callback is specified. Otherwise nothing.
 */
function getCardByName(name, fuzzy = false, cb) {
    const ret = (res, rej) => {
        APIRequest(`/cards/named?${fuzzy ? "fuzzy" : "exact"}=${name}`, (card) => {
            if (card.object === "error") {
                rej ? rej(card) : res(card);
            }
            else {
                rej ? res(card) : res(null, card);
            }
        });
    };
    if (cb) {
        ret(cb, null);
    }
    else {
        return new Promise((resolve, reject) => ret(resolve, reject));
    }
}
exports.getCardByName = getCardByName;
function getRulings(first, second, cb) {
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
    };
    if (cb) {
        ret(cb);
    }
    else {
        return new Promise((resolve, reject) => ret(resolve));
    }
}
exports.getRulings = getRulings;
/**
 * Fetches a specified page of cards from the list of all recorded cards.
 * @param page The page to retrieve.
 * @param cb An optional callback to pass card data to.
 * @returns A promise, if no callback is specified. Otherwise nothing.
 */
function getAllCards(page, cb) {
    const ret = (cb) => {
        APIRequest(`/cards?page=${page}`, cb, true, [], true);
    };
    if (cb) {
        ret(cb);
    }
    else {
        return new Promise((resolve, reject) => ret(resolve));
    }
}
exports.getAllCards = getAllCards;
function getCard(first, second, cb) {
    const ret = (res, rej) => {
        let firstType = typeof (first);
        let secondType = isNaN(parseInt((second && second.replace) ? second.replace(/[^0-9]/g, "") : second)) ? typeof (second) : "number";
        let url = "/cards/";
        let err = new Error();
        switch (secondType) {
            case "undefined":
            case "function":
                if (firstType !== "string") {
                    err.message = "The given Scryfall id is invalid";
                }
                else {
                    url += first;
                    if (typeof (second) === "function") {
                        res = second;
                    }
                }
                break;
            case "string":
                if (second !== "mtgo" && second !== "multiverse") {
                    err.message = "Unable to determine the type of id being used";
                }
                else {
                    url += `${second}/${first}`;
                }
                break;
            case "number":
                if (firstType !== "string") {
                    err.message = "Unable to determine set code/collector number being used.";
                }
                else {
                    url += `${first}/${encodeURIComponent(second)}`;
                }
                break;
            default:
                err.message = `Unable to parse arguments: ${secondType}`;
                rej ? rej(err) : res(err);
        }
        if (err && err.message) {
            rej ? rej(err) : res(err);
        }
        else {
            APIRequest(url, (cardData) => {
                if (cardData.object === "error") {
                    rej ? rej(cardData) : res(cardData);
                }
                else if (cardData.object === "list") {
                    console.warn("Scryfall card request returned more than one result - check your parameters.");
                    rej ? res(cardData) : res(null, cardData);
                }
                else {
                    rej ? res(cardData) : res(null, cardData);
                }
            });
        }
    };
    if (cb || typeof (second) === "function") {
        ret(cb, undefined);
    }
    else {
        return new Promise(ret);
    }
}
exports.getCard = getCard;
/**
 * Fetches all versions of a card with the specified name.
 * @param name The card name to search for.
 * @param cb An optional callback to pass card data to.
 * @returns A promise, if no callback is specified. Otherwise nothing.
 */
function cardVersions(name, cb) {
    const ret = (cb) => {
        APIRequest(`/cards/search?q=%2b%2b!%22${name}%22`, (cardData) => {
            cb(cardData);
        }, true);
    };
    if (cb) {
        ret(cb);
    }
    else {
        return new Promise((resolve, reject) => ret(resolve));
    }
}
exports.cardVersions = cardVersions;
/**
 * Fetches a list of all sets available on scryfall.
 * @param cb An optional callback to pass set data to.
 * @returns A promise, if no callback is specified. Otherwise nothing.
 */
function allSets(cb) {
    const ret = (cb) => {
        APIRequest("/sets", (resp) => {
            for (let i = 0; i < resp.length; i++) {
                resp[i].released_at = new Date(resp[i].released_at);
            }
            cb(resp);
        }, true);
    };
    if (cb) {
        ret(cb);
    }
    else {
        return new Promise((resolve, reject) => ret(resolve));
    }
}
exports.allSets = allSets;
/**
 * Fetches all the cards printed in a set with the specified code.
 * @param code The code of the set to search for.
 * @param cb An optional callback to pass card data to.
 * @returns A promise, if no callback is specified. Otherwise nothing.
 */
function fromSet(code, cb) {
    const ret = (cb) => {
        APIRequest(`/cards/search?order=set&q=%2B%2Be%3A${code}`, (resp) => {
            cb(resp);
        }, true);
    };
    if (cb) {
        ret(cb);
    }
    else {
        return new Promise((resolve, reject) => ret(resolve));
    }
}
exports.fromSet = fromSet;
/**
 * Fetches a random card.
 * @param format The format to retrieve this card as. Defaults to json.
 * @param cb An optional callback to pass card data to.
 * @returns A promise, if no callback is specified. Otherwise nothing.
 */
function randomCard(format = "json", cb) {
    const ret = (cb) => {
        APIRequest("/cards/random", (resp) => {
            cb(resp);
        });
    };
    if (cb) {
        ret(cb);
    }
    else {
        return new Promise((resolve, reject) => ret(resolve));
    }
}
exports.randomCard = randomCard;
const scryfallMethods = {
    fromSet: fromSet,
    allSets: allSets,
    autocomplete: autocomplete,
    cardVersions: cardVersions,
    getCard: getCard,
    getRulings: getRulings,
    randomCard: randomCard
};
exports.Scryfall = scryfallMethods;
/**
 * Makes a request to the Scryfall API.
 * @param uri The path to request, including any query parameters.
 * @param cb The callback to invoke when the request has completed.
 * @param preserve Whether or not to preserve the original response structure from this request.
 * @param page Whether or not to return data as pages.
 */
function APIRequest(uri, cb, preserve = false, _partialData = [], page = false) {
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
//# sourceMappingURL=scryfall.js.map