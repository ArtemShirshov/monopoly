module.exports = {
    plugins: {
        'postcss-import': {
            resolve(pathName) {
                return pathName.match(/\.scss$/) ? pathName : `${pathName}.scss`;
            },
        },
        'postcss-mixins': {
            /* ...options */
        },
        'postcss-nested': {
            /* ...options */
        },
        'postcss-simple-vars': {
            /* ...options */
        },
        'postcss-calc': {
            /* ...options */
        },
        'postcss-inline-svg': {
            /* ...options */
        },
        'postcss-svgo': {
            /* ...options */
        },
        precss: {
            /* ...options */
        },
        'postcss-flexbugs-fixes': {
            /* ...options */
        },
        autoprefixer: {
            /* ...options */
        },
        'postcss-focus-within': {
            /* ...options */
        },
    },
};
