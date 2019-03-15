import APIRequest from "../request";
import ScryfallCallback from "../types/ScryfallCallback";
import ScryfallCardSymbol from "./ScryfallCardSymbol";
import ScryfallManaSymbol from "./ScryfallManaSymbol";

// #region all() & overloads.
/**
 * Retrieves an array of all card symbols.
 */
async function all(): Promise<ScryfallCardSymbol[]>;

/**
 * Retrieves an array of all card symbols.
 * @param cb A callback to pass symbol data to.
 */
function all(cb: ScryfallCallback<ScryfallCardSymbol[]>): void;

/**
 * Retrieves an array of all card symbols.
 * @param cb An optional callback to invoke in lieu of a promise.
 * @returns A promise if no callback is provided, otherwise nothing.
 */
function all(cb?: ScryfallCallback<ScryfallCardSymbol[]>): void | Promise<ScryfallCardSymbol[]> {
    return APIRequest("/symbology", cb);
}
// #endregion

// #region parseMana() & overloads.
/**
 * Parses the given mana cost parameter and returns Scryfall's interpretation.
 */
async function parseMana(cost: string): Promise<ScryfallManaSymbol>;

/**
 * Parses the given mana cost parameter and returns Scryfall's interpretation.
 * @param cb A callback to pass symbol data to.
 */
function parseMana(cost: string, cb: ScryfallCallback<ScryfallManaSymbol>): void;

/**
 * Parses the given mana cost parameter and returns Scryfall's interpretation.
 * @param cb An optional callback to invoke in lieu of a promise.
 * @returns A promise if no callback is provided, otherwise nothing.
 */
function parseMana(cost: string, cb?: ScryfallCallback<ScryfallManaSymbol>): void | Promise<ScryfallManaSymbol> {
    return APIRequest(`/symbology/parse-mana?cost=${cost}`, cb);
}
// #endregion

export const Symbols = {
    all, parseMana
};

export default Symbols;
