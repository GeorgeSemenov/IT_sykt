const path = require ('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATHS = {//Объект с двумя свойствами
	source: path.join(__dirname, 'source'),
	build: path.join(__dirname, 'build')
};

module.exports = {
	entry: PATHS.source + '/index.js',
	output: {
		path: PATHS.build,
		filename: '[name].js'//[name]  - плэйхолдер, в него будут автоматически подставляться имена точек входа
	},
	plugins:[
		new HtmlWebpackPlugin({// создаём страничку html с нужным тайтлом.
			title: 'Webpack app'
		})
	]
}