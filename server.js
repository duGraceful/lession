// 自己实现devsever
// 对应package.json的命令：    "server": "node server.js"
const express = require('express');
const webpack = require('webpack');

const webpackDevMiddle = require('webpack-dev-middleware');

const config = require('./webpack.config.js');
// 在node使用webpack
// 编译器
const complier = webpack(config);

const app = express();

app.use(webpackDevMiddle(complier, {
    publicPath: config.output.publicPath
}));

app.listen(3000, () => {
    console.log('sever is running');
})
