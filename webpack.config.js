const path = require('path');

const config = {
    entry: "./src/index.js",
    mode: 'development',
    devtool: 'source-map',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js',
        publicPath: '/',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"] 
                    }
                },
            },
        ],
    },
    resolve: {
        extensions: [".js", ".jsx", ".json", ".wasm", ".mjs", "*"]
    } 
};

module.exports = config;