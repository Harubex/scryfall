/**
 * The faces of this card, if more than one face is present. Also contains seperate card parts for cards that have several (e.g. Flip cards, Aftermath cards).
 */
export interface ScryfallCardFace {
    /**
     * Object name - should equal "card_face".
     */
    object: "card_face";
    /**
     * The name of this card face.
     */
    name: string;
    /**
     * The mana cost for this card face. This value will be any empty string "" if the cost is absent or not on this face (per the game rules, a missing mana cost and a mana cost of 0 are different values).
     */
    mana_cost: string;
    /**
     * The type line of this card.
     */
    type_line: string;
    /**
     * The Oracle text for this card, if any.
     */
    oracle_text: string;
    /**
     * This card’s power, if any. Note that some cards have powers that are not numeric, such as *.
     */
    power?: string;
    /**
     * This card’s toughness, if any. Note that some cards have toughnesses that are not numeric, such as *.
     */
    toughness?: string;
}