const { merge } = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const WorkboxWebPlugin = require('workbox-webpack-plugin');
const commonConfig = require('./webpack.common.js');

const prodConfig = {
  mode: 'production',
  devtool: 'cheap-module-source-map',
  plugins: [new MiniCssExtractPlugin()],
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          // 执行顺序，从后往前
          // 将 JS 字符串生成为 style 节点
          // css代码分割
          MiniCssExtractPlugin.loader,
          {
            // 将 CSS 转化成 CommonJS 模块
            loader: 'css-loader',
            options: {
              // 在saas文件里面引入的saas文件也需要走sass-loader、postcss-loader
              importLoaders: 2,
              // 模块化css
              // modules: true,
            },
          },
          // 将 Sass 编译成 CSS
          'sass-loader',
          'postcss-loader',
        ],
      },
      {
        test: /\.css$/i,
        use: [
          // 执行顺序，从后往前
          // 将 JS 字符串生成为 style 节点
          MiniCssExtractPlugin.loader,
          // 将 CSS 转化成 CommonJS 模块
          'css-loader',
          'postcss-loader',
        ],
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [
      new OptimizeCSSAssetsPlugin({}),
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[name].chunk.css',
    }),
    new WorkboxWebPlugin.GenerateSW({
      clientsClaim: true,
      skipWaiting: true,
    }),
  ],
};

module.exports = merge(commonConfig, prodConfig);
