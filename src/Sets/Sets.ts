import ScryfallSet from "../Sets/ScryfallSet";
import APIRequest from "../request";
import ScryfallCallback from "../types/ScryfallCallback";
import ScryfallUUID from "../types/ScryfallUUID";

// #region all() & overloads.
/**
 * Retrieves an array of all sets currently available through Scryfall, ordered by release date.
 */
async function all(): Promise<ScryfallSet[]>;

/**
 * Retrieves an array of all sets currently available through Scryfall, ordered by release date.
 * @param cb A callback to pass set data to.
 */
function all(cb: ScryfallCallback<ScryfallSet[]>): void;

/**
 * Retrieves an array of all sets currently available through Scryfall, ordered by release date.
 * @param cb An optional callback to invoke in lieu of a promise.
 * @returns A promise if no callback is provided, otherwise nothing.
 */
function all(cb?: ScryfallCallback<ScryfallSet[]>): void | Promise<ScryfallSet[]> {
    return APIRequest("/sets", cb);
}
// #endregion

// #region byCode() & overloads.
/**
 * Retrieves a set with the given set code. The code can be either the code or the mtgo_code for the requested set.
 * @param setCode The code to search for.
 */
async function byCode(setCode: string): Promise<ScryfallSet>;
/**
 * Retrieves a set with the given set code. The code can be either the code or the mtgo_code for the requested set.
 * @param setCode The code to search for.
 * @param cb An optional callback to pass set data to.
 */
function byCode(setCode: string, cb: ScryfallCallback<ScryfallSet>): void;
/**
 * Retrieves a set with the given set code. The code can be either the code or the mtgo_code for the requested set.
 * @param setCode The code to search for.
 * @param cb An optional callback to invoke in lieu of a promise.
 * @returns A promise if no callback is provided, otherwise nothing.
 */
function byCode(setCode: string, cb?: ScryfallCallback<ScryfallSet>): void | Promise<ScryfallSet> {
    return APIRequest(`/sets/${setCode}`, cb);
}
// #endregion

// #region byScryfallId() & overloads.
/**
 * Retrieves a set with the given Scryfall id.
 * @param id The Scryfall id to search for.
 */
async function byScryfallId(id: ScryfallUUID): Promise<ScryfallSet>;
/**
 * Retrieves a set with the given Scryfall id.
 * @param id The Scryfall id to search for.
 * @param cb An optional callback to pass set data to.
 */
function byScryfallId(id: ScryfallUUID, cb: ScryfallCallback<ScryfallSet>): void;
/**
 * Retrieves a set with the given Scryfall id.
 * @param id The Scryfall id to search for.
 * @param cb An optional callback to invoke in lieu of a promise.
 * @returns A promise if no callback is provided, otherwise nothing.
 */
function byScryfallId(id: ScryfallUUID, cb?: ScryfallCallback<ScryfallSet>): void | Promise<ScryfallSet> {
    return APIRequest(`/sets/${id}`, cb);
}
// #endregion

// #region byTcgplayerId() & overloads.
/**
 * Retrieves a set with the given tcgplayer_id, also known as the groupId on TCGPlayer’s API.
 * @param id The TCGPlayer id to search for.
 */
async function byTcgplayerId(id: number): Promise<ScryfallSet>;
/**
 * Retrieves a set with the given tcgplayer_id, also known as the groupId on TCGPlayer’s API.
 * @param id The TCGPlayer id to search for.
 * @param cb An optional callback to pass set data to.
 */
function byTcgplayerId(id: number, cb: ScryfallCallback<ScryfallSet>): void;
/**
 * Retrieves a set with the given tcgplayer_id, also known as the groupId on TCGPlayer’s API.
 * @param id The TCGPlayer id to search for.
 * @param cb An optional callback to invoke in lieu of a promise.
 * @returns A promise if no callback is provided, otherwise nothing.
 */
function byTcgplayerId(id: number, cb?: ScryfallCallback<ScryfallSet>): void | Promise<ScryfallSet> {
    return APIRequest(`/sets/tcgplayer/${id}`, cb);
}
// #endregion

/**
 * All set-related endpoints available through Scryfall.
 */
export const Sets = {
    all, byCode, byScryfallId, byTcgplayerId
};

export default Sets;
