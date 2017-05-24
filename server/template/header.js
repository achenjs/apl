var obj = {
  'cn': [{
    title: "首页",url: '/home'
  },{
    title: "生态服务",url: '/ecology'
  },{
    title: "智造服务",url: '/intellect'
  },{
    title: "硬创学院",url: '/college'
  },{
    title: "最新动态",url: '/newslatest'
  },{
    title: "APL登录",url: 'https://apl.apluslabs.com'
  }],
  'en': [{
    title: "Home",url: '/home'
  },{
    title: "Ecosystem",url: '/ecology'
  },{
    title: "Service",url: '/intellect'
  },{
    title: "Hardware college",url: '/college'
  },{
    title: "News",url: '/newslatest'
  },{
    title: "APL login",url: 'https://apl.apluslabs.com'
  }]
}

exports.tem = function(lang) {
  var list = []
  switch (lang) {
    case 'cn':
      list = obj.cn
      break;
    case 'en':
      list = obj.en
      break;
    default:
      list = obj.cn
      break;
  }
  return list
}
