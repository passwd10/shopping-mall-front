const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: {
        main: './src/index.js'
    },
    output: {
        path: path.resolve( __dirname, 'dist'),
        filename : 'main.js',
        publicPath: '/',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            },
        ],
    },
    devServer: {
        inline: true,
        historyApiFallback: true,
        hot: true,
        proxy: [{
            context: ['/login', '/session-content', '/cartList'],
            target: 'http://localhost:3000',
            secure: false,
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
};