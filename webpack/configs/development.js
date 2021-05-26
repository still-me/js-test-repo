const HtmlWebpackPlugin = require('html-webpack-plugin');
const paths = require('../utils/paths');

module.exports = env => ({
  devtool: 'cheap-eval-source-map',
  output: {
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      chunks: ['main']
    }),
    new HtmlWebpackPlugin({
      template: './pockemon.html',
      filename: 'pockemon.html',
      chunks: ['pockemon']
    }),
    new HtmlWebpackPlugin({
      template: './promises-race.html',
      filename: 'promises-race.html',
      chunks: ['promises'],
    }),
    new HtmlWebpackPlugin({
      template: './form-2-fields.html',
      filename: 'form-2-fields.html',
      chunks: ['form2Fields'],
    }),
    new HtmlWebpackPlugin({
      template: './news.html',
      filename: 'news.html',
      chunks: ['news'],
    }),
    new HtmlWebpackPlugin({
      template: './movies.html',
      filename: 'movies.html',
      chunks: ['movies'],
    }),
  ],
  devServer: {
    contentBase: paths.BUILD_DIR,
    publicPath: '',
    historyApiFallback: true,
    compress: true,
    port: 4040,
    noInfo: true,
    quiet: true,
    clientLogLevel: 'warning',
    stats: 'errors-only',
    open: true,
  },
});
