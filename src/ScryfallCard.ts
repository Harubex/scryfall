// I'll document this, some day.
export interface ScryfallCard {
    id: string;
    multiverse_id: number;
    mtgo_id: number;
    name: string;
    set: string;
    set_name: string;
    collector_number: number;
    reprint: boolean;
    all_parts: Array<{
        id: string;
        name: string;
        uri: string;
    }>;
    rarity: string;
    mana_cost: string;
    converted_mana_cost: number;
    type_line: string;
    oracle_text: string;
    flavor_text: string;
    artist: string;
    power: string;
    toughness: string;
    loyalty: number;
    hand_modifier: number;
    life_modifier: number;
    colors: Array<string>;
    color_identity: Array<string>;
    layout: string;
    card_faces: Array<{
        name: string;
        mana_cost: string;
        type_line: string;
        oracle_text: string;
        power: string;
        toughness: string;
    }>;
    legalities: string;
    frame: string;
    border: string;
    reserved: boolean;
    digital: boolean;
    timeshifted: boolean;
    colorshifted: boolean;
    futureshifted: boolean;
    usd: string;
    eur: string;
    tix: string;
    scryfall_uri: string;
    image_uri: string;
    related_uris: object;
    purchase_uris: object;
}