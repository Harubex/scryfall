/**
 * Describes generic object returned from the Scryfall API. This interface is extended by all specific objects.
 */
export interface ScryfallObject {
    /**
     * Describes the type of information conained in the rest of this object.
     */
    object: "card" | "set" | "error" | "list" | "ruling" | "bulk_data" | "card_face" | "related_card" | "catalog" | "card_symbol" | "mana_cost";
}

export default ScryfallObject;
