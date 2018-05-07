import { ScryfallRuling } from "./ScryfallRuling";
import { ScryfallLayout } from "./ScryfallLayout";
import { ScryfallColor } from "./ScryfallColor";
import { ScryfallCardFace } from "./ScryfallCardFace";

/**
 * Card objects represent individual Magic cards that players can obtain and add to their collection (with a few minor exceptions).
 */
export interface ScryfallCard {

    // Core Fields

    /**
     * A unique ID for this card in Scryfall’s database.
     */
    id: ScryfallUUID;
    /**
     * A unique ID for this card’s oracle identity. This value is consistent across reprinted card editions, and unique among different cards with the same name (e.g. tokens, Unstable variants).
     */
    oracle_id: ScryfallUUID;
    /**
     * This card’s multiverse IDs on Gatherer, if any, as an array of integers. Note that Scryfall includes many promo cards, tokens, and other esoteric objects that do not have these identifiers.
     */
    multiverse_id?: number[];
    /**
     * This card’s Magic Online ID (also known as the Catalog ID), if any. A large percentage of cards are not available on Magic Online and do not have this ID.
     */
    mtgo_id?: number;
    /**
     * This card’s foil Magic Online ID (also known as the Catalog ID), if any. A large percentage of cards are not available on Magic Online and do not have this ID.
     */
    mtgo_foil_id?: number;
    /**
     * A link to this card object on Scryfall’s API.
     */
    uri: ScryfallURI;
    /**
     * 	A link to this card’s permapage on Scryfall’s website.
     */
    scryfall_uri: ScryfallURI;
    /**
     * A link to where you can begin paginating all (re)prints for this card on Scryfall’s API.
     */
    prints_search_uri: ScryfallURI;
    /**
     * 	A link to this card’s rulings on Scryfall’s API.
     */
    rulings_uri: ScryfallURI;

    // Gameplay Fields

    /**
     * The name of this card. If this card has multiple faces, this field will contain both names separated by " // ".
     */
    name: string;
    /**
     * A computer-readable designation for this card’s layout. The layout can be used to programmatically determine which other properties on a card you can expect.
     */
    layout: ScryfallLayout;
    /**
     * The card’s converted mana cost. Note that some funny cards have fractional mana costs.
     */
    cmc: number;
    /**
     * The type line of this card.
     */
    type_line: string;
    /**
     * The Oracle text for this card, if any.
     */
    oracle_text?: string;
    /**
     * The mana cost for this card. This value will be any empty string "" if the cost is absent (per the game rules, a missing mana cost and a mana cost of 0 are different values).
     */
    mana_cost: string;
    /**
     * This card’s power, if any. Note that some cards have powers that are not numeric, such as *.
     */
    power?: string;
    /**
     * This card’s toughness, if any. Note that some cards have toughnesses that are not numeric, such as *.
     */
    toughness?: string;
    /**
     * This loyalty if any. Note that some cards have loyalties that are not numeric, such as X.
     */
    loyalty?: string;
    /**
     * This card’s life modifier, if it is Vanguard card. This value will contain a delta, such as +2.
     */
    life_modifier?: string;
    /**
     * This card’s hand modifier, if it is Vanguard card. This value will contain a delta, such as -1.
     */
    hand_modifier?: string;
    /**
     * This card’s colors. Colorless cards will yield an empty array.
     */
    colors: ScryfallColor[];
    /**
     * The colors in this card’s color indicator, if any. A null value for this field indicates the card does not have one.
     */
    color_indicator?: ScryfallColor[];
    /**
     * This card’s color identity. Colorless cards will yield an empty array.
     */
    color_identity: ScryfallColor[];
    /**
     * @deprecated Use card_faces instead.
     */
    all_parts?: ScryfallCardFace[];
    /**
     * An array of Card Face objects, if this card is multifaced.
     */
    card_faces?: ScryfallCardFace[];
    /**
     * An object describing the legality of this card.
     */
    legalities: {
        standard: Legality,
        frontier: Legality,
        modern: Legality,
        pauper: Legality,
        legacy: Legality,
        penny: Legality,
        vintage: Legality,
        duel: Legality,
        commander: Legality,
        "1v1": Legality,
    };
    /**
     * Whether or not this card is on the Reserved List.
     */
    reserved: boolean;
    /**
     * Whether or not this printing exists in a foil version.
     */
    foil: boolean;
    /**
     * Whether or not this printing exists in a non-foil version.
     */
    nonfoil: boolean;
    /**
     * Whether or not this card is oversized.
     */
    oversized: boolean;
    /**
     * This card’s overall rank/popularity on EDHREC. Not all cards are ranked.
     */
    edhrec_rank?: number;

    // Print Fields

    /**
     * This card’s set code.
     */
    set: string;
    /**
     * This card’s full set name.
     */
    set_name: string;
    /**
     * This card’s collector number. Note that collector numbers can contain non-numeric characters, such as letters or ★.
     */
    collector_number: string;

    /**
     * A link to where you can begin paginating this card’s set on the Scryfall API.
     */
    set_search_uri: ScryfallURI;
    /**
     * An object listing available imagery for this card, if any.
     */
    image_uris?: {
        /**
         * A small full card image. Designed for use as thumbnail or list icon. 
         * Size: 146 x 204 
         * Format: jpg
         */
        small: ScryfallURI,
        /**
         * A medium-sized full card image.
         * Size: 488 × 680
         * Format: jpg
         */
        normal: ScryfallURI,
        /**
         * A large full card image.
         * Size: 672 × 936
         * Format: jpg
         */
        large: ScryfallURI,
        /**
         * A transparent, rounded full card PNG. This is the best image to use for videos or other high-quality content.
         * Size: 745 × 1040
         * Format: png
         */
        png: ScryfallURI,
        /**
         * A rectangular crop of the card’s art only. 
         * Not guaranteed to be perfect for cards with outlier designs or strange frame arrangements. 
         * Size: Varies 
         * Format: jpg
         */
        art_crop: ScryfallURI,
        /**
         * A full card image with the rounded corners and the majority of the border cropped off. 
         * Designed for dated contexts where rounded images can’t be used. 
         * Size: 480 × 680 
         * Format: jpg
         */
        border_crop: ScryfallURI
    };
    /**
     * Whether or not this card’s imagery is high resolution.
     */
    highres_image: boolean;
    /**
     * Whether or not this card is a reprint.
     */
    reprint: boolean;
    /**
     * Whether or not this is a digital card on Magic Online.
     */
    digital: boolean;
    /**
     * This card’s rarity. One of common, uncommon, rare, or mythic.
     */
    rarity: "common", "uncommon", "rare", "mythic";
    /**
     * The flavor text of this card, if any.
     */
    flavor_text?: string;
    /**
     * The illustrator name(s) of this card. Newly spoiled cards may not have this field yet.
     */
    artist?: string;
    /**
     * A unique identifier for the card artwork that remains consistent across reprints. Newly spoiled cards may not have this field yet.
     */
    illustration_id?: ScryfallUUID;
    frame: string;
    full_art: boolean;
    watermark?: string;







    image_uri: string;
    set_uri: string;
    scryfall_set_uri: string;

    border_color: string;
    timeshifted: boolean;
    colorshifted: boolean;
    futureshifted: boolean;
    story_spotlight_number: number;
    story_spotlight_uri: string;
    usd: string;
    tix: string;
    eur: string;
    related_uris: {
        gatherer: string,
        tcgplayer_decks: string,
        edhrec: string,
        mtgtop8: string
    },
    purchase_uris: {
        amazon: string,
        ebay: string,
        tcgplayer: string,
        magiccardmarket: string,
        cardhoarder: string,
        card_kingdom: string,
        mtgo_traders: string,
        coolstuffinc: string
    }

}

export type Legality = "legal" | "not_legal" | "banned" | "restricted";
export type ScryfallURI = string;
export type ScryfallUUID = string;