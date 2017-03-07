# WebGIS
Simple webgis application

# 环境
nodejs/Webpack

npm init

$ npm install webpack --save-dev

$ npm install css-loader style-loader

$ webpack entry.js bundle.js --module-bind 'css=style-loader!css-loader'

$ npm install webpack-dev-server -g

$ webpack-dev-server --progress --colors

我们还可以通过参数 --display-error-details 来打印错误详情