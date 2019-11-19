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
    devServer: {
        historyApiFallback: true //해당 주소를 서버에 요청하면 서버쪽 라우터에서 먼저 연결할 곳이 있는지 확인해보고 없기 때문에 이런 오류가 발생한답니다.
    },
};