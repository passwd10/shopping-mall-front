const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            },
        ],
    },
    entry: {
        main: './src/index.js'
    },
    output: {
        path: path.resolve( __dirname, 'dist'),
        filename : 'main.js',
        publicPath: '/',
    },
    devServer: {
        inline: true,
        historyApiFallback: true,
        contentBase: './',
        hot: true,
        proxy: [{
            context: ['/login', '/session-content', '/cartList'],
            target: 'https://shopping-mall-api.herokuapp.com',
            changeOrigin: true,
        }]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './index.html',
            filename: 'index.html',
        })
    ],
    performance: {
        hints: false
    },
    mode: 'production',
    devtool: false,
};