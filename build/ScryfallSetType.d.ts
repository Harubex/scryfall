/**
 * An exhaustive list of set types; Scryfall provides an overall categorization for each Set in the set_type property.
 */
export declare enum ScryfallSetType {
    /**
     * A yearly Magic core set (e.g. Tenth Edition).
     */
    core,
    /**
     * A rotational expansion set in a block (e.g. Zendikar).
     */
    expansion,
    /**
     * A reprint set that contains no new cards (e.g. Modern Masters).
     */
    masters,
    /**
     * Masterpiece Series premium foil cards.
     */
    masterpiece,
    /**
     * From the Vault gift sets.
     */
    from_the_vault,
    /**
     * Signature Spellbook series gift sets.
     */
    spellbook,
    /**
     * Premium Deck Series decks.
     */
    premium_deck,
    /**
     * Duel Decks.
     */
    duel_deck,
    /**
     * Commander preconstructed decks.
     */
    commander,
    /**
     * Planechase sets.
     */
    planechase,
    /**
     * Conspiracy sets.
     */
    conspiracy,
    /**
     * Archenemy sets.
     */
    archenemy,
    /**
     * Vanguard card sets.
     */
    vanguard,
    /**
     * A funny un-set or set with funny promos (e.g. Unglued, Happy Holidays).
     */
    funny,
    /**
     * A starter/introductory set (e.g. Portal).
     */
    starter,
    /**
     * A gift box set.
     */
    box,
    /**
     * A set that contains purely promotional cards.
     */
    promo,
    /**
     * A set made up of tokens and emblems.
     */
    token,
    /**
     * A set made up of gold-bordered, oversize, or trophy cards that are not legal.
     */
    memorabilia,
}
