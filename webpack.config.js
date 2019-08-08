const path = require('path');
const webpack = require('webpack');
const pkg = require('./package.json');

const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  entry: {
    'console-badge': './src/index.js',
    'console-badge.min': './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    library: 'consoleBadge',
    libraryTarget: 'umd',
    globalObject: 'typeof self !== \'undefined\' ? self : this'
  },
  optimization: {
    // Tell webpack to minimize the bundle using the TerserPlugin.
    minimize: true,
    minimizer: [
      new TerserPlugin({
        include: /\.min\.js$/
      })
    ]
  },
  plugins: [
    new webpack.BannerPlugin({
      banner: [
        '/*!',
        ' * ' + pkg.name + ' v' + pkg.version,
        ' * (c) 2019-present ' + pkg.author,
        ' * Released under the ' + pkg.license + ' License.',
        ' */'
      ].join('\n'),
      raw: true
    })
  ]
};
