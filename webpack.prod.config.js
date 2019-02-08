require('dotenv').config();
const webpack = require('webpack');
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer');

const APP_ENV = JSON.stringify(process.env.APP_ENV);
const path = require('path');

const loaders = require('./webpack/loaders');

module.exports = {
    mode: 'production',
    stats: {
        colors: true,
        entrypoints: false,
        children: false,
    },
    devtool: 'source-map',
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
    plugins: [
        new SpriteLoaderPlugin(),
        new MiniCssExtractPlugin({filename: 'styles.css'}),
        new webpack.EnvironmentPlugin({APP_ENV: APP_ENV || 'production'}),
        new BundleAnalyzerPlugin({
            analyzerMode: APP_ENV === JSON.stringify('test') ? 'server' : 'disabled',
        }),
    ],
    entry: {
        'bundle.min': './modules/index',
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
            'redux-saga',
        ],
    },
    output: {
        path: path.join(__dirname, 'src'),
        chunkFilename: 'chunk.[chunkhash].js',
        filename: '[name].js',
        publicPath: '/src/',
        sourceMapFilename: '[name]-[contenthash].min.js.map',
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
};
