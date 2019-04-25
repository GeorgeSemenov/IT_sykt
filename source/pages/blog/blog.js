import createMenu from '../../components/menu/menu';//Импортируем дефолтную  функцию из menu.js

var menu = createMenu(['Главная','Блог'],'menu');
document.body.appendChild(menu);

console.log('in blog.js');