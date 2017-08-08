const assert = require("assert");
const mocha = require("mocha");

const scryfall = require("../build/scryfall");

describe("Scryfall", () => {
    describe("#allSets()", () => {
        it("Return an array of all available sets.", (done) => {
            scryfall.allSets((sets) => {
                assert.ok(sets.length > 0, "No sets were present in the response.");
                done();
            });
        });
    });

    describe("#autocomplete()", () => {
        it("Return an array of matching card names.", (done) => {
            scryfall.autocomplete("Jace", (matches) => {
                assert.ok(matches.length > 0, "No matches were present in the response.");
                done();
            });
        });
    });

    describe("#getCard(string, number)", () => {
        it("Returns information about a particular card by it's set code and colector number.", (done) => {
            scryfall.getCard("bfz", 29, (card) => {
                assert.equal(card.name, "Gideon, Ally of Zendikar", "The returned card is incorrect.");
                done();
            });
        });
    });

    describe("#cardVersions()", () => {
        it("Return an array of cards with a specified name.", (done) => {
            scryfall.cardVersions("Forest", (cards) => {
                assert.ok(cards.length > 1, "Multiple versions of the specified card were not returned.");
                done();
            });
        }).timeout(0);
    });

    describe("#fromSet()", () => {
        it("Return an array cards from the specified set.", (done) => {
            scryfall.fromSet("bfz", (cards) => {
                assert.ok(cards.length > 0, "No cards were found for the specified set.");
                done();
            });
        }).timeout(0);
    });
});
