const path = require ('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATHS = {//Объект с двумя свойствами
	source: path.join(__dirname, 'source'),
	build: path.join(__dirname, 'build')
};

module.exports = {
	entry: PATHS.source + '/index.js',
	devServer: {//Можно легко изменить порт, по которому будет находиться сайт и куча других настроек в пункте dev-server
		contentBase:'./build',//Указываем директорию, откуда будет строиться сайт на локальном сервере(по умолчанию сразу по адрессу localhost:8080 будет выводиться index.html)
		hot: true //Это указание на то что мы используем горячую замену модулей Hot Module Replacement
	},
	output: {
		path: PATHS.build,
		filename: '[name].js'//[name]  - плэйхолдер, в него будут автоматически подставляться имена точек входа
	},
	plugins:[
		new HtmlWebpackPlugin({// создаём страничку html с нужным тайтлом.
			//title: 'Webpack app' вместо этой строки в данный плагин мы передадим сразу разметку pug но сразу же скомпилированную (pug-loader'oм)
			template: PATHS.source + '/index.pug'
		})
	],
	module:{
		rules: [
			{//Тут описываем натройки лоадера
				test: /\.pug$/,
				loader:'pug-loader',//настраиваем pug-loader
				options:{
					pretty: true//сделать код компилируемого файла "красивого" раставляем отступы , переносы и т.д.
				}
			}
		]
	}
}