var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var extractCSS = new ExtractTextPlugin('bundle.css');
var path = require('path');
var src = path.join(__dirname, 'src');

module.exports = {
	context: src,
	entry: {
		app: ['./css/sky.css', './css/theme.css', './css/fonts.css', './app.js']
	},
	output: {
		path: "dist",
		filename: "bundle.js",
		publicPath: "/"
	},
	module: {
		loaders: [
			{
				test: /\.css$/,
				loader: extractCSS.extract("css")
			}
		]
	},
	plugins: [
		extractCSS,
		new webpack.optimize.UglifyJsPlugin({
			comment: false
		}),
		new webpack.HotModuleReplacementPlugin()
	],
	devServer: {
		contentBase: src,
		hot: true,
		inline: true,
		progress: true,
		colors: true
	}
};