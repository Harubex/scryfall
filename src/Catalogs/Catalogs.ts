import APIRequest from "../request";
import ScryfallCallback from "../types/ScryfallCallback";
import ScryfallCatalog from "./ScryfallCatalog";

// #region cardNames() & overloads.
/**
 * Retrieves an array of all nontoken English card names in Scryfall’s database.
 * Values are updated as soon as a new card is entered for spoiler seasons.
 */
async function cardNames(): Promise<ScryfallCatalog>;

/**
 * Retrieves an array of all nontoken English card names in Scryfall’s database.
 * Values are updated as soon as a new card is entered for spoiler seasons.
 * @param cb A callback to pass catalog data to.
 */
function cardNames(cb: ScryfallCallback<ScryfallCatalog>): void;

/**
 * Retrieves an array of all nontoken English card names in Scryfall’s database.
 * Values are updated as soon as a new card is entered for spoiler seasons.
 * @param cb An optional callback to invoke in lieu of a promise.
 * @returns A promise if no callback is provided, otherwise nothing.
 */
function cardNames(cb?: ScryfallCallback<ScryfallCatalog>): void | Promise<ScryfallCatalog> {
    return APIRequest("/catalog/card-names", cb);
}
// #endregion

// #region artistNames() & overloads.
/**
 * Retrieves an array of all canonical artist names in Scryfall’s database.
 * This catalog won’t include duplicate, misspelled, or funny names for artists.
 * Values are updated as soon as a new card is entered for spoiler seasons.
 */
async function artistNames(): Promise<ScryfallCatalog>;

/**
 * Retrieves an array of all canonical artist names in Scryfall’s database.
 * This catalog won’t include duplicate, misspelled, or funny names for artists.
 * Values are updated as soon as a new card is entered for spoiler seasons.
 * @param cb A callback to pass catalog data to.
 */
function artistNames(cb: ScryfallCallback<ScryfallCatalog>): void;

/**
 * Retrieves an array of all canonical artist names in Scryfall’s database.
 * This catalog won’t include duplicate, misspelled, or funny names for artists.
 * Values are updated as soon as a new card is entered for spoiler seasons.
 * @param cb An optional callback to invoke in lieu of a promise.
 * @returns A promise if no callback is provided, otherwise nothing.
 */
function artistNames(cb?: ScryfallCallback<ScryfallCatalog>): void | Promise<ScryfallCatalog> {
    return APIRequest("/catalog/artist-names", cb);
}
// #endregion

// #region wordBank() & overloads.
/**
 * Retrieves an array of all English words, of length 2 or more, that could appear in a card name.
 * Values are drawn from cards currently in Scryfall’s database.
 * Values are updated as soon as a new card is entered for spoiler seasons.
 */
async function wordBank(): Promise<ScryfallCatalog>;

/**
 * Retrieves an array of all English words, of length 2 or more, that could appear in a card name.
 * Values are drawn from cards currently in Scryfall’s database.
 * Values are updated as soon as a new card is entered for spoiler seasons.
 * @param cb A callback to pass catalog data to.
 */
function wordBank(cb: ScryfallCallback<ScryfallCatalog>): void;

/**
 * Retrieves an array of all English words, of length 2 or more, that could appear in a card name.
 * Values are drawn from cards currently in Scryfall’s database.
 * Values are updated as soon as a new card is entered for spoiler seasons.
 * @param cb An optional callback to invoke in lieu of a promise.
 * @returns A promise if no callback is provided, otherwise nothing.
 */
function wordBank(cb?: ScryfallCallback<ScryfallCatalog>): void | Promise<ScryfallCatalog> {
    return APIRequest("/catalog/word-bank", cb);
}
// #endregion

// #region creatureTypes() & overloads.
/**
 * Retrieves an array of all creature types in Scryfall’s database.
 * Values are updated as soon as a new card is entered for spoiler seasons.
 */
async function creatureTypes(): Promise<ScryfallCatalog>;

/**
 * Retrieves an array of all creature types in Scryfall’s database.
 * Values are updated as soon as a new card is entered for spoiler seasons.
 * @param cb A callback to pass catalog data to.
 */
function creatureTypes(cb: ScryfallCallback<ScryfallCatalog>): void;

/**
 * Retrieves an array of all creature types in Scryfall’s database.
 * Values are updated as soon as a new card is entered for spoiler seasons.
 * @param cb An optional callback to invoke in lieu of a promise.
 * @returns A promise if no callback is provided, otherwise nothing.
 */
function creatureTypes(cb?: ScryfallCallback<ScryfallCatalog>): void | Promise<ScryfallCatalog> {
    return APIRequest("/catalog/creature-types", cb);
}
// #endregion

// #region planeswalkerTypes() & overloads.
/**
 * Retrieves an array of all planeswalker types in Scryfall’s database.
 * Values are updated as soon as a new card is entered for spoiler seasons.
 */
async function planeswalkerTypes(): Promise<ScryfallCatalog>;

/**
 * Retrieves an array of all planeswalker types in Scryfall’s database.
 * Values are updated as soon as a new card is entered for spoiler seasons.
 * @param cb A callback to pass catalog data to.
 */
function planeswalkerTypes(cb: ScryfallCallback<ScryfallCatalog>): void;

/**
 * Retrieves an array of all planeswalker types in Scryfall’s database.
 * Values are updated as soon as a new card is entered for spoiler seasons.
 * @param cb An optional callback to invoke in lieu of a promise.
 * @returns A promise if no callback is provided, otherwise nothing.
 */
function planeswalkerTypes(cb?: ScryfallCallback<ScryfallCatalog>): void | Promise<ScryfallCatalog> {
    return APIRequest("/catalog/planeswalker-types", cb);
}
// #endregion

// #region landTypes() & overloads.
/**
 * Retrieves an array of all land types in Scryfall’s database.
 * Values are updated as soon as a new card is entered for spoiler seasons.
 */
async function landTypes(): Promise<ScryfallCatalog>;

/**
 * Retrieves an array of all land types in Scryfall’s database.
 * Values are updated as soon as a new card is entered for spoiler seasons.
 * @param cb A callback to pass catalog data to.
 */
function landTypes(cb: ScryfallCallback<ScryfallCatalog>): void;

/**
 * Retrieves an array of all land types in Scryfall’s database.
 * Values are updated as soon as a new card is entered for spoiler seasons.
 * @param cb An optional callback to invoke in lieu of a promise.
 * @returns A promise if no callback is provided, otherwise nothing.
 */
function landTypes(cb?: ScryfallCallback<ScryfallCatalog>): void | Promise<ScryfallCatalog> {
    return APIRequest("/catalog/land-types", cb);
}
// #endregion

// #region artifactTypes() & overloads.
/**
 * Retrieves an array of all artifact types in Scryfall’s database.
 * Values are updated as soon as a new card is entered for spoiler seasons.
 */
async function artifactTypes(): Promise<ScryfallCatalog>;

/**
 * Retrieves an array of all artifact types in Scryfall’s database.
 * Values are updated as soon as a new card is entered for spoiler seasons.
 * @param cb A callback to pass catalog data to.
 */
function artifactTypes(cb: ScryfallCallback<ScryfallCatalog>): void;

/**
 * Retrieves an array of all artifact types in Scryfall’s database.
 * Values are updated as soon as a new card is entered for spoiler seasons.
 * @param cb An optional callback to invoke in lieu of a promise.
 * @returns A promise if no callback is provided, otherwise nothing.
 */
function artifactTypes(cb?: ScryfallCallback<ScryfallCatalog>): void | Promise<ScryfallCatalog> {
    return APIRequest("/catalog/artifact-types", cb);
}
// #endregion

// #region enchantmentTypes() & overloads.
/**
 * Retrieves an array of all enchantment types in Scryfall’s database.
 * Values are updated as soon as a new card is entered for spoiler seasons.
 */
async function enchantmentTypes(): Promise<ScryfallCatalog>;

/**
 * Retrieves an array of all enchantment types in Scryfall’s database.
 * Values are updated as soon as a new card is entered for spoiler seasons.
 * @param cb A callback to pass catalog data to.
 */
function enchantmentTypes(cb: ScryfallCallback<ScryfallCatalog>): void;

/**
 * Retrieves an array of all enchantment types in Scryfall’s database.
 * Values are updated as soon as a new card is entered for spoiler seasons.
 * @param cb An optional callback to invoke in lieu of a promise.
 * @returns A promise if no callback is provided, otherwise nothing.
 */
function enchantmentTypes(cb?: ScryfallCallback<ScryfallCatalog>): void | Promise<ScryfallCatalog> {
    return APIRequest("/catalog/enchantment-types", cb);
}
// #endregion

// #region spellTypes() & overloads.
/**
 * Retrieves an array of all spell types in Scryfall’s database.
 * Values are updated as soon as a new card is entered for spoiler seasons.
 */
async function spellTypes(): Promise<ScryfallCatalog>;

/**
 * Retrieves an array of all spell types in Scryfall’s database.
 * Values are updated as soon as a new card is entered for spoiler seasons.
 * @param cb A callback to pass catalog data to.
 */
function spellTypes(cb: ScryfallCallback<ScryfallCatalog>): void;

/**
 * Retrieves an array of all spell types in Scryfall’s database.
 * Values are updated as soon as a new card is entered for spoiler seasons.
 * @param cb An optional callback to invoke in lieu of a promise.
 * @returns A promise if no callback is provided, otherwise nothing.
 */
function spellTypes(cb?: ScryfallCallback<ScryfallCatalog>): void | Promise<ScryfallCatalog> {
    return APIRequest("/catalog/spell-types", cb);
}
// #endregion

// #region powers() & overloads.
/**
 * Retrieves an array of all possible values for a creature or vehicle’s power in Scryfall’s database.
 * Values are updated as soon as a new card is entered for spoiler seasons.
 */
async function powers(): Promise<ScryfallCatalog>;

/**
 * Retrieves an array of all possible values for a creature or vehicle’s power in Scryfall’s database.
 * Values are updated as soon as a new card is entered for spoiler seasons.
 * @param cb A callback to pass catalog data to.
 */
function powers(cb: ScryfallCallback<ScryfallCatalog>): void;

/**
 * Retrieves an array of all possible values for a creature or vehicle’s power in Scryfall’s database.
 * Values are updated as soon as a new card is entered for spoiler seasons.
 * @param cb An optional callback to invoke in lieu of a promise.
 * @returns A promise if no callback is provided, otherwise nothing.
 */
function powers(cb?: ScryfallCallback<ScryfallCatalog>): void | Promise<ScryfallCatalog> {
    return APIRequest("/catalog/powers", cb);
}
// #endregion

// #region toughnesses() & overloads.
/**
 * Retrieves an array of all possible values for a creature or vehicle’s toughness in Scryfall’s database.
 * Values are updated as soon as a new card is entered for spoiler seasons.
 */
async function toughnesses(): Promise<ScryfallCatalog>;

/**
 * Retrieves an array of all possible values for a creature or vehicle’s toughness in Scryfall’s database.
 * Values are updated as soon as a new card is entered for spoiler seasons.
 * @param cb A callback to pass catalog data to.
 */
function toughnesses(cb: ScryfallCallback<ScryfallCatalog>): void;

/**
 * Retrieves an array of all possible values for a creature or vehicle’s toughness in Scryfall’s database.
 * Values are updated as soon as a new card is entered for spoiler seasons.
 * @param cb An optional callback to invoke in lieu of a promise.
 * @returns A promise if no callback is provided, otherwise nothing.
 */
function toughnesses(cb?: ScryfallCallback<ScryfallCatalog>): void | Promise<ScryfallCatalog> {
    return APIRequest("/catalog/toughnesses", cb);
}
// #endregion

// #region loyalties() & overloads.
/**
 * Retrieves an array of all possible values for a planeswalker's loyalty in Scryfall’s database.
 * Values are updated as soon as a new card is entered for spoiler seasons.
 */
async function loyalties(): Promise<ScryfallCatalog>;

/**
 * Retrieves an array of all possible values for a planeswalker's loyalty in Scryfall’s database.
 * Values are updated as soon as a new card is entered for spoiler seasons.
 * @param cb A callback to pass catalog data to.
 */
function loyalties(cb: ScryfallCallback<ScryfallCatalog>): void;

/**
 * Retrieves an array of all possible values for a planeswalker's loyalty in Scryfall’s database.
 * Values are updated as soon as a new card is entered for spoiler seasons.
 * @param cb An optional callback to invoke in lieu of a promise.
 * @returns A promise if no callback is provided, otherwise nothing.
 */
function loyalties(cb?: ScryfallCallback<ScryfallCatalog>): void | Promise<ScryfallCatalog> {
    return APIRequest("/catalog/loyalties", cb);
}
// #endregion

// #region watermarks() & overloads.
/**
 * Retrieves an array of all card watermarks in Scryfall’s database.
 * Values are updated as soon as a new card is entered for spoiler seasons.
 */
async function watermarks(): Promise<ScryfallCatalog>;

/**
 * Retrieves an array of all card watermarks in Scryfall’s database.
 * Values are updated as soon as a new card is entered for spoiler seasons.
 * @param cb A callback to pass catalog data to.
 */
function watermarks(cb: ScryfallCallback<ScryfallCatalog>): void;

/**
 * Retrieves an array of all card watermarks in Scryfall’s database.
 * Values are updated as soon as a new card is entered for spoiler seasons.
 * @param cb An optional callback to invoke in lieu of a promise.
 * @returns A promise if no callback is provided, otherwise nothing.
 */
function watermarks(cb?: ScryfallCallback<ScryfallCatalog>): void | Promise<ScryfallCatalog> {
    return APIRequest("/catalog/watermarks", cb);
}
// #endregion

export const Catalogs = {
    creatureTypes, planeswalkerTypes, landTypes, artifactTypes, enchantmentTypes, spellTypes,
    powers, toughnesses, loyalties, watermarks, cardNames, artistNames, wordBank
};

export default Catalogs;
