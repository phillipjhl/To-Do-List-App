const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const CLIENT_DEST = path.join(__dirname, './client/dist');

module.exports = {
    //entry point for babel to compile files
    entry: ['@babel/polyfill', './client/src/index.js'],
    //output directory of new bundle.js file
    output: { path: CLIENT_DEST, filename: 'bundle.js' },
    module: {}
};