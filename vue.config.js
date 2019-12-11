const path = require('path');

module.exports = {
  pages: {
    index: {
      entry: 'src/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      title: 'Index Page',
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
    ingredients: {
      entry: 'src/ingredients/ingredients.js',
      template: 'public/ingredients.html',
      filename: 'ingredients.html',
      title: 'Ingredients',
      chunks: ['chunk-vendors', 'chunk-common', 'ingredients']
    },
    process: {
      entry: 'src/process/process.js',
      template: 'public/process.html',
      filename: 'process.html',
      title: 'Process',
      chunks: ['chunk-vendors', 'chunk-common', 'process']
    },
    result: {
      entry: 'src/result/result.js',
      template: 'public/result.html',
      filename: 'result.html',
      title: 'Result',
      chunks: ['chunk-vendors', 'chunk-common', 'result']
    },
  },

  chainWebpack: config => {
    const svgRule = config.module.rule('svg');
    svgRule.uses.clear();


    config.module
    .rule('svg')
    .test(/\.svg$/)
      .oneOf('?inline')
        .resourceQuery(/^\?inline/)
        .use('html-loader')
          .loader('html-loader')
          .end()
        .end()
      .oneOf('?sprite')
        .resourceQuery(/^\?sprite/)
        .use('svg-sprite-loader')
          .loader('svg-sprite-loader')
  },

  configureWebpack: {
    resolve: {
      alias: {
        '@components': path.resolve(__dirname, 'src/components'),
        '@style': path.resolve(__dirname, 'src/style'),
      }
    }
  }
}
