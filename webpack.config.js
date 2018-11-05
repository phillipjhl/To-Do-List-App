const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const CLIENT_DEST = path.join(__dirname, './client/dist');

module.exports = {
    //entry point for babel to compile files
    entry: ['@babel/polyfill', './client/src/index.js'],
    //output directory of new bundle.js file
    output: { path: CLIENT_DEST, filename: 'bundle.js' },
    module: {
        rules: [
            {
                test: /.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                    },
                },
            },
            {
                test: /\.(png|jpg|svg|gif)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        publicPath: '/dist/images',
                        outputPath: 'images',
                    },
                },
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader!sass-loader",
                })
            }
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    plugins: [
        new ExtractTextPlugin('styles.css')
    ]
};