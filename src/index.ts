import BulkData from "./BulkData";
import Cards from "./Cards";
import Catalogs from "./Catalogs";
import Rulings from "./Rulings";
import Sets from "./Sets";
import Symbols from "./Symbols";
import * as Scryfall from "./types";

// Export all types piecemeal.
export * from "./types";

export {
    Scryfall, // Export all types under a namespace.
    BulkData,
    Cards,
    Catalogs,
    Rulings,
    Sets,
    Symbols
};

// Reexport all the above modules as a default export.
export default {
    Scryfall,
    BulkData,
    Cards,
    Catalogs,
    Rulings,
    Sets,
    Symbols
};
