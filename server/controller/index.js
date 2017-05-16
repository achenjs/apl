const express = require('express')
const http = require('../config/http')
const commonServer = require('../config/commonServer')
const constant = require('../config/constant')
const api = require('../config/api')

module.exports = {
  index(req, res) {
    res.redirect('/home')
  },

  home(req, res) {
    res.render('index', {
      title: '洪泰智造工场',
      styleLink: 'home'
    })
  },

  ecology(req, res) {
    res.render('index', {
      title: '洪泰智造工场',
      styleLink: 'ecology'
    })
  },

  intellect(req, res) {
    res.render('index', {
      title: '洪泰智造工场',
      styleLink: 'intellect'
    })
  },

  college(req, res) {
    res.render('index', {
      title: '洪泰智造工场',
      styleLink: 'college'
    })
  },

  collegeDetail(req, res) {
    res.render('index', {
      title: '洪泰智造工场',
      styleLink: 'collegeDetail'
    })
  },

  newslatest(req, res) {
    var id = req.query.id
    res.render('index', {
      title: '洪泰智造工场',
      styleLink: 'newslatest',
      id: id
    })
  },

  order(req, res) {
    res.render('index', {
      title: '洪泰智造工场',
      styleLink: 'order'
    })
  },

  enterprise(req, res) {
    res.render('index', {
      title: '洪泰智造工场',
      styleLink: 'enterprise'
    })
  },

  //  入孵企业详情页
  enterpriseDetail(req, res) {
    var id = req.query.id
    res.render('index', {
      title: '洪泰智造工场',
      styleLink: 'enterpriseDetail',
      id: id
    })
  },

  latestDetail(req, res) {
    var id = req.query.id
    res.render('index', {
      title: '洪泰智造工场',
      styleLink: 'latestDetail',
      id: id
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
    var options = http.getUrl(constant.globalUrl, constant.globalPort, api.article, "get")
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
    var options = http.getUrl(constant.globalUrl, constant.globalPort, api.collegeList, "get")
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
    var options = http.getUrl(constant.globalUrl, constant.globalPort, api.company, "get")
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
  }

}
