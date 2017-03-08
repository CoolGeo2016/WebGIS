// require("./style.css")//载入 style.css

import './style.css';
import styles from './root.css';

var rooot = document.getElementById('root');

rooot.innerHTML = '<div class="' + styles.root + '">roooot</div>';

document.getElementById('root').append('It works.')
var hello = require('./module.js');
document.getElementById('root').appendChild(hello())
