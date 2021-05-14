const path = require('path');


module.exports = {
    mode: "development",
    entry:'./src/index.js',
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
                        modules: true,
                    }
                },
                // 将 Sass 编译成 CSS
                'sass-loader',
                'postcss-loader'
            ]
        }]
    },
    output: {
        filename: "bundle.js",
        // 打包文件的位置
        // 绝对路径
        path: path.resolve(__dirname, 'dist')
    }
}