const express = require('express')
const http = require('../config/http')
const commonServer = require('../config/commonServer')
const constant = require('../config/constant')
const api = require('../config/api')

const header = require('../template/header')

module.exports = {
  //  中英文切换
  lang(req, res, next) {
    var lang = req.query.lang
    req.session.lang = lang
    res.send({
      lang: lang
    })
  },
  index(req, res) {
    res.redirect('/home')
  },
  //  首页
  home(req, res) {
    var list = header.tem(req.session.lang)
    if (!req.session.lang) {
      req.session.lang = 'cn'
    }
    res.render('index', {
      title: '洪泰智造工场-人工智能项目首选投资机构',
      styleLink: 'home',
      txt: list,
      lang: req.session.lang
    })
  },
  //  生态服务
  ecology(req, res) {
    var list = header.tem(req.session.lang)
    if (!req.session.lang) {
      req.session.lang = 'cn'
    }
    res.render('index', {
      title: '洪泰智造工场-人工智能项目首选投资机构',
      styleLink: 'ecology',
      txt: list,
      lang: req.session.lang
    })
  },
  // 智造服务
  intellect(req, res) {
    var list = header.tem(req.session.lang)
    if (!req.session.lang) {
      req.session.lang = 'cn'
    }
    res.render('index', {
      title: '洪泰智造工场-人工智能项目首选投资机构',
      styleLink: 'intellect',
      txt: list,
      lang: req.session.lang
    })
  },
  // 硬创学院
  college(req, res) {
    var list = header.tem(req.session.lang)
    if (!req.session.lang) {
      req.session.lang = 'cn'
    }
    res.render('index', {
      title: '洪泰智造工场-人工智能项目首选投资机构',
      styleLink: 'college',
      txt: list,
      lang: req.session.lang
    })
  },
  //  硬创学院详情页
  collegeDetail(req, res) {
    var id = req.query.id
    var list = header.tem(req.session.lang)
    if (!req.session.lang) {
      req.session.lang = 'cn'
    }
    res.render('index', {
      title: '洪泰智造工场-人工智能项目首选投资机构',
      styleLink: 'collegeDetail',
      id: id,
      txt: list,
      lang: req.session.lang
    })
  },
  //  最新动态
  newslatest(req, res) {
    var id = req.query.id
    var list = header.tem(req.session.lang)
    if (!req.session.lang) {
      req.session.lang = 'cn'
    }
    res.render('index', {
      title: '洪泰智造工场-人工智能项目首选投资机构',
      styleLink: 'newslatest',
      id: id,
      txt: list,
      lang: req.session.lang
    })
  },
  order(req, res) {
    var list = header.tem(req.session.lang)
    if (!req.session.lang) {
      req.session.lang = 'cn'
    }
    res.render('index', {
      title: '洪泰智造工场-人工智能项目首选投资机构',
      styleLink: 'order',
      txt: list,
      lang: req.session.lang
    })
  },
  enterprise(req, res) {
    var list = header.tem(req.session.lang)
    if (!req.session.lang) {
      req.session.lang = 'cn'
    }
    res.render('index', {
      title: '洪泰智造工场-人工智能项目首选投资机构',
      styleLink: 'enterprise',
      txt: list,
      lang: req.session.lang
    })
  },
  //  入孵企业详情页
  enterpriseDetail(req, res) {
    var id = req.query.id
    var list = header.tem(req.session.lang)
    if (!req.session.lang) {
      req.session.lang = 'cn'
    }
    res.render('index', {
      title: '洪泰智造工场-人工智能项目首选投资机构',
      styleLink: 'enterpriseDetail',
      id: id,
      txt: list,
      lang: req.session.lang
    })
  },
  //  动态详情
  latestDetail(req, res) {
    var id = req.query.id
    var list = header.tem(req.session.lang)
    if (!req.session.lang) {
      req.session.lang = 'cn'
    }
    res.render('index', {
      title: '洪泰智造工场-人工智能项目首选投资机构',
      styleLink: 'latestDetail',
      id: id,
      txt: list,
      lang: req.session.lang
    })
  },
  //  首页轮播
  carousel(req, res) {
    var options = http.getUrl(constant.globalUrl, constant.globalPort, api.carousel, "get")
    commonServer.request(options, function(data){
      if (data === '') {
        res.send({
          result: '请求超时!'
        })
      } else {
        res.send({
          result: data
        })
      }
    })
  },
  //  最新动态
  article(req, res) {
    var page = req.query.page
    var pagesize = req.query.pagesize
    var lang = 1
    if (!req.session.lang) {
      req.session.lang = 'cn'
    }
    switch (req.session.lang) {
      case 'cn':
        lang = 1
        break;
      case 'en':
        lang = 2
        break;
    }
    var options = http.getUrl(constant.globalUrl, constant.globalPort, api.article + '?page='+page+'&pagesize='+pagesize+'&lang='+lang, "get")
    commonServer.request(options, function(data){
      if (data === '') {
        res.send({
          result: '请求超时!'
        })
      } else {
        res.send({
          result: data
        })
      }
    })
  },
  //  硬创学院列表
  collegeList(req, res) {
    var page = req.query.page
    var lang = 1
    if (!req.session.lang) {
      req.session.lang = 'cn'
    }
    switch (req.session.lang) {
      case 'cn':
        lang = 1
        break;
      case 'en':
        lang = 2
        break;
    }
    var options = http.getUrl(constant.globalUrl, constant.globalPort, api.collegeList + '?page=' + page + '&lang=' + lang, "get")
    commonServer.request(options, function(data){
      if (data === '') {
        res.send({
          result: '请求超时!'
        })
      } else {
        res.send({
          result: data
        })
      }
    })
  },
  //硬创学院详情
  collegeId(req, res) {
    var id = req.query.id
    var options = http.getUrl(constant.globalUrl, constant.globalPort, api.collegeId + id, "get")
    commonServer.request(options, function(data){
      if (data === '') {
        res.send({
          result: '请求超时!'
        })
      } else {
        res.send({
          result: data
        })
      }
    })
  },
  //  入孵企业列表
  company(req, res) {
    var page = req.query.page
    var lang = 1
    if (!req.session.lang) {
      req.session.lang = 'cn'
    }
    switch (req.session.lang) {
      case 'cn':
        lang = 1
        break;
      case 'en':
        lang = 2
        break;
    }
    var options = http.getUrl(constant.globalUrl, constant.globalPort, api.company + '?page=' + page + '&lang=' + lang, "get")
    commonServer.request(options, function(data){
      if (data === '') {
        res.send({
          result: '请求超时!'
        })
      } else {
        res.send({
          result: data
        })
      }
    })
  },
  //  入孵企业详情
  companyId(req, res) {
    var id = req.query.id
    var options = http.getUrl(constant.globalUrl, constant.globalPort, api.company + '/' + id, "get")
    commonServer.request(options, function(data){
      if (data === '') {
        res.send({
          result: '请求超时!'
        })
      } else {
        res.send({
          result: data
        })
      }
    })
  },
  //  动态详情
  articleId(req, res) {
    var id = req.query.id
    var options = http.getUrl(constant.globalUrl, constant.globalPort, api.articleId + '/' + id, "get")
    commonServer.request(options, function(data){
      if (data === '') {
        res.send({
          result: '请求超时!'
        })
      } else {
        res.send({
          result: data
        })
      }
    })
  },
  //  热门推荐
  recommend(req, res) {
    var options = http.getUrl(constant.globalUrl, constant.globalPort, api.recommend, "get")
    commonServer.request(options, function(data){
      if (data === '') {
        res.send({
          result: '请求超时!'
        })
      } else {
        res.send({
          result: data
        })
      }
    })
  },
  //  短信验证码
  captcha(req, res) {
    var obj = req.body
    var options = http.getUrl(constant.globalUrl, constant.globalPort, api.captcha, "post")
    commonServer.request(options, function(data){
      if (data === '') {
        res.send({
          result: '请求超时!'
        })
      } else {
        res.send({
          result: data
        })
      }
    }, obj)
  },
  //  新建订单
  addorder(req, res) {
    var obj = req.body
    var options = http.getUrl(constant.globalUrl, constant.globalPort, api.addorder, "post")
    commonServer.request(options, function(data){
      if (data === '') {
        res.send({
          result: '请求超时!'
        })
      } else {
        res.send({
          result: data
        })
      }
    }, obj)
  }
}
