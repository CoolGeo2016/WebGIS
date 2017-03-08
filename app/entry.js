// require("./style.css")//载入 style.css

import './style.css';
import root from './root.css';

var rooot = document.getElementById('root');

rooot.innerHTML = '<div class="' + root.raat + '">roooot</div>';

document.getElementById('root').append('It works.')
var hello = require('./module.js');
document.getElementById('root').appendChild(hello())

