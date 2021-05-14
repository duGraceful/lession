const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');


module.exports = {
    mode: "development",
    // 单入口文件
    // entry:'./src/index.js',
    // 多入口文件
    entry: {
        main: './src/index.js',
        sub: './src/index.js',
    },
    module: {
        rules: [{
            test: /\.(png|jpe?g|gif)$/i,
            use: {
                loader: 'url-loader',
                options: {
                    name: '[name]_[hash].[ext]',
                    outputPath: 'images/',
                    // 如果图片超过2048个字节，打包到dist目录下
                    // 如果图片小于2048个字节,使用base64
                    limit: 20480
                }
            }
        }, {
            test: /\.s[ac]ss$/i,
            use: [
                // 执行顺序，从后往前
                // 将 JS 字符串生成为 style 节点
                'style-loader',
                {
                    // 将 CSS 转化成 CommonJS 模块
                    loader: 'css-loader',
                    options: {
                        // 在saas文件里面引入的saas文件也需要走sass-loader、postcss-loader
                        importLoaders: 2,
                        // 模块化css
                        // modules: true,
                    }
                },
                // 将 Sass 编译成 CSS
                'sass-loader',
                'postcss-loader'
            ]
        }, {
            test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
            use: {
                loader: 'file-loader',
            }
        }]
    },
    // plugins可以在webpack运行到某个时刻的时候，帮你做一些事情
    plugins: [
        // HtmlWebpackPlugin 会在打包结束后，自动生成一个html文件，并把打包生成的js自动引入到这个html文件中
        new HtmlWebpackPlugin({
            // 以src/index.html为模版，将生成的boundle.js注入到生成的模版文件中
            template: 'src/index.html'
        }),
        // 打包之前清除dist目录下的文件
        new CleanWebpackPlugin(['dist']),
    ],
    output: {
        publicPath: 'http://cdn.com.cn',
        // filename: "bundle.js",
        filename: "[name].js",
        // 打包文件的位置
        // 绝对路径
        path: path.resolve(__dirname, 'dist')
    }
}