import assert from "assert";
import Rulings from "Rulings";
import { Done } from "mocha";
import { Ruling, Error } from "types";

// All cards searched for here have at least 1 ruling associated with them.
describe("ruling tests", () => {

    // Add a 100ms delay before each test to keep in line with Scryfall's API policy.
    beforeEach((done: Done) => {
        setTimeout(done, 100);
    });

    it("should return rulings by arena id (promise)", async () => {
        try {
            const rulings: Ruling[] = await Rulings.byArenaId(67462);
            assert(rulings.length > 0, "No rulings were found.");
        } catch (err) {
            assert.fail(`An error occurred when retrieving rulings: ${err.details}`);
        }
    }).timeout(10000);
    it("should return rulings by arena id (callback)", (done: Done) => {
        try {
            Rulings.byArenaId(67462, (err: Error, rulings: Ruling[]) => {
                if (err) {
                    assert.fail(`An error occurred when retrieving rulings: ${err.details}`);
                }
                assert(rulings.length > 0, "No rulings were found.");
                done();
            });
        } catch (err) {
            assert.fail(`An error occurred when retrieving rulings: ${err.details}`);
        }
    }).timeout(10000);

    it("should return rulings by card set/number (promise)", async () => {
        try {
            const rulings: Ruling[] = await Rulings.byCard({ set: "ima", collector_number: 65 });
            assert(rulings.length > 0, "No rulings were found.");
        } catch (err) {
            assert.fail(`An error occurred when retrieving rulings: ${err.details}`);
        }
    }).timeout(10000);
    it("should return rulings by card set/number (callback)", (done: Done) => {
        try {
            Rulings.byCard({ set: "ima", collector_number: 65 }, (err: Error, rulings: Ruling[]) => {
                if (err) {
                    assert.fail(`An error occurred when retrieving rulings: ${err.details}`);
                }
                assert(rulings.length > 0, "No rulings were found.");
                done();
            });
        } catch (err) {
            assert.fail(`An error occurred when retrieving rulings: ${err.details}`);
        }
    }).timeout(10000);

    it("should return rulings by mtgo id (promise)", async () => {
        try {
            const rulings: Ruling[] = await Rulings.byMtgoId(57934);
            assert(rulings.length > 0, "No rulings were found.");
        } catch (err) {
            assert.fail(`An error occurred when retrieving rulings: ${err.details}`);
        }
    }).timeout(10000);
    it("should return rulings by mtgo id (callback)", (done: Done) => {
        try {
            Rulings.byMtgoId(57934, (err: Error, rulings: Ruling[]) => {
                if (err) {
                    assert.fail(`An error occurred when retrieving rulings: ${err.details}`);
                }
                assert(rulings.length > 0, "No rulings were found.");
                done();
            });
        } catch (err) {
            assert.fail(`An error occurred when retrieving rulings: ${err.details}`);
        }
    }).timeout(10000);

    it("should return rulings by multiverse id (promise)", async () => {
        try {
            const rulings: Ruling[] = await Rulings.byMultiverseId(3255);
            assert(rulings.length > 0, "No rulings were found.");
        } catch (err) {
            assert.fail(`An error occurred when retrieving rulings: ${err.details}`);
        }
    }).timeout(10000);
    it("should return rulings by multiverse id (callback)", (done: Done) => {
        try {
            Rulings.byMultiverseId(3255, (err: Error, rulings: Ruling[]) => {
                if (err) {
                    assert.fail(`An error occurred when retrieving rulings: ${err.details}`);
                }
                assert(rulings.length > 0, "No rulings were found.");
                done();
            });
        } catch (err) {
            assert.fail(`An error occurred when retrieving rulings: ${err.details}`);
        }
    }).timeout(10000);

    it("should return rulings by scryfall id (promise)", async () => {
        try {
            const rulings: Ruling[] = await Rulings.byScryfallId("2e813319-d7bc-4672-9857-ac8b11c31e07");
            assert(rulings.length > 0, "No rulings were found.");
        } catch (err) {
            assert.fail(`An error occurred when retrieving rulings: ${err.details}`);
        }
    }).timeout(10000);
    it("should return rulings by scryfall id (callback)", (done: Done) => {
        try {
            Rulings.byScryfallId("2e813319-d7bc-4672-9857-ac8b11c31e07", (err: Error, rulings: Ruling[]) => {
                if (err) {
                    assert.fail(`An error occurred when retrieving rulings: ${err.details}`);
                }
                assert(rulings.length > 0, "No rulings were found.");
                done();
            });
        } catch (err) {
            assert.fail(`An error occurred when retrieving rulings: ${err.details}`);
        }
    }).timeout(10000);
});
