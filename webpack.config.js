var webpack = require('webpack');
var fs = require('fs');

var versionedBannerPlugin = {
	apply: function(compiler) {
		// Bump version (borrowed from bump-webpack-plugin)
		var json = require('./package.json');
		var versions = json.version.split('.');
		versions[2] = parseInt(versions[2]) + 1;
		json.version = versions.join('.');
		fs.writeFile('./package.json', JSON.stringify(json, null, 2));
		// Build banner
		var template = fs.readFileSync('./src/banner.txt', 'utf8');
		var banner = template.replace('{{version}}', json.version);
		// Pass to default banner plugin
		var bannerPlugin = new webpack.BannerPlugin(banner, { raw: true });
		bannerPlugin.apply(compiler);
	}
};

module.exports = {
	entry: './src/main.js',
	output: {
		path: __dirname,
		filename: 'freshscript.user.js'
	},
	externals: {
		jquery: 'jQuery'
	},
	module: {
		loaders: [
			{
				test: /\.less$/,
				loader: 'raw!less'
			}
		]
	},
	plugins: [
		new webpack.optimize.UglifyJsPlugin(),
		versionedBannerPlugin
	]
};