# [The One API](https://the-one-api.dev/) Wrapper

DISCLAIMER: This was made for my own personal use and I'm only sharing it in case people want to use it.
If you'd like to optimize this or use any of the code, you do NOT have to credit me.

### How to get started: 

 1. Create an account [here](https://the-one-api.dev/sign-up).
 2. Save your access token (this obviously needs to be kept a secret).


### Documentation:

Please keep in mind that you are limited to 100 API calls every 10 minutes.

The above does NOT apply to the .books category.


To Start:
```js
const TheOneAPI = require('the-one-apiwrapper');

const TO = new TheOneAPI('TOKEN HERE');
```

##### The following belong to every category:
TO.\[category\].list() : List everything contained within a category.
Example:
```js
TO.quotes.list();

//Will return a massive array of ALL quotes from ALL movies.
```

TO.\[category\].get(id) : Retrieves something by by it's ID or index with the list() array.
Example:
```js
TO.quotes.get(423);
//or
TO.quotes.get('5cd96e05de30eff6ebcce990');

//Will return:
// {
//   _id: '5cd96e05de30eff6ebcce990',
//   dialog: 'He took it.  He must have.',
//   movie: '5cd95395de30eff6ebccde5d',
//   character: '5cd99d4bde30eff6ebccfd0d'
// }
```

---

Different Groups have different methods to choose from (related to that group). They're all pretty simple to use, so just play around and find out.
Here are the different groupings:
```js
TO.books
TO.chapters
TO.characters
TO.movies
TO.quotes
```