const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');   // 使用 NodeJS 自带的文件路径插件
module.exports = {
  entry :path.resolve(__dirname,'./app/main.js'), //入口文件
  output:{
    path:path.resolve(__dirname,'./public'), //打包后存放的地方
    filename:'bundle.js' //打包后输出的文件名
  },
  devServer:{
    contentBase:"./public", //本地服务器所加载的页面所在的目录
    historyApiFallback:true, //不跳转
    inline:true, //实时刷新
    // host: HOST,
    port: 8899,  
    open: true,
  },
  module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    }, {
                        loader: "css-loader",
                    }, {
                        loader: "postcss-loader"
                    }                ]
            }
        ]
  },
  plugins:[
      new webpack.BannerPlugin('webpack'),
      new HtmlWebpackPlugin({
        template:path.resolve(__dirname,'./app/index.tmpl.html')
      })
  ]
}