module.exports = function(){
	return {
		module:{
			rules: [//тут указываем массив настроек для лоадеров
				{//Тут описываем настройки лоадера
					test: /\.(jpg|png|svg)$/,
					loader:'file-loader?name=/images/[name].[ext]',//настраиваем file-loader
					options:{
						name: './images/[name].[ext]'//указываем маску как будут называться картинки, они будут сохранять свои изначальные имена [name] и разширения [ext]
					}
				}
			]
		}
	}
}