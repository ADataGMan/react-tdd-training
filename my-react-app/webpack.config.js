const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  mode: 'development',
  entry: './src/scripts/app.js',
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  // node: {
  //   __dirname: true,
  //   __filename: true
  // },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'scripts/app.js'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HTMLWebpackPlugin({
      filename: 'index.html',
      title: 'Welcome to my page',
      mainDiv: 'welcome-message',
      template: 'src/index.html'
    })
  ],
  watch: false,
  watchOptions: {
  }
};