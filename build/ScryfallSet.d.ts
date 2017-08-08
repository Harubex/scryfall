/**
 * An interface describing data about the given set.
 */
export interface ScryfallSet {
    /**
     * Object code - should equal set.
     */
    object: string;
    /**
     * The three or four-letter set code for this set.
     */
    code: string;
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
