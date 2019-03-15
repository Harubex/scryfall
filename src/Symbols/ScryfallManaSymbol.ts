import ScryfallObject from "../types/ScryfallObject";
import ScryfallColor from "../types/ScryfallColor";

/**
 * A mana symbol object represents a collection of one or more symbols as they'd appear in a card's mana cost.
 */
export interface ScryfallManaSymbol extends ScryfallObject {
    /**
     * The type descriptor for this object - will always equal "mana_cost".
     */
    object: "mana_cost";

    /**
     * The normalized cost, with correctly-ordered and wrapped mana symbols.
     */
    cost: string;

    /**
     * The converted mana cost. If you submit Un-set mana symbols, this decimal could include fractional parts.
     */
    cmc: number;

    /**
     * 	The colors of the given cost.
     */
    colors: ScryfallColor[];

    /**
     * True if the cost is colorless.
     */
    colorless: boolean;

    /**
     * True if the cost is monocolored.
     */
    monocolored: boolean;

    /**
     * True if the cost is multicolored.
     */
    multicolored: boolean;

}

export default ScryfallManaSymbol;
