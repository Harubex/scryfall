import ScryfallObject from "../types/ScryfallObject";

/**
 * Rulings represent Oracle rulings, Wizards of the Coast set release notes, or Scryfall notes for a particular card. 
 * If two cards have the same name, they will have the same set of rulings objects. 
 * If a card has rulings, it usually has more than one.
 */
export interface ScryfallRuling extends ScryfallObject {
    /**
     * The type descriptor for this object - will always equal "ruling".
     */
    object: "ruling";

    /**
     * A computer-readable string indicating which company produced this ruling, either wotc or scryfall.
     */
    source: "wotc" | "scryfall";

    /**
     * The date when the ruling or note was published.
     */
    published_at: Date;

    /**
     * The text of the ruling.
     */
    comment: string;
}

export default ScryfallRuling;
