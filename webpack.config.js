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
	resolve: {
		modulesDirectories: ['./node_modules']
	},
	module: {
		loaders: [
			{
				test: /\.css$/,
				loader: extractCSS.extract("css")
			},
			{
				test: /\.(png|jpg|gif|woff2?|eot|ttf)$/,
				loader: 'url'
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
		progress: true,
		colors: true
	}
};