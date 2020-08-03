const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",
    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", '.js', '.jsx']
    },
    module: {
        rules: [
            // Enable Webpack to load .ts, .tsx files 
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "ts-loader"
                    }
                ]
            },
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            },
            // Enable Webpack to bundle .css, .scss into the build file
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    'style-loader',
                    // Translates CSS into CommonJS
                    'css-loader',
                    // Compiles Sass to CSS
                    'sass-loader',
                ],
            }
        ]
    },
    output: {
        filename: '[name].[hash].js',
        path: path.join(__dirname, 'dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.template.ejs',
            filename: './index.html'
        })
    ],
    optimization: {
        // To Team: Remove this if you don't need a split chunk 
        splitChunks: {
            // include all types of chunks
            chunks: 'all'
        }
    }
};