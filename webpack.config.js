var webpack = require('webpack');
var path = require('path');

var src = path.join(__dirname, 'src');

module.exports = {
	context: src,
	
	entry: {
		index: './index.js'
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
				loader: "style-loader!css-loader"
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