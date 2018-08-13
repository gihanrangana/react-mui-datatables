const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const htmlWebpackPlugin = new HtmlWebpackPlugin({
    template: path.join(__dirname, "examples/src/index.html"),
    filename: "./index.html"
});
module.exports = {
    entry    : path.join(__dirname, "examples/src/index.js"),
    output: {
        path: path.join(__dirname, "examples/dist"),
        filename: "bundle.js"
    },
    module   : {
        rules: [
            {
                test   : /\.(js|jsx)$/,
                use    : "babel-loader",
                exclude: /node_modules/,
            },
            {
                test: /\.scss$/,
                use : ["style-loader", "css-loader",
                    {
                        loader : "sass-loader",
                        options: {
                            includePaths: ["absolute/path/a", "absolute/path/b"]
                        },
                    }]
            },
            {
                test: /\.css$/,
                use : ["style-loader", "css-loader"]
            }
        ]
    },
    plugins  : [htmlWebpackPlugin],
    resolve  : {
        extensions: [".js", ".jsx"]
    },
    performance: {
        hints: process.env.NODE_ENV === 'production' ? "warning" : false
    },
    devServer: {
        port: 3001
    }
};