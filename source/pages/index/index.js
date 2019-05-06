import createMenu from '../../components/menu/menu';//Импортируем дефолтную  функцию из menu.js
import './index.scss';
import 'normalize.css';

var menu = createMenu(['Главная','Блог'],'menu');
document.body.appendChild(menu);

console.log($);
console.log(jQuery);

console.log('in index.js');