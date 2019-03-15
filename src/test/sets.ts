import assert from "assert";
import Sets from "Sets";
import { Done } from "mocha";
import { Set, Error } from "types";

describe("set tests", () => {

    // Add a 100ms delay before each test to keep in line with Scryfall's API policy.
    beforeEach((done: Done) => {
        setTimeout(done, 100);
    });

    it("should return all sets (promise)", async () => {
        try {
            const sets: Set[] = await Sets.all();
            // The number of sets grows continuously, so just check for "many".
            assert(sets.length > 100, `Only ${sets.length} sets were found.`);
        } catch (err) {
            assert.fail(`An error occurred when retrieving all sets: ${err.details}`);
        }
    }).timeout(10000);
    it("should return all sets (callback)", (done: Done) => {
        Sets.all((err: Error, sets: Set[]) => {
            if (err) {
                assert.fail(`An error occurred when retrieving all sets: ${err.details}`);
            }
            assert(sets.length > 100, `Only ${sets.length} sets were found.`);
            done();
        });
    }).timeout(10000);

    it("should return a specific set by a set code (promise)", async () => {
        try {
            const set: Set = await Sets.byCode("mma");
            assert(set && set.name === "Modern Masters", "Unable to retrieve a set by its code.");
        } catch (err) {
            assert.fail(`An error occurred when retrieving a set: ${err.details}`);
        }
    }).timeout(10000);
    it("should return a specific set by a set code (callback)", (done: Done) => {
        Sets.byCode("uma", (err: Error, set: Set) => {
            if (err) {
                assert.fail(`An error occurred when retrieving a set: ${err.details}`);
            }
            assert(set && set.name === "Ultimate Masters", "Unable to retrieve a set by its code.");
            done();
        });
    }).timeout(10000);

    it("should return a specific set by a scryfall id (promise)", async () => {
        try {
            const set: Set = await Sets.byScryfallId("0b7020f2-336d-4706-9ce6-f6710b9ebd5c");
            assert(set && set.name === "Modern Masters", "Unable to retrieve a set by its code.");
        } catch (err) {
            assert.fail(`An error occurred when retrieving a set: ${err.details}`);
        }
    }).timeout(10000);
    it("should return a specific set by a scryfall id (callback)", (done: Done) => {
        Sets.byScryfallId("2ec77b94-6d47-4891-a480-5d0b4e5c9372", (err: Error, set: Set) => {
            if (err) {
                assert.fail(`An error occurred when retrieving a set: ${err.details}`);
            }
            assert(set && set.name === "Ultimate Masters", "Unable to retrieve a set by its code.");
            done();
        });
    }).timeout(10000);

    it("should return a specific set by a tcgplayer id (promise)", async () => {
        try {
            const set: Set = await Sets.byTcgplayerId(1111);
            assert(set && set.name === "Modern Masters", "Unable to retrieve a set by its code.");
        } catch (err) {
            assert.fail(`An error occurred when retrieving a set: ${err.details}`);
        }
    }).timeout(10000);
    it("should return a specific set by a tcgplayer id (callback)", (done: Done) => {
        Sets.byTcgplayerId(2360, (err: Error, set: Set) => {
            if (err) {
                assert.fail(`An error occurred when retrieving a set: ${err.details}`);
            }
            assert(set && set.name === "Ultimate Masters", "Unable to retrieve a set by its code.");
            done();
        });
    }).timeout(10000);
});
