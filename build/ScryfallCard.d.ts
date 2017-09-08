/**
 * A card, and information about it.
 */
export interface ScryfallCard {
    id: string;
    multiverse_id: number;
    mtgo_id: number;
    name: string;
    uri: string;
    scryfall_uri: string;
    layout: string;
    highres_image: boolean;
    image_uri: string;
    image_uris: {
        small: string;
        normal: string;
        large: string;
        png: string;
    };
    cmc: number;
    type_line: string;
    oracle_text: string;
    mana_cost: string;
    colors: Array<string>;
    color_identity: Array<string>;
    legalities: {
        standard: Legality;
        frontier: Legality;
        modern: Legality;
        pauper: Legality;
        legacy: Legality;
        penny: Legality;
        vintage: Legality;
        duel: Legality;
        commander: Legality;
        "1v1": Legality;
    };
    reserved: boolean;
    reprint: boolean;
    set: string;
    set_name: string;
    set_uri: string;
    scryfall_set_uri: string;
    collector_number: string;
    digital: boolean;
    rarity: "common" | "uncommon" | "rare" | "mythic";
    watermark: string;
    flavor_text: string;
    artist: string;
    frame: string;
    full_art: boolean;
    border_color: string;
    timeshifted: boolean;
    colorshifted: boolean;
    futureshifted: boolean;
    story_spotlight_number: number;
    story_spotlight_uri: string;
    edhrec_rank: number;
    usd: string;
    tix: string;
    eur: string;
    related_uris: {
        gatherer: string;
        tcgplayer_decks: string;
        edhrec: string;
        mtgtop8: string;
    };
    purchase_uris: {
        amazon: string;
        ebay: string;
        tcgplayer: string;
        magiccardmarket: string;
        cardhoarder: string;
        card_kingdom: string;
        mtgo_traders: string;
        coolstuffinc: string;
    };
}
export declare type Legality = "legal" | "not_legal" | "banned" | "restricted";
