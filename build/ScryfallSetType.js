"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * An exhaustive list of set types; Scryfall provides an overall categorization for each Set in the set_type property.
 */
var ScryfallSetType;
(function (ScryfallSetType) {
    /**
     * A yearly Magic core set (e.g. Tenth Edition).
     */
    ScryfallSetType[ScryfallSetType["core"] = "core"] = "core";
    /**
     * A rotational expansion set in a block (e.g. Zendikar).
     */
    ScryfallSetType[ScryfallSetType["expansion"] = "expansion"] = "expansion";
    /**
     * A reprint set that contains no new cards (e.g. Modern Masters).
     */
    ScryfallSetType[ScryfallSetType["masters"] = "masters"] = "masters";
    /**
     * Masterpiece Series premium foil cards.
     */
    ScryfallSetType[ScryfallSetType["masterpiece"] = "masterpiece"] = "masterpiece";
    /**
     * From the Vault gift sets.
     */
    ScryfallSetType[ScryfallSetType["from_the_vault"] = "from_the_vault"] = "from_the_vault";
    /**
     * Signature Spellbook series gift sets.
     */
    ScryfallSetType[ScryfallSetType["spellbook"] = "spellbook"] = "spellbook";
    /**
     * Premium Deck Series decks.
     */
    ScryfallSetType[ScryfallSetType["premium_deck"] = "premium_deck"] = "premium_deck";
    /**
     * Duel Decks.
     */
    ScryfallSetType[ScryfallSetType["duel_deck"] = "duel_deck"] = "duel_deck";
    /**
     * Commander preconstructed decks.
     */
    ScryfallSetType[ScryfallSetType["commander"] = "commander"] = "commander";
    /**
     * Planechase sets.
     */
    ScryfallSetType[ScryfallSetType["planechase"] = "planechase"] = "planechase";
    /**
     * Conspiracy sets.
     */
    ScryfallSetType[ScryfallSetType["conspiracy"] = "conspiracy"] = "conspiracy";
    /**
     * Archenemy sets.
     */
    ScryfallSetType[ScryfallSetType["archenemy"] = "archenemy"] = "archenemy";
    /**
     * Vanguard card sets.
     */
    ScryfallSetType[ScryfallSetType["vanguard"] = "vanguard"] = "vanguard";
    /**
     * A funny un-set or set with funny promos (e.g. Unglued, Happy Holidays).
     */
    ScryfallSetType[ScryfallSetType["funny"] = "funny"] = "funny";
    /**
     * A starter/introductory set (e.g. Portal).
     */
    ScryfallSetType[ScryfallSetType["starter"] = "starter"] = "starter";
    /**
     * A gift box set.
     */
    ScryfallSetType[ScryfallSetType["box"] = "box"] = "box";
    /**
     * A set that contains purely promotional cards.
     */
    ScryfallSetType[ScryfallSetType["promo"] = "promo"] = "promo";
    /**
     * A set made up of tokens and emblems.
     */
    ScryfallSetType[ScryfallSetType["token"] = "token"] = "token";
    /**
     * A set made up of gold-bordered, oversize, or trophy cards that are not legal.
     */
    ScryfallSetType[ScryfallSetType["memorabilia"] = "memorabilia"] = "memorabilia";
})(ScryfallSetType = exports.ScryfallSetType || (exports.ScryfallSetType = {}));
//# sourceMappingURL=ScryfallSetType.js.map