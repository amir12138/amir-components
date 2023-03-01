

const HtmlWebpackPlugin = require("html-webpack-plugin");
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const path = require("path");

function resolve(dir) {
    return path.join(__dirname, "/", dir);
}

module.exports = {
    mode: "production",
    entry: "./examples/index.js",
    output: {
        filename: "index.js",
        path: path.resolve(__dirname, '../lib')
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
    // 开发服务器
    devServer: {
        hot: true,
        contentBase: path.resolve(__dirname, '../lib'), // 启动文件指向路径
        open: true, // 服务启动后，自动打开浏览器
        useLocalIp: true, // 是否在打包的时候使用自己的 IP
        port: 8081,
        host: '0.0.0.0',
        historyApiFallback: true, // 找不到替换为index.html
        proxy: {}, // 代理
    },
    
    plugins: [
        new VueLoaderPlugin(),

        new HtmlWebpackPlugin({
            template: "index.html"
        })
    ],
}