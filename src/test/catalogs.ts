import assert from "assert";
import Catalogs from "Catalogs";
import { Done } from "mocha";
import { Catalog, Error } from "types";

describe("catalog tests", () => {

    // Add a 100ms delay before each test to keep in line with Scryfall's API policy.
    beforeEach((done: Done) => {
        setTimeout(done, 100);
    });

    it("should return all artifact types (promise)", async () => {
        try {
            const catalog: Catalog = await Catalogs.artifactTypes();
            assert(catalog.data.length > 0, "No artifact types were found.");
        } catch (err) {
            assert.fail(`An error occurred when retrieving catalog data: ${err.details}`);
        }
    }).timeout(10000);
    it("should return all artifact types (callback)", (done: Done) => {
        try {
            Catalogs.artifactTypes((err: Error, catalog: Catalog) => {
                if (err) {
                    assert.fail(`An error occurred when retrieving catalog data: ${err.details}`);
                }
                assert(catalog.data.length > 0, "No artifact types were found.");
                done();
            });
        } catch (err) {
            assert.fail(`An error occurred when retrieving catalog data: ${err.details}`);
        }
    }).timeout(10000);

    it("should return all artist names (promise)", async () => {
        try {
            const catalog: Catalog = await Catalogs.artistNames();
            assert(catalog.data.length > 0, "No artist names were found.");
        } catch (err) {
            assert.fail(`An error occurred when retrieving catalog data: ${err.details}`);
        }
    }).timeout(10000);
    it("should return all artist names (callback)", (done: Done) => {
        try {
            Catalogs.artistNames((err: Error, catalog: Catalog) => {
                if (err) {
                    assert.fail(`An error occurred when retrieving catalog data: ${err.details}`);
                }
                assert(catalog.data.length > 0, "No artist names were found.");
                done();
            });
        } catch (err) {
            assert.fail(`An error occurred when retrieving catalog data: ${err.details}`);
        }
    }).timeout(10000);

    it("should return all creature types (promise)", async () => {
        try {
            const catalog: Catalog = await Catalogs.creatureTypes();
            assert(catalog.data.length > 0, "No creature types were found.");
        } catch (err) {
            assert.fail(`An error occurred when retrieving catalog data: ${err.details}`);
        }
    }).timeout(10000);
    it("should return all creature types (callback)", (done: Done) => {
        try {
            Catalogs.creatureTypes((err: Error, catalog: Catalog) => {
                if (err) {
                    assert.fail(`An error occurred when retrieving catalog data: ${err.details}`);
                }
                assert(catalog.data.length > 0, "No creature types were found.");
                done();
            });
        } catch (err) {
            assert.fail(`An error occurred when retrieving catalog data: ${err.details}`);
        }
    }).timeout(10000);

    it("should return all enchantment types (promise)", async () => {
        try {
            const catalog: Catalog = await Catalogs.enchantmentTypes();
            assert(catalog.data.length > 0, "No creature types were found.");
        } catch (err) {
            assert.fail(`An error occurred when retrieving catalog data: ${err.details}`);
        }
    }).timeout(10000);
    it("should return all enchantment types (callback)", (done: Done) => {
        try {
            Catalogs.enchantmentTypes((err: Error, catalog: Catalog) => {
                if (err) {
                    assert.fail(`An error occurred when retrieving catalog data: ${err.details}`);
                }
                assert(catalog.data.length > 0, "No creature types were found.");
                done();
            });
        } catch (err) {
            assert.fail(`An error occurred when retrieving catalog data: ${err.details}`);
        }
    }).timeout(10000);

    it("should return all land types (promise)", async () => {
        try {
            const catalog: Catalog = await Catalogs.landTypes();
            assert(catalog.data.length > 0, "No land types were found.");
        } catch (err) {
            assert.fail(`An error occurred when retrieving catalog data: ${err.details}`);
        }
    }).timeout(10000);
    it("should return all land types (callback)", (done: Done) => {
        try {
            Catalogs.landTypes((err: Error, catalog: Catalog) => {
                if (err) {
                    assert.fail(`An error occurred when retrieving catalog data: ${err.details}`);
                }
                assert(catalog.data.length > 0, "No land types were found.");
                done();
            });
        } catch (err) {
            assert.fail(`An error occurred when retrieving catalog data: ${err.details}`);
        }
    }).timeout(10000);

    it("should return all loyalties (promise)", async () => {
        try {
            const catalog: Catalog = await Catalogs.loyalties();
            assert(catalog.data.length > 0, "No loyalties were found.");
        } catch (err) {
            assert.fail(`An error occurred when retrieving catalog data: ${err.details}`);
        }
    }).timeout(10000);
    it("should return all loyalties (callback)", (done: Done) => {
        try {
            Catalogs.loyalties((err: Error, catalog: Catalog) => {
                if (err) {
                    assert.fail(`An error occurred when retrieving catalog data: ${err.details}`);
                }
                assert(catalog.data.length > 0, "No loyalties were found.");
                done();
            });
        } catch (err) {
            assert.fail(`An error occurred when retrieving catalog data: ${err.details}`);
        }
    }).timeout(10000);

    it("should return all planeswalker types (promise)", async () => {
        try {
            const catalog: Catalog = await Catalogs.planeswalkerTypes();
            assert(catalog.data.length > 0, "No planeswalker types were found.");
        } catch (err) {
            assert.fail(`An error occurred when retrieving catalog data: ${err.details}`);
        }
    }).timeout(10000);
    it("should return all planeswalker types (callback)", (done: Done) => {
        try {
            Catalogs.planeswalkerTypes((err: Error, catalog: Catalog) => {
                if (err) {
                    assert.fail(`An error occurred when retrieving catalog data: ${err.details}`);
                }
                assert(catalog.data.length > 0, "No planeswalker types were found.");
                done();
            });
        } catch (err) {
            assert.fail(`An error occurred when retrieving catalog data: ${err.details}`);
        }
    }).timeout(10000);

    it("should return all powers (promise)", async () => {
        try {
            const catalog: Catalog = await Catalogs.powers();
            assert(catalog.data.length > 0, "No powers were found.");
        } catch (err) {
            assert.fail(`An error occurred when retrieving catalog data: ${err.details}`);
        }
    }).timeout(10000);
    it("should return all powers (callback)", (done: Done) => {
        try {
            Catalogs.powers((err: Error, catalog: Catalog) => {
                if (err) {
                    assert.fail(`An error occurred when retrieving catalog data: ${err.details}`);
                }
                assert(catalog.data.length > 0, "No powers were found.");
                done();
            });
        } catch (err) {
            assert.fail(`An error occurred when retrieving catalog data: ${err.details}`);
        }
    }).timeout(10000);

    it("should return all spell types (promise)", async () => {
        try {
            const catalog: Catalog = await Catalogs.spellTypes();
            assert(catalog.data.length > 0, "No spell types were found.");
        } catch (err) {
            assert.fail(`An error occurred when retrieving catalog data: ${err.details}`);
        }
    }).timeout(10000);
    it("should return all spell types (callback)", (done: Done) => {
        try {
            Catalogs.spellTypes((err: Error, catalog: Catalog) => {
                if (err) {
                    assert.fail(`An error occurred when retrieving catalog data: ${err.details}`);
                }
                assert(catalog.data.length > 0, "No spell types were found.");
                done();
            });
        } catch (err) {
            assert.fail(`An error occurred when retrieving catalog data: ${err.details}`);
        }
    }).timeout(10000);

    it("should return all toughnesses (promise)", async () => {
        try {
            const catalog: Catalog = await Catalogs.toughnesses();
            assert(catalog.data.length > 0, "No toughnesses were found.");
        } catch (err) {
            assert.fail(`An error occurred when retrieving catalog data: ${err.details}`);
        }
    }).timeout(10000);
    it("should return all toughnesses (callback)", (done: Done) => {
        try {
            Catalogs.toughnesses((err: Error, catalog: Catalog) => {
                if (err) {
                    assert.fail(`An error occurred when retrieving catalog data: ${err.details}`);
                }
                assert(catalog.data.length > 0, "No toughnesses were found.");
                done();
            });
        } catch (err) {
            assert.fail(`An error occurred when retrieving catalog data: ${err.details}`);
        }
    }).timeout(10000);

    it("should return all watermarks (promise)", async () => {
        try {
            const catalog: Catalog = await Catalogs.watermarks();
            assert(catalog.data.length > 0, "No watermarks were found.");
        } catch (err) {
            assert.fail(`An error occurred when retrieving catalog data: ${err.details}`);
        }
    }).timeout(10000);
    it("should return all watermarks (callback)", (done: Done) => {
        try {
            Catalogs.watermarks((err: Error, catalog: Catalog) => {
                if (err) {
                    assert.fail(`An error occurred when retrieving catalog data: ${err.details}`);
                }
                assert(catalog.data.length > 0, "No watermarks were found.");
                done();
            });
        } catch (err) {
            assert.fail(`An error occurred when retrieving catalog data: ${err.details}`);
        }
    }).timeout(10000);

    it("should return all words appearing on a card (promise)", async () => {
        try {
            const catalog: Catalog = await Catalogs.wordBank();
            assert(catalog.data.length > 0, "No words were found.");
        } catch (err) {
            assert.fail(`An error occurred when retrieving catalog data: ${err.details}`);
        }
    }).timeout(10000);
    it("should return all words appearing on a card (callback)", (done: Done) => {
        try {
            Catalogs.wordBank((err: Error, catalog: Catalog) => {
                if (err) {
                    assert.fail(`An error occurred when retrieving catalog data: ${err.details}`);
                }
                assert(catalog.data.length > 0, "No words were found.");
                done();
            });
        } catch (err) {
            assert.fail(`An error occurred when retrieving catalog data: ${err.details}`);
        }
    }).timeout(10000);
});
