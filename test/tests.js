const assert = require("assert");
const mocha = require("mocha");

const scryfall = require("../build/scryfall");

describe("Scryfall", () => {
    describe("#getCardByName", () => {
        it("Returns a single card with the given name.", (done) => {
            scryfall.getCardByName("jace, vryn's prodigy", false, (err, card) => {
                if (err) {
                    console.log(err);
                }
                assert.ok(card, "No card was found with the given name.");
                done();
            });
        }).timeout(0);
    });

    describe("#getCardByName => Promise", () => {
        it("Returns a single card with the given name.", async () => {
            try {
                const card = await scryfall.getCardByName("gideon, ally", true);
                assert.ok(card, "The returned card is incorrect.");
            } catch (err) {
                assert.fail(null, err, err.message);
            }
        }).timeout(0);
    });

    describe("#allCards", () => {
        it("Returns a page from the list of all recorded cards.", (done) => {
            scryfall.getAllCards(1, (cards) => {
                assert.ok(cards.length > 0, "No cards were found for the specified set.");
                done();
            });
        }).timeout(0);
    });

    describe("#allSets()", () => {
        it("Return an array of all available sets.", (done) => {
            scryfall.allSets((sets) => {
                sets[0].set_type
                assert.ok(sets.length > 0, "No sets were present in the response.");
                done();
            });
        });
    });

    describe("#allSets() => Promise", () => {
        it("Return an array of all available sets.", async () => {
            const sets = await scryfall.allSets();
            assert.ok(sets.length > 0, "No sets were present in the response.");
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

    describe("#getCardByCollectorCode(string, number)", () => {
        it("Returns information about a particular card by it's set code and colector number.", (done) => {
            scryfall.getCard("e01", "1★", (err, card) => {
                if (err) {
                    assert.fail(null, err, err.message);
                } else {
                    assert.equal(card.name, "Because I Have Willed It", "The returned card is incorrect.");
                }
                done();
            });
        });
    });

    describe("#getCardByMultiverse(number)", () => {
        it("Returns information about a particular card by it's multiverse id.", (done) => {
            scryfall.getCard(42069, "multiverse", (err, card) => {
                if (err) {
                    assert.fail(null, err, err.message);
                } else {
                    assert.equal(card.name, "Voidmage Apprentice", "The returned card is incorrect.");
                }
                done();
            });
        });
    });

    describe("#getCardByMtgo(number)", () => {
        it("Returns information about a particular card by it's mtgo id.", (done) => {
            scryfall.getCard(54957, "mtgo", (err, card) => {
                if (err) {
                    assert.fail(null, err, err.message);
                } else {
                    assert.equal(card.name, "Ghost Quarter", "The returned card is incorrect.");
                }
                done();
            });
        });
    });

    describe("#getCardByMtgo(number) => Promise", () => {
        it("Returns information about a particular card by it's mtgo id.", async () => {
            try {
                const card = await scryfall.getCard(54957, "mtgo");
                assert.equal(card.name, "Ghost Quarter", "The returned card is incorrect.");
            } catch (err) {
                assert.fail(null, err, err.message);
            }
        });
    });

    describe("#getCardByScryfall(string)", () => {
        it("Returns information about a particular card by it's scryfall id.", (done) => {
            scryfall.getCard("44012bb8-17b7-4b50-a796-662ef09bfc29", (err, card) => {
                if (err) {
                    assert.fail(null, err, err.message);
                } else {
                    assert.equal(card.name, "Bamboozle", "The returned card is incorrect.");
                }
                done();
            });
        }).timeout(0);
    });
    
    describe("#getCardByScryfall(string) => Promise", () => {
        it("Returns information about a particular card by it's scryfall id.", async () => {
            try {
            const card = await scryfall.getCard("44012bb8-17b7-4b50-a796-662ef09bfc29");
            assert.equal(card.name, "Bamboozle", "The returned card is incorrect.");
            } catch (err) { 
                assert.fail(null, err, err.message);
            }                    
        }).timeout(0);
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
        it("Return an array of cards from the specified set.", (done) => {
            scryfall.fromSet("bfz", (cards) => {
                assert.ok(cards.length > 0, "No cards were found for the specified set.");
                done();
            });
        }).timeout(0);
    });
});
