var webpack = require('webpack');
var ConcatSource = require('webpack/lib/ConcatSource');
var fs = require('fs');

var versionedBannerPlugin = {
	apply: function(compiler) {
		compiler.plugin('compilation', function(compilation) {
			// Bump version (borrowed from bump-webpack-plugin)
			var json = JSON.parse(fs.readFileSync('./package.json', 'utf8'));
			var versions = json.version.split('.');
			versions[2] = parseInt(versions[2]) + 1;
			json.version = versions.join('.');
			fs.writeFile('./package.json', JSON.stringify(json, null, 2));
			// Build banner
			var template = fs.readFileSync('./src/banner.txt', 'utf8');
			var banner = template.replace('{{version}}', json.version);
			// Prepend to output (borrowed from webpack.BannerPlugin)
			compilation.plugin('optimize-chunk-assets', function(chunks, callback) {
				chunks.forEach(function(chunk) {
					chunk.files.forEach(function(file) {
						compilation.assets[file] = new ConcatSource(banner, '\n', compilation.assets[file]);
					});
				});
				callback();
			});
		});
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