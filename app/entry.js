// require("./style.css")//载入 style.css

import './style.css';
import styles from './root.css';

var rooot = document.getElementById('mapdemo');

rooot.innerHTML = '<!--标题栏-->'
           +'<div class="'+styles.apptitle+'">'
                +'<div class="'+styles.titleinfo+'">数字征地拆迁项目展示</div>'
                +'<!--底图切换-->'
                +'<div class="'+styles.maptype+'">'
                    +'<div class="'+styles.mtoption+'">倾斜三维</div>'
                    +'<div class="'+styles.mtoption+'">正射影像</div>'
                    +'<div class="'+styles.mtoption+'">分界线</div>'
                +'</div>'
            +'</div>'
            +'<!--地图和专题目录-->'
            +'<div class="'+styles.appcontent+'">'
                +'<div id="appmap"></div>'
                +'<div class="'+styles.layerlist+'">'
                    +'<ul>'
                        +'<li>土地利用规划</li>'
                        +'<li>土地利用现状</li>'
                        +'<li>地价</li>'
                        +'<li>权属</li>'
                        +'<li>控规</li>'    
                    +'</ul>'
                +'</div>'
            +'</div>';

var hello = require('./module.js');
