const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

// development默认没有trees哈king
module.exports = {
    // // 单入口文件
    // entry:'./src/index.js',
    // 多入口文件
    entry: {
        // jquery: './src/jquery.js',
        main: './src/index.js',
    },
    // module：当我们遇到文件类型引入的时候，他都是一个模块，模块打包的规则
    module: {
        rules: [
            {
                test: /\.m?js$/,
                // 忽略打包的模块
                exclude: /node_modules/,
                use: [{
                    // babel-loader的一些配置放在babelrc的文件中
                    loader: "babel-loader",
                }]
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: {
                    loader: 'url-loader',
                    options: {
                        name: '[name]_[hash].[ext]',
                        outputPath: 'images/',
                        // 可以减少小图片打包http请求的次数
                        // 如果图片超过2048个字节，打包到dist目录下
                        // 如果图片小于2048个字节,使用base64
                        limit: 20480
                    }
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                use: {
                    loader: 'file-loader',
                }
            }
        ]
    },
    stats: {
        children: false, 
    },
    // plugins可以在webpack运行到某个时刻的时候，帮你做一些事情
    plugins: [
        // HtmlWebpackPlugin 会在打包结束后，自动生成一个html文件，并把打包生成的js自动引入到这个html文件中
        new HtmlWebpackPlugin({
            // 以src/index.html为模版，将生成的boundle.js注入到生成的模版文件中
            template: 'src/index.html'
        }),
        // 打包之前清除dist目录下的文件
        new CleanWebpackPlugin(['dist'], {
            root: path.resolve(__dirname, '../')
        }),
        new webpack.ProvidePlugin({
            // 如果有一个模块用了$，就在使用$模块自动引入jquery
            $: 'jquery'
        })
    ],
    performance: { 
        hints: false
    },
    optimization: {
        // 检查被使用的模块打包
        usedExports: true,
        splitChunks: {
            chunks: 'all',
            // // 以下不配置，按默认项
            // minSize: 30000,
            // // maxSize: 50000, // 超过maxSize的文件，会尝试2次分割
            // minChunks: 1, // 当一个模块最少被使用1次的时候，在进行代码分割
            // maxAsyncRequests: 5, // 同时家在的模块数，最多是5
            // maxInitialRequests: 3, // 入口文件进行加载的时候，最多做3个代码块分割，如果超过3个，不再做代码分割
            // automaticNameDelimiter: '~', // 文件生成的时候，文件的连接符，
            // name: true,
            // cacheGroups: {
            //     vendors: {
            //       test: /[\\/]node_modules[\\/]/,
            //       priority: -10,
            //     //   filename: 'vendors.js'
            //     },
            //     default: {
            //         // minChunks: 2,
            //         priority: -20, //   优先级
            //         reuseExistingChunk: true,
            //         filename: 'common.js'
            //     },
            //   },
        }
    },
    output: {
        // publicPath: '/',
        // filename: "bundle.js",
        // 打包对应的文件名
        filename: "[name].js",
        chunkFilename: '[name].chunk.js',
        // 打包文件的位置
        // 绝对路径
        path: path.resolve(__dirname, '../dist')
    }
}

