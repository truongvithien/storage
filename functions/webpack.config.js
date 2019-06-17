const path = require('path');

const webpack = require('webpack');


var plugins = [
    new webpack.ProvidePlugin({
		$: 'jquery',
		jQuery: 'jquery'
	})
]

var config = {
	entry: './src/js/app.js',
	devtool: 'source-map',
	output: {
		filename: '../../public/assets/app.js',
	},
	module: {
		rules: [{
			test: /\.scss$/,
			use: [{
			    loader: "style-loader", 
			    options: {
			        sourceMap: true
			    }
			}, {
			    loader: "css-loader", 
			    options: {
			        sourceMap: true,
			        url: false
			    }
			}, {
			    loader: "sass-loader", 
			    options: {
			        sourceMap: true
			    }
			},]
		}, {
			test: /\.svg$/,
			loader: 'svg-inline-loader?classPrefix'
		}, {
			test: /\.css$/,
			use: [{
			    loader: "style-loader", 
			    options: {
			        sourceMap: true
			    }
			}, {
			    loader: "css-loader", 
			    options: {
			        sourceMap: true
			    }
			}]
		}, {
			test: /\.(png|jpg|jpeg|gif|ico)$/,
			use: [
			    'file-loader'
			]
		} ] 
	},
	plugins: plugins,
}
module.exports = config;

