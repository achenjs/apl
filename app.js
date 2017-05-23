const express = require('express')
const session = require('express-session')
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
  cookie: {maxAge: 80000},
  saveUninitialized: true,
  resave: true
}))
if (process.env.NODE_ENV == 'production') {
  app.use(express.static(path.join(__dirname, 'dist')))
} else {
  app.use(express.static(path.join(__dirname, 'public')))
}

router(app)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  if (!req.session) {
    res.redirect('/home')
  }
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

app.use(require('connect-livereload')())

module.exports = app
