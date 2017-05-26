# 官网文档

# 前端项目结构
1. bin/www 项目入口
2. dist 生产环境静态资源目录，终端输入gulp build后生成
3. public 开发环境静态资源目录
- public/images 开发环境图片资源目录
- public/javascripts  开发环境js
- public/lib  通过bower安装的前端依赖库
- public/sass 开发环境scss文件目录
- public/styles 开发环境scss编译后css文件目录
4. views 模板（页面）目录

# node server node服务端代码
1. server/config 服务端配置文件目录
- server/config/api.js   转发python（后端）接口配置文件
- server/config/commonServer.js http、request库封装请求python（后端）请求，拿到返回数据通过callback(data) 返回node端
- server/config/constant.js 请求后端的ip、端口
- server/config/http.js 封装http请求函数
2. server/controller  node请求函数目录
3. router 前端请求node的api目录
4. template 前端header.jade模板文本文件
