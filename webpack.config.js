const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const CLIENT_DEST = path.join(__dirname, './client/dist');

module.exports = {
    //entry point for babel to compile files
    entry: ['@babel/polyfill', './client/src/index.js'],
    //output directory of new bundle.js file
    output: { path: CLIENT_DEST, filename: 'bundle.js' },
    optimization: {
        splitChunks: {
            cacheGroups: {
                styles: {
                    name: 'styles',
                    test: /\.css$/,
                    chunks: 'all',
                    enforce: true
                }
            }
        }
    },
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
                test: /\.(png|jpg|gif)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        publicPath: '/dist/images',
                        outputPath: 'images',
                    },
                },
            },
            {
                test: /\.(scss|css)$/,
                use: [MiniCssExtractPlugin.loader,
                    'css-loader!sass-loader'
                ]
            }
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "styles.css",
        })
    ]
};