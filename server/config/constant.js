const ServerUrl = {
  q: '172.16.46.53',
  w: '172.16.39.163',
  production: 'localhost'
}

var obj = {
  localhostPort: 8888,
  difficulty: '100.0',
  globalUrl: ServerUrl.q,
  globalPort: '8080',
  time_out: 36000
}

if (process.env.NODE_ENV == 'production') {
  obj.globalUrl = ServerUrl.production
}

module.exports = obj
