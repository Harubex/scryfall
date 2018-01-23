import { ScryfallSet } from "./ScryfallSet";
import { ScryfallCard } from "./ScryfallCard";
import { ScryfallError } from "./ScryfallError";
/**
 * Attempts to autocomplete the specified token, returning a list of possible matches.
 * @param token The token to search for.
 * @param cb The callback to pass names to.
 */
export declare function autocomplete(token: string, cb: (matches: Array<string>) => void): void;
/**
 * Fetches a specified page of cards from the list of all recorded cards.
 * @param page The page to retrieve.
 * @param cb The callback ot pass card info to.
 */
export declare function getAllCards(page: number, cb: (cards: ScryfallCard[]) => void): void;
/**
 * Gets a card by its set code and collector number. Only available for cards that have collector numbers.
 * @param code The set code for this card.
 * @param number The collector number for this card.
 * @param cb The callback to pass card data to.
 */
export declare function getCard(code: string, number: number, cb: (err: ScryfallError, card?: ScryfallCard) => void): void;
/**
 * Gets a card by its multiverse id. Only available to cards that have multiverse ids.
 * @param multiverseId The multiverse id for this card.
 * @param type The type of this id. Must be the string literal "multiverse".
 * @param cb The callback to pass card data to.
 */
export declare function getCard(multiverseId: number, type: "multiverse", cb: (err: ScryfallError, card?: ScryfallCard) => void): void;
/**
 * Gets a card by its Magic Online id. Only available to cards that exist on Magic Online.
 * @param multiverseId The Magic Online id for this card.
 * @param type The type of this id. Must be the string literal "mtgo".
 * @param cb The callback to pass card data to.
 */
export declare function getCard(mtgoId: number, type: "mtgo", cb: (err: ScryfallError, card?: ScryfallCard) => void): void;
/**
 * Gets a card by its Scryfall id. Available to every card fetchable through this API. It'd be kind of weird if it wasn't.
 * @param scryfallId The Scryfall id for this card.
 * @param cb The callback to pass card data to.
 */
export declare function getCard(scryfallId: string, cb: (err: ScryfallError, card?: ScryfallCard) => void): void;
/**
 * Gets all versions of a card with the specified name.
 * @param name The card name to search for.
 * @param cb The callback to pass card data to.
 */
export declare function cardVersions(name: string, cb: (cards: ScryfallCard[]) => void): void;
/**
 * Fetches a list of all sets available on scryfall.
 * @param cb The callback to pass set data to.
 */
export declare function allSets(cb: (sets: ScryfallSet[]) => void): void;
/**
 * Gets all the cards printed in a set with the specified code.
 * @param code The code of the set to search for.
 * @param cb The callback to pass card data to.
 */
export declare function fromSet(code: string, cb: (cards: ScryfallCard[]) => void): void;
/**
 * Fetches a random card.
 * @param cb The callback to pass card data to.
 * @param format The format to retrieve this card as.
 */
export declare function randomCard(cb: (card: ScryfallCard) => void, format?: "json" | "image" | "text"): void;
declare const scryfallMethods: {
    fromSet: (code: string, cb: (cards: ScryfallCard[]) => void) => void;
    allSets: (cb: (sets: ScryfallSet[]) => void) => void;
    autocomplete: (token: string, cb: (matches: string[]) => void) => void;
    cardVersions: (name: string, cb: (cards: ScryfallCard[]) => void) => void;
    getCard: {
        (code: string, number: number, cb: (err: ScryfallError, card?: ScryfallCard) => void): void;
        (multiverseId: number, type: "multiverse", cb: (err: ScryfallError, card?: ScryfallCard) => void): void;
        (mtgoId: number, type: "mtgo", cb: (err: ScryfallError, card?: ScryfallCard) => void): void;
        (scryfallId: string, cb: (err: ScryfallError, card?: ScryfallCard) => void): void;
    };
};
export { scryfallMethods as Scryfall };
