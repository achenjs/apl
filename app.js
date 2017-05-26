const express = require('express')
const session = require('express-session')
const log4js = require('log4js')
const path = require('path')
const favicon = require('serve-favicon')
const logger = require('morgan')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const helmet = require('helmet')
const router = require('./server/router')
const app = module.exports.app = exports.app = express()

//  开启生产保护
app.use(helmet())
// view engine setup
if (process.env.NODE_ENV == 'production') {
  app.set('views', path.join(__dirname, 'dist/views'))
} else {
  app.set('views', path.join(__dirname, 'views'))
}
app.set('view engine', 'jade')

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'dist', 'favicon.ico')))
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(session({
  secret: '12345',
  cookie: {maxAge: 1000*60*60},
  saveUninitialized: true,
  resave: true,
  rolling: true
}))
if (process.env.NODE_ENV == 'production') {
  app.use(express.static(path.join(__dirname, 'dist')))
} else {
  app.use(express.static(path.join(__dirname, 'public')))
}

router(app)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found')
  err.status = 404
  next(err)
})

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

//  日志
log4js.configure({
    appenders: [
        {
            type: 'console',
            category: "console"

        }, //控制台输出
        {
            type: "dateFile",
            filename: 'logs/log',
            pattern: "_yyyyMMdd.log",
            // absolute: false,
            alwaysIncludePattern: true,
            // maxLogSize: 20480,
            // backups: 3,
            category: 'logInfo'

        }//日期文件格式
    ],
    replaceConsole: true,   //替换console.log
    levels:{
        logInfo: 'info', //info及以上级别输出到日志文件
        console: 'debug' //debug及以上级别输出到控制台
    }
});

app.use(require('connect-livereload')())

module.exports = app
