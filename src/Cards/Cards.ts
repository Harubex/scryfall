import ScryfallCard from "../Cards/ScryfallCard";
import APIRequest from "../request";
import ScryfallCallback from "types/ScryfallCallback";
import { ScryfallCatalog } from "../Catalogs";
import ScryfallFormat from "../types/ScryfallFormat";

/**
 * This is the size of a full page returned from this API.
 * If a page is returned with fewer results than this, then it should be the last page.
 */
const pageSize = 175;

// #region byPage() & overloads.
/**
 * Retrieves an array of all cards currently in Scryfall's database, by page. Pages are returned 175 cards at a time.
 * Note that the number of pages from this endpoint is currently well over 1000, and will take some time to iterate through.
 */
async function byPage(page: number): Promise<ScryfallCard[]>;

/**
 * Retrieves an array of all cards currently in Scryfall's database, by page. Pages are returned 175 cards at a time.
 * Note that the number of pages from this endpoint is currently well over 1000, and will take some time to iterate through.
 * @param page The page of results to return. Cards are ordered roughly newest to oldest.
 * @param cb A callback to pass card data to.
 */
function byPage(page: number, cb: ScryfallCallback<ScryfallCard[]>): void;

/**
 * Retrieves an array of all cards currently in Scryfall's database, by page. Pages are returned 175 cards at a time.
 * Note that the number of pages from this endpoint is currently well over 1000, and will take some time to iterate through.
 * @param page The page of results to return. Cards are ordered roughly newest to oldest.
 * @param cb An optional callback to invoke in lieu of a promise.
 * @returns A promise if no callback is provided, otherwise nothing.
 */
function byPage(page: number, cb?: ScryfallCallback<ScryfallCard[]>): void | Promise<ScryfallCard[]> {
    return APIRequest(`/cards?page=${page}`, cb);
}
// #endregion

// #region all() & overloads.
async function* all(): AsyncIterableIterator<ScryfallCard> {
    let page = 1; // Paging starts at one.
    let lastPage: ScryfallCard[] = [];
    do {
        lastPage = await byPage(page++);
        for (const card of lastPage) {
            yield card;
        }
    } while (lastPage.length === pageSize);
}
// #endregion

// #region autocomplete() & overloads.
/**
 * Retrieves a Catalog object containing up to 20 full English card names that could be autocompletions of the given string parameter.
 * @param partialName The partial name to search for. Spaces are ignored.
 */
async function autocomplete(partialName: string): Promise<ScryfallCatalog>;

/**
 * Retrieves a Catalog object containing up to 20 full English card names that could be autocompletions of the given string parameter.
 * @param partialName The partial name to search for. Spaces are ignored.
 * @param cb A callback to pass card data to.
 */
function autocomplete(partialName: string, cb: ScryfallCallback<ScryfallCatalog>): void;

/**
 * Retrieves a Catalog object containing up to 20 full English card names that could be autocompletions of the given string parameter.
 * @param partialName The partial name to search for. Spaces are ignored.
 * @param cb An optional callback to invoke in lieu of a promise.
 * @returns A promise if no callback is provided, otherwise nothing.
 */
function autocomplete(partialName: string, cb?: ScryfallCallback<ScryfallCatalog>): void | Promise<ScryfallCatalog> {
    return APIRequest(`/cards/autocomplete?q=${partialName}`, cb);
}
// #endregion

// #region random() & overloads.
/**
 * Retrieves a random Card object.
 * @param searchQuery An optional fulltext search query to filter the pool of random cards. Make sure that your parameter is properly encoded.
 * @param format The data format to return: json, text, or image. Defaults to json.
 */
async function random(searchQuery?: string, format?: Exclude<ScryfallFormat, "csv">): Promise<ScryfallCard>;

/**
 * Retrieves a random Card object.
 * @param searchQuery An optional fulltext search query to filter the pool of random cards. Make sure that your parameter is properly encoded.
 * @param format The data format to return: json, text, or image. Defaults to json.
 * @param cb A callback to pass card data to.
 */
function random(searchQuery?: string, format?: Exclude<ScryfallFormat, "csv">, cb?: ScryfallCallback<ScryfallCard>): void;

/**
 * Retrieves a random Card object.
 * @param searchQuery An optional fulltext search query to filter the pool of random cards. Make sure that your parameter is properly encoded.
 * @param format The data format to return: json, text, or image. Defaults to json.
 * @param cb An optional callback to invoke in lieu of a promise.
 * @returns A promise if no callback is provided, otherwise nothing.
 */
function random(
    searchQuery?: string, format?: Exclude<ScryfallFormat, "csv">, cb?: ScryfallCallback<ScryfallCard>
): void | Promise<ScryfallCard> {
    return APIRequest(`/cards/autocomplete?q=${searchQuery}&format=${format}`, cb);
}
// #endregion

// #region random() & overloads.
/**
 * Retrieves one or more Card objects with the provided name.
 * @param cardName The card name to search for.
 * @param fuzzy Whether or not to consider the given card name as fuzzy.
 * @param format The data format to return: json, text, or image. Defaults to json.
 */
async function byName(cardName: string, fuzzy?: boolean, format?: Exclude<ScryfallFormat, "csv">): Promise<ScryfallCard[]>;

/**
 * Retrieves one or more Card objects with the provided name.
 * @param cardName The card name to search for.
 * @param fuzzy Whether or not to consider the given card name as fuzzy.
 * @param format The data format to return: json, text, or image. Defaults to json.
 * @param cb A callback to pass card data to.
 */
function byName(cardName: string, fuzzy?: boolean, format?: Exclude<ScryfallFormat, "csv">, cb?: ScryfallCallback<ScryfallCard[]>): void;

/**
 * Retrieves one or more Card objects with the provided name.
 * @param cardName The card name to search for.
 * @param fuzzy Whether or not to consider the given card name as fuzzy.
 * @param format The data format to return: json, text, or image. Defaults to json.
 * @param cb An optional callback to invoke in lieu of a promise.
 * @returns A promise if no callback is provided, otherwise nothing.
 */
function byName(
    cardName: string, fuzzy?: boolean, format?: Exclude<ScryfallFormat, "csv">, cb?: ScryfallCallback<ScryfallCard[]>
): void | Promise<ScryfallCard[]> {
    return APIRequest(`/cards/named?${fuzzy ? "fuzzy" : "exact"}=${cardName}&format=${format}`, cb);
}

export const Cards = {
    pageSize, all, byPage, autocomplete, random, byName
};

export default Cards;
