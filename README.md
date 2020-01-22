# laz-long-quotes

Random quotes from the Notebook of Lazarus Long contained in the book "Time Enough For Love" by Robert A. Heinlein. This module returns an object containing the quote and the source.

# Installation

```
npm install --save laz-long-quotes
```

# Usage

```javascript
const Quotes = require('laz-long-quotes');
let Quote = Quotes.quote();

console.log(Quote.quote + "\n" + Quote.source);
```
