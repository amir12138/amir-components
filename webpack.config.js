const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require("html-webpack-plugin")
const path = require("path");

function resolve(dir) {
    return path.join(__dirname, "/", dir);
}

module.exports = {
    mode: "production",
    entry: "./src/main.js",
    output: {
        filename: "index.js",
        path: resolve("./lib"),
        library: "Modal",
        libraryTarget: "umd"
    },
    resolve: {
        //绝对路径, 查找module的话从这里开始查找(可选)
        modules: [resolve("src"), "node_modules"],
        extensions: [".js", ".vue", ".jsx", ".json", ".less", ".css"],
        alias: {
            vue$: "vue/dist/vue.esm.js",
            "@": resolve("src"),
        },
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(ttf|eot|woff|svg|woff2)/,
                use: "file-loader"
            },
            {
                test: /\.(jsx?|babel|es6)$/,
                // include: process.cwd(),
                // exclude: config.jsexclude,
                loader: 'babel-loader'
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    compilerOptions: {
                        preserveWhitespace: false
                    }
                }
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
    ],
}