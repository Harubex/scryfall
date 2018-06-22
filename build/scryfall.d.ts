import { ScryfallSet } from "./types/ScryfallSet";
import { ScryfallCard } from "./types/ScryfallCard";
import { ScryfallError } from "./types/ScryfallError";
import { ScryfallRuling } from "./types/ScryfallRuling";
/**
 * Attempts to autocomplete the specified token, returning a list of possible matches.
 * @param token The token to search for.
 * @param cb An optional callback to pass names to.
 * @returns A promise, if no callback is specified. Otherwise nothing.
 */
export declare function autocomplete(token: string, cb?: (matches: string[]) => void): Promise<string[]>;
/**
 * Fetches a card with the given name, if only one match if found. Fails on multiple matches.
 * @param name The card name to search for, case-insensitive.
 * @param fuzzy Whether to use a fuzzy or an exact search.
 * @param cb An optional callback to pass card data to.
 * @returns A promise, if no callback is specified. Otherwise nothing.
 */
export declare function getCardByName(name: string, fuzzy?: boolean, cb?: (err: ScryfallError, card: ScryfallCard) => void): Promise<ScryfallCard>;
/**
 * Fetches a list of rulings for the specified card.
 * @param card The card object to retrieve rulings for.
 * @param cb An optional callback to pass names to.
 * @returns A promise, if no callback is specified. Otherwise nothing.
 */
export declare function getRulings(card: ScryfallCard, cb?: (rulings: ScryfallRuling[]) => void): Promise<ScryfallRuling[]>;
/**
 * Fetches a list of rulings for a card with the specified set/code.
 * @param setCode The card set.
 * @param cardNumber The card number.
 * @param cb An optional callback to pass names to.
 * @returns A promise, if no callback is specified. Otherwise nothing.
 */
export declare function getRulings(setCode: string, cardNumber: string, cb?: (rulings: ScryfallRuling[]) => void): Promise<ScryfallRuling[]>;
/**
 * Fetches a specified page of cards from the list of all recorded cards.
 * @param page The page to retrieve.
 * @param cb An optional callback to pass card data to.
 * @returns A promise, if no callback is specified. Otherwise nothing.
 */
export declare function getAllCards(page: number, cb?: (cards: ScryfallCard[]) => void): Promise<ScryfallCard[]>;
/**
 * Gets a card by its set code and collector number. Only available for cards that have collector numbers.
 * @param code The set code for this card.
 * @param number The collector number for this card.
 * @param cb An optional callback to pass card data to.
 * @returns A promise, if no callback is specified. Otherwise nothing.
 */
export declare function getCard(code: string, number: number, cb?: (err: ScryfallError, card?: ScryfallCard) => void): Promise<ScryfallCard>;
/**
 * Gets a card by its multiverse id. Only available to cards that have multiverse ids.
 * @param multiverseId The multiverse id for this card.
 * @param type The type of this id. Must be the string literal "multiverse".
 * @param cb An optional callback to pass card data to.
 * @returns A promise, if no callback is specified. Otherwise nothing.
 */
export declare function getCard(multiverseId: number, type: "multiverse", cb?: (err: ScryfallError, card?: ScryfallCard) => void): Promise<ScryfallCard>;
/**
 * Gets a card by its Magic Online id. Only available to cards that exist on Magic Online.
 * @param multiverseId The Magic Online id for this card.
 * @param type The type of this id. Must be the string literal "mtgo".
 * @param cb An optional callback to pass card data to.
 * @returns A promise, if no callback is specified. Otherwise nothing.
 */
export declare function getCard(mtgoId: number, type: "mtgo", cb?: (err: ScryfallError, card?: ScryfallCard) => void): Promise<ScryfallCard>;
/**
 * Gets a card by its Scryfall id. Available to every card fetchable through this API. It'd be kind of weird if it wasn't.
 * @param scryfallId The Scryfall id for this card.
 * @param cb An optional callback to pass card data to.
 * @returns A promise, if no callback is specified. Otherwise nothing.
 */
export declare function getCard(scryfallId: string, cb?: (err: ScryfallError, card?: ScryfallCard) => void): Promise<ScryfallCard>;
/**
 * Fetches all versions of a card with the specified name.
 * @param name The card name to search for.
 * @param cb An optional callback to pass card data to.
 * @returns A promise, if no callback is specified. Otherwise nothing.
 */
export declare function cardVersions(name: string, cb?: (cards: ScryfallCard[]) => void): Promise<ScryfallCard[]>;
/**
 * Fetches a list of all sets available on scryfall.
 * @param cb An optional callback to pass set data to.
 * @returns A promise, if no callback is specified. Otherwise nothing.
 */
export declare function allSets(cb?: (sets: ScryfallSet[]) => void): Promise<ScryfallSet[]>;
/**
 * Fetches all the cards printed in a set with the specified code.
 * @param code The code of the set to search for.
 * @param cb An optional callback to pass card data to.
 * @returns A promise, if no callback is specified. Otherwise nothing.
 */
export declare function fromSet(code: string, cb?: (cards: ScryfallCard[]) => void): Promise<ScryfallCard[]>;
/**
 * Fetches a random card.
 * @param format The format to retrieve this card as. Defaults to json.
 * @param cb An optional callback to pass card data to.
 * @returns A promise, if no callback is specified. Otherwise nothing.
 */
export declare function randomCard(format?: "json" | "image" | "text", cb?: (card: ScryfallCard) => void): Promise<ScryfallCard>;
declare const scryfallMethods: {
    fromSet: (code: string, cb?: (cards: ScryfallCard[]) => void) => Promise<ScryfallCard[]>;
    allSets: (cb?: (sets: ScryfallSet[]) => void) => Promise<ScryfallSet[]>;
    autocomplete: (token: string, cb?: (matches: string[]) => void) => Promise<string[]>;
    cardVersions: (name: string, cb?: (cards: ScryfallCard[]) => void) => Promise<ScryfallCard[]>;
    getCard: {
        (code: string, number: number, cb?: (err: ScryfallError, card?: ScryfallCard) => void): Promise<ScryfallCard>;
        (multiverseId: number, type: "multiverse", cb?: (err: ScryfallError, card?: ScryfallCard) => void): Promise<ScryfallCard>;
        (mtgoId: number, type: "mtgo", cb?: (err: ScryfallError, card?: ScryfallCard) => void): Promise<ScryfallCard>;
        (scryfallId: string, cb?: (err: ScryfallError, card?: ScryfallCard) => void): Promise<ScryfallCard>;
    };
    getRulings: {
        (card: ScryfallCard, cb?: (rulings: ScryfallRuling[]) => void): Promise<ScryfallRuling[]>;
        (setCode: string, cardNumber: string, cb?: (rulings: ScryfallRuling[]) => void): Promise<ScryfallRuling[]>;
    };
    randomCard: (format?: "image" | "text" | "json", cb?: (card: ScryfallCard) => void) => Promise<ScryfallCard>;
};
export { scryfallMethods as Scryfall };
