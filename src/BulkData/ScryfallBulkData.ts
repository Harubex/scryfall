import ScryfallURI from "../types/ScryfallURI";
import ScryfallUUID from "../types/ScryfallUUID";
import ScryfallObject from "../types/ScryfallObject";

/**
 * Represents a bulk data export from the Scryfall database - one is made for each type, each day.
 */
export interface ScryfallBulkData extends ScryfallObject {

    /**
     * The type descriptor for this object - will always equal "bulk_data".
     */
    object: "bulk_data";

    /**
     * The unique id for this object in Scryfall’s database.
     */
    id: ScryfallUUID;

    /**
     * The type of data this export contains.
     */
    type: "default_cards" | "oracle_cards" | "all_cards" | "rulings";

    /**
     * The date at which this export was performed.
     */
    updated_at: Date;

    /**
     * The name of this export.
     */
    name: string;

    /**
     * A description of this export.
     */
    description: string;

    /**
     * The size of this export in bytes after compression has been applied.
     */
    compressed_size: number;

    /**
     * A URI where you can retrieve the export as a single file.
     */
    permalink_uri: ScryfallURI;

    /**
     * The mime type of the data contained in this export.
     */
    content_type: string;

    /**
     * The encoding used to compress this export.
     */
    content_encoding: string;
}

export default ScryfallBulkData;
