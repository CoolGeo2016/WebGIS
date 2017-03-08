var webpack = require('webpack')

module.exports = {
    devtool: 'eval-source-map',//配置生成Source Maps，选择合适的选项
    entry:__dirname + '/app/entry.js',
    output:{
        path: __dirname + "/public",
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
        new webpack.BannerPlugin('This file is created by webp')
    ],
    devServer: {
        port:8080,
        contentBase: "./public",//本地服务器所加载的页面所在的目录
        historyApiFallback: true,//不跳转
        inline: true//实时刷新
    } 
}