const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: './client/src/app/index.js',
  output: {
    filename: 'index_bundle.js',
    path: path.resolve(__dirname, './client/dist')
  },
  devServer: {
    contentBase: './client/dist',
    hot: true
  },
  devtool: 'inline-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Roadtrip Planner',
      template: path.resolve(__dirname, './client/index.html')
    }),
    new webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.(css|scss)$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  }
};
