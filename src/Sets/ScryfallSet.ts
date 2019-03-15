import ScryfallSetType from "./ScryfallSetType";
import ScryfallUUID from "../types/ScryfallUUID";
import ScryfallURI from "../types/ScryfallURI";
import ScryfallObject from "../types/ScryfallObject";

/**
 * An object that represents a group of related Magic cards. All unique cards on Scryfall belong to exactly one set.
 */
export interface ScryfallSet extends ScryfallObject {
    /**
     * The type descriptor for this object - will always equal "set".
     */
    object: "set";

    /**
     * A unique, permanent id for this set on Scryfall.
     */
    id: ScryfallUUID;

    /**
     * The unique three or four-letter code for this set.
     * Officially released sets always have a three-letter set code;
     * four-letter set codes exist simply for categorization purposes.
     */
    code: string;

    /**
     * The unique code for this set on Magic Online, which may differ from the regular code.
     */
    mtgo_code?: string;

    /**
     * This set's ID on TCGplayer's API, also known as the groupId.
     */
    tcgplayer_id?: number;

    /**
     * The English name of this set.
     */
    name: string;

    /**
     * The type of set this is (e.g. core, expansion, masters).
     */
    set_type: ScryfallSetType;

    /**
     * The date the set was released (in GMT-8 Pacific time). Not all sets have a known release date.
     */
    released_at?: Date;

    /**
     * The block code for this set, if any.
     */
    block_code?: string;

    /**
     * The block or group name code for this set, if any.
     */
    block?: string;

    /**
     * The set code for the parent set, if any. Promo and Token sets often have a parent set.
     */
    parent_set_code?: string;

    /**
     * The number of cards in this set.
     */
    card_count: number;

    /**
     * True if this set was only released on Magic Online.
     */
    digital: boolean;

    /**
     * True if this set contains only foil cards.
     */
    foil_only: boolean;

    /**
     * A link to this set’s permapage on Scryfall’s website.
     */
    scryfall_uri: ScryfallURI;

    /**
     * A link to this set object on Scryfall’s API.
     */
    uri: ScryfallURI;

    /**
     * A URI to an SVG file for this set’s icon on Scryfall’s CDN.
     */
    icon_svg_uri: string;

    /**
     * A Scryfall API URI that you can request to begin paging through the cards in this set.
     */
    search_uri: ScryfallURI;
}

export default ScryfallSet;
