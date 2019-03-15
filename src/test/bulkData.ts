import assert from "assert";
import BulkDataMethods from "BulkData";
import { Done } from "mocha";
import { BulkData, Error } from "types";

describe("bulk data tests", () => {

    // Add a 100ms delay before each test to keep in line with Scryfall's API policy.
    beforeEach((done: Done) => {
        setTimeout(done, 100);
    });

    it("should return all of today's bulk data exports (promise)", async () => {
        try {
            const bulkData: BulkData[] = await BulkDataMethods.all();
            assert(bulkData.length > 0 && bulkData[0].compressed_size > 0, "Bulk data invalid or missing.");
        } catch (err) {
            assert.fail(`An error occurred when retrieving bulk data: ${err.details}`);
        }
    }).timeout(10000);
    it("should return all of today's bulk data exports (callback)", (done: Done) => {
        try {
            BulkDataMethods.all((err: Error, bulkData: BulkData[]) => {
                if (err) {
                    assert.fail(`An error occurred when retrieving bulk data: ${err.details}`);
                }
                assert(bulkData.length > 0 && bulkData[0].compressed_size > 0, "Bulk data invalid or missing.");
                done();
            });
        } catch (err) {
            assert.fail(`An error occurred when retrieving bulk data: ${err.details}`);
        }
    }).timeout(10000);
});
