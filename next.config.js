const withLess = require("next-with-less");

module.exports = {
    ...withLess({
        lessLoaderOptions: {},
    }),
    images: {
        domains: [
            'images.pokemontcg.io',
            'raw.githubusercontent.com'
        ],
    },
};