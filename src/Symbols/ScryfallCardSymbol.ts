import ScryfallObject from "../types/ScryfallObject";
import ScryfallColor from "../types/ScryfallColor";

/**
 * A card symbol object represents an illustrated symbol that may appear in a card's mana cost or Oracle text.
 */
export interface ScryfallCardSymbol extends ScryfallObject {
    /**
     * The type descriptor for this object - will always equal "card_symbol".
     */
    object: "card_symbol";

    /**
     * The plaintext symbol. Often surrounded with curly braces {}. Note that not all symbols are ASCII text (for example, {∞}).
     */
    symbol: string;

    /**
     * An alternate version of this symbol, if it is possible to write it without curly braces.
     */
    loose_variant?: string;

    /**
     * An English snippet that describes this symbol. Appropriate for use in alt-text or other accessible communication formats.
     */
    english: string;

    /**
     * True if it is possible to write this symbol “backwards”.
     * For example, the official symbol {U/P} is sometimes written as {P/U} or {P\U} in informal settings.
     * Note that the Scryfall API never writes symbols backwards in other responses. This field is provided for informational purposes.
     */
    transposable: boolean;

    /**
     * True if this is a mana symbol.
     */
    represents_mana: boolean;

    /**
     * A decimal number representing this symbol's converted mana cost.
     * Note that mana symbols from funny sets can have fractional converted mana costs.
     */
    cmc: number;

    /**
     * True if this symbol appears in a mana cost on any Magic card.
     * For example {20} has this field set to false because {20} only appears in Oracle text, not mana costs.
     */
    appears_in_mana_costs: boolean;

    /**
     * 	True if this symbol is only used on funny cards or Un-cards.
     */
    funny: boolean;

    /**
     * An array of colors that this symbol represents.
     */
    colors: ScryfallColor[];

    /**
     * An array of plaintext versions of this symbol that Gatherer uses on old cards to describe original printed text.
     * For example: {W} has ["oW", "ooW"] as alternates.
     */
    gatherer_alternates?: string[];
}

export default ScryfallCardSymbol;
