module.exports = function(){
	return {
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
}