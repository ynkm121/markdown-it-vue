const webpack = require("webpack");
module.exports = {
  transpileDependencies: [
    'mermaid'
  ],
  chainWebpack: (config) => {
    config.module
      .rule('mjs')
      .test(/\.mjs$/)
      .include.add(/node_modules/)
      .end()
      .type('javascript/auto');
  },
  configureWebpack: {
    plugins: [
      // 限制只打一个包，不分Chunk
      new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 1
      })
    ],
    optimization: {
      splitChunks: false,
      runtimeChunk: false,
      minimize: false,
    },
    output: {
      libraryExport: 'default',
    }
  },
};
