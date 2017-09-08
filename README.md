# Scryfall

This module wraps the Scryfall API into a small, easy to use library.

I'm still


## Example usage:

### Finding a card.

```javascript
// Requiring.
let scryfall = require("scryfall");
// Using the import statement.
import * as scryfall from "scryfall";

// Getting by set code and collector number.
scryfall.getCard("bfz", 29, (err, card) => {
    if (err) {
        // If the call was successful, this will be null.
    } else {
        console.log(card.name); // "Gideon, Ally of Zendikar"
        console.log(card.cmc); // 4
        // ...
    }
});

// Getting by multiverse id.
scryfall.getCard(83282, "multiverse", (err, card) => {
    if (err) {
        // If the call was successful, this will be null.
    } else {
        console.log(card.name); // "Storm Crow"
        console.log(card.type_line); // "Creature — Bird"
        // ...
    }
});

// Getting by mtgo id.
scryfall.getCard(83282, "mtgo", (err, card) => {
    if (err) {
        // If the call was successful, this will be null.
    } else {
        console.log(card.name); // "Gorilla Shaman"
        console.log(card.tix); // "12.62"
        // ...
    }
});

// Getting by scryfall id.
scryfall.getCard("44012bb8-17b7-4b50-a796-662ef09bfc29", (err, card) => {
    if (err) {
        // If the call was successful, this will be null.
    } else {
        console.log(card.name); // "Bamboozle"
        console.log(card.colors); // ["U"]
        // ...
    }
});
```

### Finding cards from a particular set.

```javascript
scryfall.fromSet("hml", (cards) => {
    console.log(cards[0].name); // "Abbey Gargoyles"
});
```