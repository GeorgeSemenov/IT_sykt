import createMenu from './menu';//Импортируем дефолтную  функцию из menu.js

var menu = createMenu(['Главная','Обомон','Портфелио'],'menu');
document.body.appendChild(menu);