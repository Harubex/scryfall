# scryfall

This module wraps the Scryfall API into a small, easy to use library.

Included with this module are Typescript definitions for each method declaration and every object returned from the API.

## Example usage

### Finding a card:

```javascript
// Requiring.
const scryfall = require("scryfall");
// Using the import statement.
import * as scryfall from "scryfall";
// Alternative import method.
import { Scryfall } from "scryfall";

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

// You can also omit a callback to have the method return a promise instead.
const card = await scryfall.getCard("bfz", 29);
console.log(card.name); // "Gideon, Ally of Zendikar"
console.log(card.cmc); // 4


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

### Finding cards from a particular set:

```javascript
scryfall.fromSet("hml", (cards) => {
    console.log(cards[0].name); // "Abbey Gargoyles"
});
```

```javascript
const emitter = Cards.all();
const allCards = [];
do {
    allCards.concat(emitter.getCards());
} while (emitter.hasMore);
```