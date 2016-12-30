var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var extractCSS = new ExtractTextPlugin('bundle.css');
var path = require('path');

var src = path.join(__dirname, 'src');

module.exports = {
	context: src,
	
	entry: {
		app: ['reveal.js/css/reveal.css', './index.js']
	},
	output: {
		path: "dist",
		filename: "bundle.js",
		publicPath: "/"
	},
	resolve: {
		modulesDirectories: ['./node_modules']
	},
	module: {
		loaders: [
			{
				test: /\.css$/,
				loaders: extractCSS.extract(["css"])
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
		extractCSS,
		new webpack.optimize.UglifyJsPlugin(),
		new webpack.HotModuleReplacementPlugin()
	],
	devServer: {
		contentBase: src,
		hot: true,
		progress: true,
		colors: true
	}
};