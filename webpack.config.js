const path = require ('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');//Этот модуль нужен чтобы в webpack.config.js склеивать различные модули, вместо object.assign - теперь кажыдй модуль можно записать в другой файл (как pug.js) и подключить к webpack.config.js
const pug = require ('./webpack/pug');//Подключаем модуль с pug для webpack.config.js ,кстати можно не указывать .js webpack и так всё понимает
const devserver = require('./webpack/devserver');
const sass = require('./webpack/sass');//Напомню, что сами стили(допустим blog.scss) нужно подключать через соответствеющие js файлы (blog.js)
const css = require('./webpack/css');//Модуль для обработки файлов .css напомню что такие файлы нужно подключать особо в каждый соответствующий js файлы (к примеру для index.html нужно подключать в index.js)
const extractCss = require('./webpack/css.extract');//Модуль для извлечения стилей в отдельный(ые) файл(ы) и дальнейшего подключения к проекту

const PATHS = {//Объект с двумя свойствами
	source: path.join(__dirname, 'source'),
	build: path.join(__dirname, 'build')
};

const common= merge([//модуль merge -  заменяет метод assign т.к. он более наглядный, мы просто передаём массив объектов, которые нужно склеить.
	{//Первый объект
		entry: {
			'index': PATHS.source + '/pages/index/index.js',//Обрати внимание для кадой страницы мы создаём свою точку входа которая начинается с .js файла
			'blog': PATHS.source + '/pages/blog/blog.js'
		},
		output: {
			path: PATHS.build,
			filename: '[name].js'//[name]  - плэйхолдер, в него будут автоматически подставляться имена точек входа
		},
		plugins:[
			new HtmlWebpackPlugin({// создаём страничку html с нужным тайтлом.
				filename:'index.html',//Задаём имя генерируемому файлу
				chunks: ['index'],
				template: PATHS.source + '/pages/index/index.pug'//в данный плагин мы передадим разметку pug но сразу же скомпилированную (pug-loader'oм)
			}),
			new HtmlWebpackPlugin({// создаём страничку html с нужным тайтлом.
				filename:'blog.html',//Задаём имя генерируемому файлу
				chunks: ['blog'],
				template: PATHS.source + '/pages/blog/blog.pug'//в данный плагин мы передадим разметку pug но сразу же скомпилированную (pug-loader'oм)
			})
		],
	},
	pug()//Второй объект, pug(т.к. это объект, то для этого мы используем merge, который у нас инициализирван файлом (см выше в самом начале), в котором есть описание этого плагина
]);

const developmentConfig ={
	devServer: {//Можно легко изменить порт, по которому будет находиться сайт и куча других настроек в пункте dev-server
		contentBase:'./build',//Указываем директорию, откуда будет строиться сайт на локальном сервере(по умолчанию сразу по адрессу localhost:8080 будет выводиться index.html), если в этой папке будет, например, blog.html , то эта страница будет доступна по https://localhost/blog.html
		hot: true, //Это указание на то что мы используем горячую замену модулей Hot Module Replacement
		stats: 'errors-only',//Теперь в косноли будут вылезать только ошибки
		port: 9000,//теперича сайт будет открываться на 9000 порту
		watchContentBase: true
	}
};

module.exports = function(env){
	if (env === 'production'){// env - параметр который передаётся в npm scripts - загляни в package.jsone
		return merge([
			common,
			//sass(),
			//css()
			extractCss()//Отделяем файлы стилей в продакшене, хотя ничто не мешает это делать в common(т.е. всегда), напоминаю этот модуль заменяет собой style-loader, т.е. теперь стили не будут писаться инлайно в html файле, а будут вынесены в отдельный файлик.
		])
	}
	if (env === 'development'){
		//return Object.assign(//Метод assign нужен чтобы склеивать объекты. Он принимает три аргумента
			//{},//Первый аргумент assign должен быть пустым объектом, как я понимаю туда будут записываться два других объекта.
		return merge([//модуль merge -  заменяет метод assign см выше в комменатриях , т.к. он более наглядный, мы просто передаём массив объектов, которые нужно склеить.
			common,//Второй и третий аргументы - объекты которые должны быть склеены
			devserver(),//Подключаем модуль devserver, который у нас инициализирван файлом (см выше в самом начале), в котором есть описание этого плагина
			sass(),
			css()
		])
	}
};