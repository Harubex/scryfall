# Scryfall

This module wraps the Scryfall API into a small, easy to use library.


### Example usage:

```javascript
// Requiring.
var scryfall = require("scryfall");
// Using the import statement.
import * as scryfall from "scryfall";

// Finding a card.
scryfall.getCard("bfz", 29, (err, card) => {
    if (err) {
        // If the call was successful, this will be null.
    } else {
        console.log(card.name); // "Gideon, Ally of Zendikar"
        console.log(card.cmc); // 4
        // ...
    }
});
```