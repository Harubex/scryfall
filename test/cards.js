const ava = require("ava");
const scryfall = require("../build/scryfall");

ava.test("searching for a card by multiverse id", async (t) => {
    try {
    const card = await scryfall.getCard("bfz", 76);
    t.is(card.name, "Dispel");
    } catch (err) {
        t.fail(err.message);
    }
});