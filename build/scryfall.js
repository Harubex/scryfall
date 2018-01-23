"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var https = require("https");
var qs = require("querystring");
var url = require("url");
/**
 * Attempts to autocomplete the specified token, returning a list of possible matches.
 * @param token The token to search for.
 * @param cb The callback to pass names to.
 */
function autocomplete(token, cb) {
    APIRequest("/cards/autocomplete?q=" + token, function (cards) {
        cb(Array.isArray(cards) ? cards : [cards]);
    }, true);
}
exports.autocomplete = autocomplete;
/**
 * Fetches a specified page of cards from the list of all recorded cards.
 * @param page The page to retrieve.
 * @param cb The callback ot pass card info to.
 */
function getAllCards(page, cb) {
    APIRequest("/cards?page=" + page, cb, true, [], true);
}
exports.getAllCards = getAllCards;
function getCard(first, second, cb) {
    var firstType = typeof (first);
    var secondType = isNaN(parseInt(second.replace ? second.replace(/[^0-9]/g, "") : second)) ? typeof (second) : "number";
    var url = "/cards/";
    var err = null;
    switch (secondType) {
        case "function":// This will be a scryfall id lookup.
            if (firstType !== "string") {
                err = "The given Scryfall id is invalid";
            }
            else {
                url += first;
                cb = second;
            }
            break;
        case "string" || false:// This will be a lookup by a multiverse or mtgo id.
            if (second !== "mtgo" && second !== "multiverse") {
                err = "Unable to determine the type of id being used";
            }
            else {
                url += second + "/" + first;
            }
            break;
        case "number":// This will be a lookup by a set/collector pair.
            if (firstType !== "string") {
                err = "Unable to determine set code/collector number being used.";
            }
            else {
                url += first + "/" + encodeURIComponent(second);
            }
            break;
    }
    if (err) {
        cb(err);
    }
    else {
        APIRequest(url, function (cardData) {
            if (cardData.object === "error") {
                cb(cardData);
            }
            else if (cardData.object === "list") {
                console.warn("Scryfall card request returned more than one result - check your parameters.");
                cb(null, cardData);
            }
            else {
                cb(null, cardData);
            }
        });
    }
}
exports.getCard = getCard;
/**
 * Gets all versions of a card with the specified name.
 * @param name The card name to search for.
 * @param cb The callback to pass card data to.
 */
function cardVersions(name, cb) {
    APIRequest("/cards/search?q=%2b%2b!%22" + name + "%22", function (cardData) {
        cb(cardData);
    }, true);
}
exports.cardVersions = cardVersions;
/**
 * Fetches a list of all sets available on scryfall.
 * @param cb The callback to pass set data to.
 */
function allSets(cb) {
    APIRequest("/sets", function (resp) {
        for (var i = 0; i < resp.length; i++) {
            resp[i].released_at = new Date(resp[i].released_at);
        }
        cb(resp);
    }, true);
}
exports.allSets = allSets;
/**
 * Gets all the cards printed in a set with the specified code.
 * @param code The code of the set to search for.
 * @param cb The callback to pass card data to.
 */
function fromSet(code, cb) {
    APIRequest("/cards/search?order=set&q=%2B%2Be%3A" + code, function (resp) {
        cb(resp);
    }, true);
}
exports.fromSet = fromSet;
/**
 * Fetches a random card.
 * @param cb The callback to pass card data to.
 * @param format The format to retrieve this card as.
 */
function randomCard(cb, format) {
    if (format === void 0) { format = "json"; }
    APIRequest("/cards/random", function (resp) {
        cb(resp);
    });
}
exports.randomCard = randomCard;
var scryfallMethods = {
    fromSet: fromSet,
    allSets: allSets,
    autocomplete: autocomplete,
    cardVersions: cardVersions,
    getCard: getCard
};
exports.Scryfall = scryfallMethods;
/**
 * Makes a request to the Scryfall API.
 * @param uri The path to request, including any query parameters.
 * @param cb The callback to invoke when the request has completed.
 * @param preserve Whether or not to preserve the original response structure from this request.
 * @param page Whether or not to return data as pages.
 */
function APIRequest(uri, cb, preserve, _partialData, page) {
    if (preserve === void 0) { preserve = false; }
    if (_partialData === void 0) { _partialData = []; }
    if (page === void 0) { page = false; }
    var parsedUrl = url.parse(uri);
    var query = qs.parse(parsedUrl.query);
    if (!query.format) {
        query.format = "json";
    }
    var reqOps = {
        host: parsedUrl.host || "api.scryfall.com",
        path: (parsedUrl.pathname || "") + "?" + qs.stringify(query),
        headers: {}
    };
    var req = https.get(reqOps, function (resp) {
        if (resp.statusCode === 429) {
            throw new Error("Too many requests have been made. Please wait a moment before making a new request.");
        }
        var responseData = "";
        resp.on("data", function (chunk) {
            responseData += chunk;
        });
        resp.on("end", function () {
            try {
                var jsonResp = JSON.parse(responseData);
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