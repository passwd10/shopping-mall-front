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
        proxy: {
            '/login': {
                target : 'http://localhost:3000/',
                secure: false,
                changeOrigin: true,
            }
        }
    },
    plugins: [
        new HtmlWebPackPlugin({
         template: './index.html',
        filename: 'index.html',
    })
  ],
};