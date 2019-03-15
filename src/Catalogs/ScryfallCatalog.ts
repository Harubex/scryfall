import ScryfallURI from "../types/ScryfallURI";
import ScryfallObject from "../types/ScryfallObject";

/**
 * A Catalog object contains an array of Magic datapoints (words, card values, etc).
 * Catalog objects are provided by the API as aids for building other Magic software and understanding possible values for a field on Card objects.
 */
export interface ScryfallCatalog extends ScryfallObject {
    /**
     * The type descriptor for this object - will always equal "catalog".
     */
    object: "catalog";

    /**
     * A link to the current catalog on Scryfall’s API.
     */
    uri: ScryfallURI;

    /**
     * The number of items in the data array.
     */
    total_values: number;

    /**
     * An array of datapoints, as strings.
     */
    data: string[];
}

export default ScryfallCatalog;
