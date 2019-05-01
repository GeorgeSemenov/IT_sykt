import './menu.scss';
import 'normalize.css';

export default function (array, className){// из этого файла возвращается функция, у которой два параметра массив пунктов меню и второй класс, который нужно будет присвоить тегу ul
	var menu = document.createElement("ul");//добавляем элемент ul
	menu.className = className; //Элементу ul присваивается класс
	var listItems = '';
	array.forEach(function(item){ //по массиву списка меню пробигаемся и для каждого пункта(item) мы добавляем разметку <li> значение ячейки массива </li> и запихиваем эту разметку со значениями в listItems
		listItems += '<li>' + item + '</li>';
	});
	menu.innerHTML = listItems;//Добавляем в ul эту саму разметку со значениями
	return menu;
}