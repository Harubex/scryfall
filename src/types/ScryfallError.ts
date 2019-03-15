import ScryfallObject from "../types/ScryfallObject";

/**
 * An object that represents a failure to find information or understand the input you provided to the API.
 * Error objects are always provided with the appropriate 4XX or 5XX HTTP status code.
 */
export interface ScryfallError extends ScryfallObject, Error {
    /**
     * The type descriptor for this object - will always equal "error".
     */
    object: "error";

    /**
     * An integer HTTP status code for this error.
     */
    status: number;

    /**
     * A computer-friendly string representing the appropriate HTTP status code.
     */
    code: string;

    /**
     * A human-readable string explaining the error.
     */
    details: string;

    /**
     * Additional context optionally provided for why an error has occurred.
     */
    type?: string;

    /**
     * Any non-failure warnings gernerated, if any.
     */
    warnings?: string[];
}

export default ScryfallError;
