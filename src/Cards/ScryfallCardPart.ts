import ScryfallUUID from "../types/ScryfallUUID";
import ScryfallURI from "../types/ScryfallURI";
import ScryfallObject from "../types/ScryfallObject";

/**
 * Cards that are closely related to other cards
 * (because they call them by name, or generate a token, or meld, etc)
 * have a property that contains related card objects. This is essentially a partial card object.
 */
export interface ScryfallCardPart extends ScryfallObject {
    /**
     * The type descriptor for this object - will always equal "related_card".
     */
    object: "related_card";

    /**
     * The unique id for this card in Scryfall’s database.
     */
    id: ScryfallUUID;

    /**
     * A field explaining what role this card plays in its relationship with the parent card.
     */
    component: "token" | "meld_part" | "meld_result" | "combo_piece";

    /**
     * The name of this particular related card.
     */
    name: string;

    /**
     * The type line of this card.
     */
    type_line: string;

    /**
     * A url where you can retrieve a full object describing this card on Scryfall’s API.
     */
    uri: ScryfallURI;
}

export default ScryfallCardPart;
