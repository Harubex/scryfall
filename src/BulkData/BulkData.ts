import APIRequest from "../request";
import ScryfallCallback from "../types/ScryfallCallback";
import ScryfallBulkData from "./ScryfallBulkData";

// #region all() & overloads.
/**
 * Retrieves an array of all bulk data items currently available through Scryfall. Typically, this is the latest exports for the current day.
 */
async function all(): Promise<ScryfallBulkData[]>;

/**
 * Retrieves an array of all bulk data items currently available through Scryfall. Typically, this is the latest exports for the current day.
 * @param cb A callback to pass bulk data to.
 */
function all(cb: ScryfallCallback<ScryfallBulkData[]>): void;

/**
 * Retrieves an array of all bulk data items currently available through Scryfall. Typically, this is the latest exports for the current day.
 * @param cb An optional callback to invoke in lieu of a promise.
 * @returns A promise if no callback is provided, otherwise nothing.
 */
function all(cb?: ScryfallCallback<ScryfallBulkData[]>): void | Promise<ScryfallBulkData[]> {
    return APIRequest("/bulk-data", cb);
}
// #endregion

export const BulkData = {
    all
};

export default BulkData;
