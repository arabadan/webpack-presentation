"use strict";

var webpack = require('webpack');
var path = require('path');
var CleanWebpackPlugin = require('clean-webpack-plugin');

var ROOT = path.resolve(__dirname);

var APP = __dirname + '/src';

var config = {
context: APP,
entry: {
  app: './index.js'
},
output: {
  path: "dist/",
  publicPath: "/",
  filename: "bundle.js"
},
resolve: {
  modulesDirectories: ['./node_modules']
},
module: {
  loaders: [
	{
	  test: /\.css$/,
	  loader: "style!css"
	},
	{
	  test: /\.eot(\?\S*)?$/,
	  loader: 'url-loader?limit=100000&mimetype=application/vnd.ms-fontobject'
	},
	{
	  test: /\.woff2(\?\S*)?$/,
	  loader: 'url-loader?limit=100000&mimetype=application/font-woff2'
	},
	{
	  test: /\.woff(\?\S*)?$/,
	  loader: 'url-loader?limit=100000&mimetype=application/font-woff'
	},
	{
	  test: /\.ttf(\?\S*)?$/,
	  loader: 'url-loader?limit=100000&mimetype=application/font-ttf'
	},
	{
	  test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
	  loader: "file-loader"
	},
	{
	  test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
	  loader: "url-loader?limit=10000&mimetype=image/svg+xml"
	},
	{
	  test: /\.html$/,
	  loader: 'html-loader'
	},
	{
	  test: /\.jpg$/,
	  loader: "file-loader"
	},
	{
	  test: /\.png$/,
	  loader: "url-loader?mimetype=image/png"
	},
	{
	  test: /index\.html/,
	  loader: "file-loader?name=[name].[ext]"
	}
  ]
},
plugins: [
  new CleanWebpackPlugin(['dist']),
  new webpack.optimize.OccurrenceOrderPlugin(),
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin()
],
devServer: {
  contentBase: APP
}
};

module.exports = config;