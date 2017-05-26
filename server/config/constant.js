const ServerUrl = {
  q: '172.16.46.53',
  w: '172.16.39.163',
  production: 'localhost'
}

var obj = {
  globalUrl: ServerUrl.w,
  globalPort: '8080',
  time_out: 36000         //  请求超时时间单位(ms)
}

//  终端输入NODE_ENV=production  在node可以通过process.env拿到NODE_ENV的值

if (process.env.NODE_ENV == 'production') {
  obj.globalUrl = ServerUrl.production
}

module.exports = obj
