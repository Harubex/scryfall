/**
 * An error, and information about it.
 */
export interface ScryfallError {
    /**
     * Object code - should equal error.
     */
    object: "error";
    /**
     * The numeric status code for this error.
     */
    status: number;
    /**
     * The reason phrase for this error.
     */
    code: string;
    /**
     * A brief explanation of this error.
     */
    details: string;
    /**
     * Additional context optionally provided for why an error has occurred.
     */
    type?: string;
    /**
     * Any non-failure warnings gernerated, if any.
     */
    warnings?: Array<string>;
}