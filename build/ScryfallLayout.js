"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * The arrangement of card parts, faces, and other bounded regions on cards.
 */
var ScryfallLayout;
(function (ScryfallLayout) {
    /**
     * A standard Magic card with one face.
     */
    ScryfallLayout[ScryfallLayout["normal"] = "normal"] = "normal";
    /**
     * A split-faced card.
     */
    ScryfallLayout[ScryfallLayout["split"] = "split"] = "split";
    /**
     * Cards that invert vertically with the flip keyword.
     */
    ScryfallLayout[ScryfallLayout["flip"] = "flip"] = "flip";
    /**
     * Double-sided cards that transform.
     */
    ScryfallLayout[ScryfallLayout["transform"] = "transform"] = "transform";
    /**
     * Cards with meld parts printed on the back.
     */
    ScryfallLayout[ScryfallLayout["meld"] = "meld"] = "meld";
    /**
     * Cards with Level Up.
     */
    ScryfallLayout[ScryfallLayout["leveler"] = "leveler"] = "leveler";
    /**
     * Saga-type cards.
     */
    ScryfallLayout[ScryfallLayout["saga"] = "saga"] = "saga";
    /**
     * Plane and Phenomenon-type cards.
     */
    ScryfallLayout[ScryfallLayout["planar"] = "planar"] = "planar";
    /**
     * Scheme-type cards.
     */
    ScryfallLayout[ScryfallLayout["scheme"] = "scheme"] = "scheme";
    /**
     * Vanguard-type cards.
     */
    ScryfallLayout[ScryfallLayout["vanguard"] = "vanguard"] = "vanguard";
    /**
     * Token cards.
     */
    ScryfallLayout[ScryfallLayout["token"] = "token"] = "token";
    /**
     * Tokens with another token printed on the back.
     */
    ScryfallLayout[ScryfallLayout["double_faced_token"] = "double_faced_token"] = "double_faced_token";
    /**
     * Emblem cards.
     */
    ScryfallLayout[ScryfallLayout["emblem"] = "emblem"] = "emblem";
    /**
     * Cards with Augment.
     */
    ScryfallLayout[ScryfallLayout["augment"] = "augment"] = "augment";
    /**
     * Host-type cards.
     */
    ScryfallLayout[ScryfallLayout["host"] = "host"] = "host";
})(ScryfallLayout = exports.ScryfallLayout || (exports.ScryfallLayout = {}));
//# sourceMappingURL=ScryfallLayout.js.map