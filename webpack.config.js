const HtmlWebpackPlugin = require("html-webpack-plugin")
const path = require("path")

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "bundle.js",
        path: path.join(__dirname, "./")
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            }
            
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, './public'),
        compress: true, 
        port: 9000,
        open: true
    }
}