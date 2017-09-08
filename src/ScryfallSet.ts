/**
 * A set, and information about it.
 */
export interface ScryfallSet {
    /**
     * Object code - should equal set.
     */
    object: "set";
    /**
     * The three or four-letter set code for this set.
     */
    code: string;
    /**
     * Specified which set a promo or token set is included in.
     */
    parent_set_code: string;
    /**
     * The English name of this set.
     */
    name: string;
    /**
     * The date the set was released (in GMT-8 Pacific time).
     */
    released_at: Date;
    /**
     * The type of set (code, expansion, masters, etc).
     */
    set_type: string;
    /**
     * The block this set is part of.
     */
    block: string;
    /**
     * Whether or not this is an all-foil set.
     */
    foil: boolean;
    /**
     * Whether or not this set is only available in digital form.
     */
    digital: false;
    /**
     * The number of cards in this set.
     */
    card_count: number;
    /**
     * A URI to an SVG file for this set’s icon on Scryfall’s CDN.
     */
    icon_svg_uri: string;
    /**
     * A Scryfall API URI that you can request to begin paginating over the cards in this set.
     */
    search_uri: string;
}