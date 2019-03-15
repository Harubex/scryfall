import ScryfallObject from "../types/ScryfallObject";
import ScryfallURI from "../types/ScryfallURI";

/**
 * An object that encapsulates multiple entries of a given Scryfall object.
 */
export interface ScryfallList<T extends ScryfallObject> extends ScryfallObject {
    /**
     * The type descriptor for this object - will always equal "list".
     */
    object: "list";

    /**
     * The total number of cards available to iterate through. Only exists when iterating through card objects.
     */
    total_cards?: number;

    /**
     * Indicates whether this object contains an paged list of results, and there is at least one page beyond this.
     */
    has_more: boolean;

    /**
     * A uri to request the next page of results. Only exists if has_more is set to true.
     */
    next_page?: ScryfallURI;

    /**
     * An array of human-readable warnings issued when generating this list, as strings.
     * Warnings are non-fatal issues that the API discovered with your input.
     */
    warnings: string[];

    /**
     * The data contained in this list, in a specific order.
     */
    data: T[];
}

export default ScryfallList;
