var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'eval-source-map',//配置生成Source Maps，选择合适的选项
    entry:__dirname + '/app/entry.js',
    output:{
        path: __dirname + "/build",
        filename:'bundle.js'
    },
    module:{
        loaders:[
            {test:/\.css$/,loader:'style-loader!css-loader?modules'},
            {test:/\.json$/,loader: 'json-loader'},
            {
                test: /\.js$/,
                exclude:/node_modules/,
                loader:'babel-loader'
            }
        ]
    },
    plugins:[
        new webpack.BannerPlugin('This file is created by webp'),
        new HtmlWebpackPlugin({
                template: __dirname + "/app/index.tpl.html"//new 一个这个插件的实例，并传入相关的参数
            }),        
        new webpack.HotModuleReplacementPlugin()//热加载插件
    ],
    devServer: {
        port:8080,
        contentBase: "./build",//本地服务器所加载的页面所在的目录
        historyApiFallback: true,//不跳转
        inline: true//实时刷新
    } 
}