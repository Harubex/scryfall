import assert from "assert";
import Cards from "Cards";
import { Done } from "mocha";
import { Card, Error } from "types";

describe("bulk data tests", () => {

    const testPages = 5;

    // Add a 100ms delay before each test to keep in line with Scryfall's API policy.
    beforeEach((done: Done) => {
        setTimeout(done, 100);
    });

    it("iterates through a few pages of cards (generator)", async () => {
        try {
            let passed = true;
            const cards: Card[] = [];
            for await (const card of Cards.all()) {
                if (cards.length > Cards.pageSize * testPages) {
                    break;
                }
                if (card.object !== "card" || !card.name) {
                    passed = false;
                    break;
                }
                cards.push(card);
            }
            assert(passed && cards.length > Cards.pageSize * testPages, "Unable to iterate through all cards.");
        } catch (err) {
            assert.fail(`An error occurred when retrieving card data: ${err.details}`);
        }
    }).timeout(60000);
    it("iterates through a few pages of cards (promise)", async () => {
        try {
            let cards: Card[] = [];
            for (let page = 1; page <= testPages; page++) {
                cards = cards.concat(await Cards.byPage(page));
            }
            assert(cards.length === Cards.pageSize * testPages, "Unable to iterate through all cards.");
        } catch (err) {
            assert.fail(`An error occurred when retrieving card data: ${err.details}`);
        }
    }).timeout(60000);
    it("retrieves a page of cards (callback)", (done: Done) => {
        try {
            Cards.byPage(Math.floor(Math.random() * 100), (err: Error, cards: Card[]) => {
                if (err) {
                    assert.fail(`An error occurred when retrieving card data: ${err.details}`);
                }
                assert(cards.length === Cards.pageSize, "Unable to iterate through all cards.");
                done();
            });
        } catch (err) {
            assert.fail(`An error occurred when retrieving card data: ${err.details}`);
        }
    }).timeout(10000);
});
