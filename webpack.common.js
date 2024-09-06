const path = require("path")
const autoprefixer = require('autoprefixer')
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: {
        app: './src/js/index.js',
    },
    output: {
        filename:'main.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/template.html',
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource",
            },
            {
                test: /\.(scss)$/,
                use: [
                {
                    // Adds CSS to the DOM by injecting a `<style>` tag
                    loader: 'style-loader'
                },
                {
                    // Interprets `@import` and `url()` like `import/require()` and will resolve them
                    loader: 'css-loader'
                },
                {
                    // Loader for webpack to process CSS with PostCSS
                    loader: 'postcss-loader',
                    options: {
                    postcssOptions: {
                        plugins: [
                            autoprefixer
                        ]
                    }
                    }
                },
                {
                    // Loads a SASS/SCSS file and compiles it to CSS
                    loader: 'sass-loader'
                }
                ]
            },
        ],
    },
}