const express = require('express')
const router = express.Router()
const http = require('../server/http')
const commonServer = require('../server/commonServer')
const constant = require('../server/constant')

/* GET home page. */
router.get('/', (req, res, next) => {
  res.redirect('/home')
})

router.get('/home', (req, res, next) => {
  res.render('index', {
    title: '洪泰智造工场',
    styleLink: 'home'
  })
})

router.get('/ecology', (req, res, next) => {
  res.render('index', {
    title: '洪泰智造工场',
    styleLink: 'ecology'
  })
})

router.get('/carousel', (req, res) => {
  var options = http.getUrl(constant.globalUrl, constant.globalPort, "/v1/carousel/active", "get")
  commonServer.request(options, function(data){
    res.send({
      result: data
    })
  })
})

router.get('/article', (req, res) => {
  var options = http.getUrl(constant.globalUrl, constant.globalPort, "/v1/article/active", "get")
  commonServer.request(options, function(data){
    res.send({
      result: data
    })
  })
})

module.exports = router
