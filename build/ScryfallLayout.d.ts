/**
 * The arrangement of card parts, faces, and other bounded regions on cards.
 */
export declare enum ScryfallLayout {
    /**
     * A standard Magic card with one face.
     */
    normal,
    /**
     * A split-faced card.
     */
    split,
    /**
     * Cards that invert vertically with the flip keyword.
     */
    flip,
    /**
     * Double-sided cards that transform.
     */
    transform,
    /**
     * Cards with meld parts printed on the back.
     */
    meld,
    /**
     * Cards with Level Up.
     */
    leveler,
    /**
     * Saga-type cards.
     */
    saga,
    /**
     * Plane and Phenomenon-type cards.
     */
    planar,
    /**
     * Scheme-type cards.
     */
    scheme,
    /**
     * Vanguard-type cards.
     */
    vanguard,
    /**
     * Token cards.
     */
    token,
    /**
     * Tokens with another token printed on the back.
     */
    double_faced_token,
    /**
     * Emblem cards.
     */
    emblem,
    /**
     * Cards with Augment.
     */
    augment,
    /**
     * Host-type cards.
     */
    host,
}
