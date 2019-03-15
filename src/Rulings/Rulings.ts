import APIRequest from "../request";
import ScryfallCard from "../Cards/ScryfallCard";
import ScryfallUUID from "../types/ScryfallUUID";
import ScryfallCallback from "../types/ScryfallCallback";
import ScryfallRuling from "./ScryfallRuling";

// #region byMultiverseId() & overloads.
/**
 * Retrieves an array of rulings for a card with the given multiverse id.
 * If the card has multiple multiverse ids, this method can find either of them.
 * @param id The multiverse id to search for.
 */
async function byMultiverseId(id: number): Promise<ScryfallRuling[]>;
/**
 * Retrieves an array of rulings for a card with the given multiverse id.
 * If the card has multiple multiverse ids, this method can find either of them.
 * @param id The multiverse id to search for.
 * @param cb An optional callback to pass ruling data to.
 */
function byMultiverseId(id: number, cb: ScryfallCallback<ScryfallRuling[]>): void;
/**
 * Retrieves an array of rulings for a card with the given multiverse id.
 * If the card has multiple multiverse ids, this method can find either of them.
 * @param id The multiverse id to search for.
 * @param cb An optional callback to invoke in lieu of a promise.
 * @returns A promise if no callback is provided, otherwise nothing.
 */
function byMultiverseId(id: number, cb?: ScryfallCallback<ScryfallRuling[]>): void | Promise<ScryfallRuling[]> {
    return APIRequest(`/cards/multiverse/${id}/rulings`, cb, true);
}
// #endregion

// #region byMtgoId() & overloads.
/**
 * Retrieves an array of rulings for a card with the given mtgo id (also known as the catalog id).
 * The id can either be the card's mtgo_id or its mtgo_foil_id.
 * @param id The mtgo id to search for.
 */
async function byMtgoId(id: number): Promise<ScryfallRuling[]>;
/**
 * Retrieves an array of rulings for a card with the given mtgo id (also known as the catalog id).
 * The id can either be the card's mtgo_id or its mtgo_foil_id.
 * @param id The mtgo id to search for.
 * @param cb An optional callback to pass ruling data to.
 */
function byMtgoId(id: number, cb: ScryfallCallback<ScryfallRuling[]>): void;
/**
 * Retrieves an array of rulings for a card with the given mtgo id (also known as the catalog id).
 * The id can either be the card's mtgo_id or its mtgo_foil_id.
 * @param id The mtgo id to search for.
 * @param cb An optional callback to invoke in lieu of a promise.
 * @returns A promise if no callback is provided, otherwise nothing.
 */
function byMtgoId(id: number, cb?: ScryfallCallback<ScryfallRuling[]>): void | Promise<ScryfallRuling[]> {
    return APIRequest(`/cards/mtgo/${id}/rulings`, cb, true);
}
// #endregion

// #region byArenaId() & overloads.
/**
 * Retrieves an array of rulings for a card with the given mtgo id (also known as the catalog id).
 * The id can either be the card's mtgo_id or its mtgo_foil_id.
 * @param id The arena id to search for.
 */
async function byArenaId(id: number): Promise<ScryfallRuling[]>;
/**
 * Retrieves an array of rulings for a card with the given mtgo id (also known as the catalog id).
 * The id can either be the card's mtgo_id or its mtgo_foil_id.
 * @param id The arena id to search for.
 * @param cb An optional callback to pass ruling data to.
 */
function byArenaId(id: number, cb: ScryfallCallback<ScryfallRuling[]>): void;
/**
 * Retrieves an array of rulings for a card with the given mtgo id (also known as the catalog id).
 * The id can either be the card's mtgo_id or its mtgo_foil_id.
 * @param id The arena id to search for.
 * @param cb An optional callback to invoke in lieu of a promise.
 * @returns A promise if no callback is provided, otherwise nothing.
 */
function byArenaId(id: number, cb?: ScryfallCallback<ScryfallRuling[]>): void | Promise<ScryfallRuling[]> {
    return APIRequest(`/cards/mtgo/${id}/rulings`, cb, true);
}
// #endregion

// #region byCard() & overloads.
/**
 * Retrieves an array of rulings for the provided card object.
 * @param card The card to search for.
 */
async function byCard(card: ScryfallCard): Promise<ScryfallRuling[]>;
/**
 * Retrieves an array of rulings for the provided card object.
 * @param card The card to search for.
 * @param cb An optional callback to pass ruling data to.
 */
function byCard(card: ScryfallCard, cb: ScryfallCallback<ScryfallRuling[]>): void;
/**
 * Retrieves an array of rulings for the card with the given set code and collector number.
 * @param cardInfo The card info to search with.
 */
async function byCard(cardInfo: { set: string, collector_number: string | number }): Promise<ScryfallRuling[]>;
/**
 * Retrieves an array of rulings for the card with the given set code and collector number.
 * @param cardInfo The card info to search with.
 * @param cb An optional callback to pass ruling data to.
 */
function byCard(cardInfo: { set: string, collector_number: string | number }, cb: ScryfallCallback<ScryfallRuling[]>): void;
/**
 * Retrieves an array of rulings for the card with the given set code and collector number.
 * @param cardInfo The card info to search with.
 * @param cb An optional callback to invoke in lieu of a promise.
 * @returns A promise if no callback is provided, otherwise nothing.
 */
function byCard(card: { set: string, collector_number: string | number }, cb?: ScryfallCallback<ScryfallRuling[]>): void | Promise<ScryfallRuling[]> {
    return APIRequest(`/cards/${card.set}/${card.collector_number}/rulings`, cb, true);
}
// #endregion

// #region byScryfallId() & overloads.
/**
 * Retrieves an array of rulings for a card with the given Scryfall id.
 * @param id The Scryfall id to search for.
 */
async function byScryfallId(id: ScryfallUUID): Promise<ScryfallRuling[]>;
/**
 * Retrieves an array of rulings for a card with the given Scryfall id.
 * @param id The Scryfall id to search for.
 * @param cb An optional callback to pass ruling data to.
 */
function byScryfallId(id: ScryfallUUID, cb: ScryfallCallback<ScryfallRuling[]>): void;
/**
 * Retrieves an array of rulings for a card with the given Scryfall id.
 * @param id The Scryfall id to search for.
 * @param cb An optional callback to invoke in lieu of a promise.
 * @returns A promise if no callback is provided, otherwise nothing.
 */
function byScryfallId(id: ScryfallUUID, cb?: ScryfallCallback<ScryfallRuling[]>): void | Promise<ScryfallRuling[]> {
    return APIRequest(`/cards/${id}/rulings`, cb, true);
}
// #endregion

export const Rulings = {
    byMultiverseId, byMtgoId, byArenaId, byCard, byScryfallId
};

export default Rulings;
