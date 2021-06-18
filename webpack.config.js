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
                test: /\.scss$/,
                use: [
                    "style-loader", //step 3 > Inject styles into DOM
                    "css-loader",   //step 2 > Turns css into commonjs 
                    "sass-loader"   //step 1 > Turns sass into css
                ]
            },
            {
                test: /\.json$/,
                loader: "json-loader",
                type: "javascript/auto"
            },
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
    // target: 'web',
    // devServer: {
    //     liveReload:  true,
    //     hot: true,
    //     port: 8081,
    // },
    resolve: {
        extensions: [".js", ".jsx", ".json", ".wasm", ".mjs", "*"]
    } 
};

module.exports = config;