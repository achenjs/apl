const express = require('express')
const http = require('../config/http')
const commonServer = require('../config/commonServer')
const constant = require('../config/constant')
const api = require('../config/api')

const header = require('../template/header')

var lang = ''
var list = []
switch (lang) {
  case 'cn':
    list = header.cn
    break;
  case 'en':
    list = header.en
    break;
  default:
    list = header.cn
    break;
}

module.exports = {
  //  中英文切换
  lang(req, res, next) {
    lang = req.query.lang
    switch (lang) {
      case 'cn':
        list = header.cn
        break;
      case 'en':
        list = header.en
        break;
      default:
        list = header.cn
        break;
    }
    res.send({
      'lang': lang
    })
  },
  index(req, res) {
    res.redirect('/home')
  },
  //  首页
  home(req, res) {
    res.render('index', {
      title: '洪泰智造工场-人工智能项目首选投资机构',
      styleLink: 'home',
      txt: list
    })
  },
  //  生态服务
  ecology(req, res) {
    res.render('index', {
      title: '洪泰智造工场-人工智能项目首选投资机构',
      styleLink: 'ecology',
      txt: list
    })
  },
  // 智造服务
  intellect(req, res) {
    res.render('index', {
      title: '洪泰智造工场-人工智能项目首选投资机构',
      styleLink: 'intellect',
      txt: list
    })
  },
  // 硬创学院
  college(req, res) {
    res.render('index', {
      title: '洪泰智造工场-人工智能项目首选投资机构',
      styleLink: 'college',
      txt: list
    })
  },
  //  硬创学院详情页
  collegeDetail(req, res) {
    var id = req.query.id
    res.render('index', {
      title: '洪泰智造工场-人工智能项目首选投资机构',
      styleLink: 'collegeDetail',
      id: id,
      txt: list
    })
  },
  //  最新动态
  newslatest(req, res) {
    var id = req.query.id
    res.render('index', {
      title: '洪泰智造工场-人工智能项目首选投资机构',
      styleLink: 'newslatest',
      id: id,
      txt: list
    })
  },
  order(req, res) {
    res.render('index', {
      title: '洪泰智造工场-人工智能项目首选投资机构',
      styleLink: 'order',
      txt: list
    })
  },
  enterprise(req, res) {
    res.render('index', {
      title: '洪泰智造工场-人工智能项目首选投资机构',
      styleLink: 'enterprise',
      txt: list
    })
  },
  //  入孵企业详情页
  enterpriseDetail(req, res) {
    var id = req.query.id
    res.render('index', {
      title: '洪泰智造工场-人工智能项目首选投资机构',
      styleLink: 'enterpriseDetail',
      id: id,
      txt: list
    })
  },
  //
  latestDetail(req, res) {
    var id = req.query.id
    res.render('index', {
      title: '洪泰智造工场-人工智能项目首选投资机构',
      styleLink: 'latestDetail',
      id: id,
      txt: list
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
    var options = http.getUrl(constant.globalUrl, constant.globalPort, api.article + '?page='+page, "get")
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
    var options = http.getUrl(constant.globalUrl, constant.globalPort, api.collegeList + '?page=' + page, "get")
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
    var options = http.getUrl(constant.globalUrl, constant.globalPort, api.company + '?page=' + page, "get")
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
