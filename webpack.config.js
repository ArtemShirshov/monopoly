require('dotenv').config();
const webpack = require('webpack');
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const path = require('path');

const loaders = require('./webpack/loaders');

module.exports = {
    mode: 'development',
    stats: {
        colors: true,
        entrypoints: false,
        children: false,
    },
    devtool: 'eval',
    resolve: {
        extensions: ['.js', '.jsx', '.scss'],
        modules: ['node_modules', 'modules', 'css'],
    },
    module: {
        rules: [
            loaders.JSLoader,
            loaders.StyleLoader,
            loaders.URLLoader,
            loaders.ImageLoader,
            loaders.SVGSpriteLoader,
        ],
    },
    optimization: {
        minimizer: [new TerserPlugin({parallel: true})],
        splitChunks: {
            cacheGroups: {
                default: false,
                'bundle.min': false,
                'vendor.bundle': false,
            },
        },
    },
    plugins: [
        new SpriteLoaderPlugin(),
        new MiniCssExtractPlugin({filename: 'styles.css'}),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.EnvironmentPlugin({
            APP_ENV: JSON.stringify(process.env.APP_ENV) || 'development',
        }),
    ],
    entry: {
        'bundle.min': [
            'react-hot-loader/patch',
            'webpack-dev-server/client?http://localhost:3000',
            'webpack/hot/only-dev-server',
            './modules/index',
        ],
        'vendor.bundle': [
            'react',
            'react-dom',
            'redux',
            'react-redux',
            'redux-axios-middleware',
            'axios',
            'react-animate-height',
            'react-slick',
            'react-sticky',
            'jsonp',
            'rc-dialog',
            'rc-tooltip',
            'redux-saga'
        ],
    },
    output: {
        path: path.join(__dirname, 'src'),
        chunkFilename: 'chunk.[chunkhash].js',
        filename: '[name].js',
        publicPath: '/src/',
        sourceMapFilename: '[name]-[contenthash].min.js.map',
    },
};
