import ScryfallError from "../types/ScryfallError";
import ScryfallObject from "../types/ScryfallObject";

/**
 * The signature to use for all user-defined callbacks from this library.
 */
export type ScryfallCallback<T extends ScryfallObject | ScryfallObject[]> = (err: ScryfallError, sets: T) => void;

export default ScryfallCallback;
