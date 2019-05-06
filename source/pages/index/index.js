import createMenu from '../../components/menu/menu';//Импортируем дефолтную  функцию из menu.js
import './index.scss';
import 'normalize.css';
import 'jquery';

var menu = createMenu(['Главная','Блог'],'menu');
document.body.appendChild(menu);

console.log('in index.js');