const axios = require('axios');
const prefix = 'https://the-one-api.dev/v2'

class TheOneAPI {
    /**
     * TheOneAPI Contructor.
     * 
     * @param {string} token Your the-one-api.dev token.
     */
    constructor(token){
        this.token = token;

        this.books = {
            /**
             * @returns List of all "The Lord of the Rings" books.
             */
            list: async () => {
                return await require('./Methods/books/list')(prefix, axios)
            },

            /**
             * Request one specific book by it's ID or index within the list() array.
             * 
             * @param {string|number} id The ID of the book.
             * @returns {Object} Object containing the book and it's details.
             */
            get: async (id) => {
                return await require('./Methods/books/get')(id, prefix, axios)
            },

            /**
             * Request all chapters of one specific book.
             * 
             * This method cannot search by index, you must provide an EXACT ID.
             * 
             * @param {number} id The ID of the book.
             * @returns {Array} Array of chapters.
             */
            chapters: async (id) => {
                return await require('./Methods/books/chapters')(id, prefix, axios)
            }
        }

        this.movies = {
            /**
             * @returns {Array} List of all movies, including the "The Lord of the Rings" and the "The Hobbit" trilogies.
             */
            list: async () => {
                return await require('./Methods/movies/list')(prefix, axios, this.token);
            },

            /**
             * Request one specific movie by it's ID or index within the list() array.
             * 
             * @param {string|number} id The ID of the movie.
             * @returns {Object} Object containing the movie and it's details.
             */
            get: async (id) => {
                return await require('./Methods/movies/get')(id, prefix, axios, this.token);
            },

            /**
             * Request all quotes of one specific movie.
             * 
             * This method cannot search by index, you must provide an EXACT ID.
             * 
             * @param {number} id
             * @returns {Array} Array of the movie's quotes. 
             */
            quotes: async (id) => {
                return await require('./Methods/movies/quotes')(id, prefix, axios, this.token);
            }
        }

        this.characters = {
            /**
             * @returns {Array} List of characters including metadata like name, gender, realm, race and more.
             */
            list: async () => {
                return await require('./Methods/characters/list')(prefix, axios, this.token)
            },
            /**
             * Request one specific character by it's ID or index within the list() array.
             * 
             * @param {string|number} id The ID of the character.
             * @returns {Object} Object containing the character and it's details.
             */
            get: async (id) => {
                return await require('./Methods/characters/get')(id, prefix, axios, this.token)
            },

            /**
             * Search for a character based on certain criteria.
             * 
             * Types can be chosen from the following*: 'name', 'race', 'gender', 'spouse'
             * 
             * *Prefix type with the letter n to exclude that detail. Ex: nname
             * 
             * Search for multiple items by putting the details parameter as an array. Ex: [Hobbit, Human]
             * 
             * @param {string} type What type you are searching for, i.e name, race, gender.
             * @param {string} detail The specific thing you are searching for, i.e Ailinel, Human, Female
             */
            find: async (type, detail) => {
                return await require('./Methods/characters/find')(type, detail, prefix, axios, this.token)
            },

            /**
             * Request all movie quotes of one specific character.
             * 
             * This method cannot search by index, you must provide an EXACT ID.
             * 
             * @param {number} id
             * @returns {Array} Array of the characters quotes. 
             */
            quotes: async (id) => {
                return await require('./Methods/characters/quotes')(id, prefix, axios, this.token);
            }
        }

        this.quotes = {
            /**
             * @returns {Array} List of all movie quotes.
             */
            list: async () => {
                return await require('./Methods/quotes/list')(prefix, axios, this.token);
            },

            /**
             * Request one specific quote.
             * 
             * @param {string|number} id ID of the quote.
             * @returns {Object} Object containing the quote and it's details.
             */
            get: async (id) => {
                return await require('./Methods/quotes/get')(id, prefix, axios, this.token);
            }
        }

        this.chapters = {
            /**
             * @returns {Array} List of all book chapters.
             */
            list: async () => {
                return await require('./Methods/chapters/list')(prefix, axios, this.token);
            }, 

            /**
             * Request one specific book chapter.
             * 
             * @param {string|number} id ID of the chapter.
             * @returns {Object} Object containing the chapter and it's details.
             */
            get: async (id) => {
                return await require('./Methods/chapters/get')(id, prefix, axios, this.token);
            }
        }
    }
}

module.exports = TheOneAPI

