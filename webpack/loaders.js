const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const path = require('path');

const ImageLoader = {
    test: /\.(jpe?g|png|gif|svg|cur)$/i,
    use: [
        {
            loader: 'file-loader',
            options: {
                hash: 'sha512',
                digest: 'hex',
                name: 'img/[hash].[ext]',
                publicPath: '/src/',
            },
        },
        {
            loader: 'image-webpack-loader',
            query: {
                mozjpeg: {
                    progressive: true,
                    quality: 90,
                },
                gifsicle: {
                    interlaced: false,
                },
                optipng: {
                    optimizationLevel: 7,
                },
                pngquant: {
                    quality: '65-90',
                    speed: 4,
                },
                svgo: {
                    plugins: [
                        {
                            removeViewBox: false,
                        },
                        {
                            removeEmptyAttrs: false,
                        },
                    ],
                },
            },
        },
    ],
    exclude: [
        /node_modules/,
        path.resolve(`${__dirname}/../modules/components/__helpers/icon/svg`),
    ],
};

const StyleLoader = {
    test: /\.scss$/,
    use: [
        MiniCssExtractPlugin.loader,
        {
            loader: 'css-loader',
            options: {
                context: path.resolve(`${__dirname}/../`),
                minimize: true,
                localIdentName: '[name]__[local]___[hash:base64:5]',
                importLoaders: true,
            },
        },
        'postcss-loader',
    ],
};

const URLLoader = {
    test: /\.(woff|woff2|eot|ttf|webp)$/,
    use: [
        {
            loader: 'url-loader',
            options: {
                limit: 100000,
            },
        },
    ],
};

const JSLoader = {
    test: /.jsx?$/,
    loaders: ['babel-loader'],
    include: path.resolve(`${__dirname}/../modules`),
    exclude: [/node_modules/],
};

const SVGSpriteLoader = {
    test: /\.svg$/,
    include: path.resolve(`${__dirname}/../modules/components/__helpers/icon/svg`),
    loader: 'svg-sprite-loader',
};

module.exports = {
    ImageLoader,
    StyleLoader,
    URLLoader,
    JSLoader,
    SVGSpriteLoader,
};
