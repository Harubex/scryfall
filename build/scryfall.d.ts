import { ScryfallSet } from "./ScryfallSet";
import { ScryfallCard } from "./ScryfallCard";
/**
 * Attempts to autocomplete the specified token, returning a list of possible matches.
 * @param token - The token to search for.
 * @param cb - The callback to pass names to.
 */
export declare function autocomplete(token: string, cb: (matches: Array<string>) => void): void;
/**
 * Gets a card by its set code and collector number. Only available for cards that have collector numbers.
 * @param code - The set code for this card.
 * @param number - The collector number for this card.
 * @param cb - The callback to pass card data to.
 */
export declare function getCard(code: string, number: number, cb: (card: ScryfallCard) => void): void;
/**
 * Gets all versions of a card with the specified name.
 * @param name - The card name to search for.
 * @param cb - The callback to pass card data to.
 */
export declare function cardVersions(name: string, cb: (cards: ScryfallCard[]) => void): void;
/**
 * Fetches a list of all sets available on scryfall.
 * @param cb - The callback to pass set data to.
 */
export declare function allSets(cb: (sets: ScryfallSet[]) => void): void;
/**
 * Gets all the cards printed in a set with the specified code.
 * @param code - The code of the set to search for.
 * @param cb - The callback to pass card data to.
 */
export declare function fromSet(code: string, cb: (cards: ScryfallCard[]) => void): void;
declare const scryfallMethods: {
    fromSet: (code: string, cb: (cards: ScryfallCard[]) => void) => void;
    allSets: (cb: (sets: ScryfallSet[]) => void) => void;
    autocomplete: (token: string, cb: (matches: string[]) => void) => void;
    cardVersions: (name: string, cb: (cards: ScryfallCard[]) => void) => void;
    getCard: (code: string, number: number, cb: (card: ScryfallCard) => void) => void;
};
export { scryfallMethods as scryfall };
