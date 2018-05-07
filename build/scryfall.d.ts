import { ScryfallSet } from "./ScryfallSet";
import { ScryfallCard } from "./ScryfallCard";
import { ScryfallError } from "./ScryfallError";
/**
 * Attempts to autocomplete the specified token, returning a list of possible matches.
 * @param token The token to search for.
 * @param cb An optional callback to pass names to.
 * @returns A promise, if no callback is specified. Otherwise nothing.
 */
export declare function autocomplete(token: string, cb?: (matches: string[]) => void): Promise<string[]> | void;
/**
 * Fetches a specified page of cards from the list of all recorded cards.
 * @param page The page to retrieve.
 * @param cb An optional callback to pass card data to.
 * @returns A promise, if no callback is specified. Otherwise nothing.
 */
export declare function getAllCards(page: number, cb?: (cards: ScryfallCard[]) => void): Promise<ScryfallCard[]> | void;
/**
 * Gets a card by its set code and collector number. Only available for cards that have collector numbers.
 * @param code The set code for this card.
 * @param number The collector number for this card.
 * @param cb An optional callback to pass card data to.
 * @returns A promise, if no callback is specified. Otherwise nothing.
 */
export declare function getCard(code: string, number: number, cb?: (err: ScryfallError, card?: ScryfallCard) => void): Promise<ScryfallCard> | void;
/**
 * Gets a card by its multiverse id. Only available to cards that have multiverse ids.
 * @param multiverseId The multiverse id for this card.
 * @param type The type of this id. Must be the string literal "multiverse".
 * @param cb An optional callback to pass card data to.
 * @returns A promise, if no callback is specified. Otherwise nothing.
 */
export declare function getCard(multiverseId: number, type: "multiverse", cb?: (err: ScryfallError, card?: ScryfallCard) => void): Promise<ScryfallCard> | void;
/**
 * Gets a card by its Magic Online id. Only available to cards that exist on Magic Online.
 * @param multiverseId The Magic Online id for this card.
 * @param type The type of this id. Must be the string literal "mtgo".
 * @param cb An optional callback to pass card data to.
 * @returns A promise, if no callback is specified. Otherwise nothing.
 */
export declare function getCard(mtgoId: number, type: "mtgo", cb?: (err: ScryfallError, card?: ScryfallCard) => void): Promise<ScryfallCard> | void;
/**
 * Gets a card by its Scryfall id. Available to every card fetchable through this API. It'd be kind of weird if it wasn't.
 * @param scryfallId The Scryfall id for this card.
 * @param cb An optional callback to pass card data to.
 * @returns A promise, if no callback is specified. Otherwise nothing.
 */
export declare function getCard(scryfallId: string, cb?: (err: ScryfallError, card?: ScryfallCard) => void): Promise<ScryfallCard> | void;
/**
 * Fetches all versions of a card with the specified name.
 * @param name The card name to search for.
 * @param cb An optional callback to pass card data to.
 * @returns A promise, if no callback is specified. Otherwise nothing.
 */
export declare function cardVersions(name: string, cb?: (cards: ScryfallCard[]) => void): Promise<ScryfallCard[]> | void;
/**
 * Fetches a list of all sets available on scryfall.
 * @param cb An optional callback to pass set data to.
 * @returns A promise, if no callback is specified. Otherwise nothing.
 */
export declare function allSets(cb?: (sets: ScryfallSet[]) => void): Promise<ScryfallSet[]> | void;
/**
 * Fetches all the cards printed in a set with the specified code.
 * @param code The code of the set to search for.
 * @param cb An optional callback to pass card data to.
 * @returns A promise, if no callback is specified. Otherwise nothing.
 */
export declare function fromSet(code: string, cb?: (cards: ScryfallCard[]) => void): Promise<ScryfallCard[]> | void;
/**
 * Fetches a random card.
 * @param format The format to retrieve this card as. Defaults to json.
 * @param cb An optional callback to pass card data to.
 * @returns A promise, if no callback is specified. Otherwise nothing.
 */
export declare function randomCard(format?: "json" | "image" | "text", cb?: (card: ScryfallCard) => void): Promise<ScryfallCard> | void;
declare const scryfallMethods: {
    fromSet: typeof fromSet;
    allSets: typeof allSets;
    autocomplete: typeof autocomplete;
    cardVersions: typeof cardVersions;
    getCard: typeof getCard;
};
export { scryfallMethods as Scryfall };
