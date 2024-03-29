module.exports = function(paths){//paths - необходим, т.к. css-loader добавляет css модули в град зависимостей и чтобы с ними нужно дальше работать нужно запомнить новые пути, они и будут записанны в paths, который в последствии передастся в include
	return {
		module: {
			rules: [//тут указываем массив настроек для лоадеров
				{//Тут описываем настройки лоадера
					test: /\.css$/,
					include: paths, //ключ include принимает значение - массив путей или файлов где импортированные файлы будут трансформированны лоадером
					use: [//тут указываем сами лоадеры, к которым относятся эти настройки
						//Напомню - к файлам, которые подходят под regexp писаным в test: будут применены лоадеры начиная назшим и заканчивая высшим , или с права на лево.
						'style-loader',//добавляет css стили в DOM дерево при помощи тега style
						'css-loader',//добавляет css модули в град зависисмостей
					]
				}
			]
		}
	};
};