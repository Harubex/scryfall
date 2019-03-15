import assert from "assert";
import Symbols from "Symbols";
import { Done } from "mocha";
import { CardSymbol, ManaSymbol, Error } from "types";

describe("symbol tests", () => {

    // Add a 100ms delay before each test to keep in line with Scryfall's API policy.
    beforeEach((done: Done) => {
        setTimeout(done, 100);
    });

    it("should return all card symbols (promise)", async () => {
        try {
            const symbols: CardSymbol[] = await Symbols.all();
            assert(symbols.length > 0, "No symbols were found.");
        } catch (err) {
            assert.fail(`An error occurred when retrieving symbols: ${err.details}`);
        }
    }).timeout(10000);
    it("should return all card symbols (callback)", (done: Done) => {
        try {
            Symbols.all((err: Error, symbols: CardSymbol[]) => {
                if (err) {
                    assert.fail(`An error occurred when retrieving symbols: ${err.details}`);
                }
                assert(symbols.length > 0, "No symbols were found.");
                done();
            });
        } catch (err) {
            assert.fail(`An error occurred when retrieving symbols: ${err.details}`);
        }
    }).timeout(10000);

    it("should parse and return a mana symbol object (promise)", async () => {
        try {
            const symbol: ManaSymbol = await Symbols.parseMana("RUx");
            assert(symbol.cost && symbol.cost === "{X}{U}{R}", "Unable to parse mana string.");
        } catch (err) {
            assert.fail(`An error occurred when parsing mana string: ${err.details}`);
        }
    }).timeout(10000);
    it("should parse and return a mana symbol object (callback)", (done: Done) => {
        try {
            Symbols.parseMana("RUx", (err: Error, symbol: ManaSymbol) => {
                if (err) {
                    assert.fail(`An error occurred when parsing mana string: ${err.details}`);
                }
                assert(symbol.cost && symbol.cost === "{X}{U}{R}", "Unable to parse mana string.");
                done();
            });
        } catch (err) {
            assert.fail(`An error occurred when retrieving symbols: ${err.details}`);
        }
    }).timeout(10000);
});
