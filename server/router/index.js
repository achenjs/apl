const Index = require('../controller')

module.exports = function (app) {
  //  首页
  app.get('/', Index.index)
  app.get('/home', Index.home)
  app.get('/carousel', Index.carousel)
  app.get('/article', Index.article)
  //  入孵企业
  app.get('/home/enterprise', Index.enterprise)
  app.get('/company', Index.company)
  app.get('/home/enterpriseDetail', Index.enterpriseDetail)
  app.get('/companyId', Index.companyId)
  //  生态服务
  app.get('/ecology', Index.ecology)
  // 智造服务
  app.get('/intellect', Index.intellect)
  app.get('/intellect/order', Index.order)
  //  硬创学院
  app.get('/college', Index.college)
  app.get('/collegeDetail', Index.collegeDetail)
  app.get('/collegeList', Index.collegeList)
  //  最新动态
  app.get('/newslatest', Index.newslatest)
  app.get('/newslatest/detail', Index.latestDetail)
  app.get('/articleId', Index.articleId)
  app.get('/recommend', Index.recommend)
}
