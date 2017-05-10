const gulp = require('gulp')
const server = require('gulp-express')
const sass = require('gulp-sass')
const autoprefixer = require('gulp-autoprefixer')

gulp.task('server', () => {
  server.run(['bin/www'])
  gulp.watch(['public/sass/**/*'], ['styles'])
  gulp.watch(['views/**/*.{html,jade}'], server.notify)
  gulp.watch(['public/images/**/*'], server.notify)
  gulp.watch(['app.js', 'routes/**/*', 'server/**/*'], [server.run])
})

gulp.task('styles', () => {
  return gulp.src('./public/sass/*.{sass,scss}')
      .pipe(sass())
      .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'opera 12.1', 'ios 6', 'android 4'))
      .pipe(gulp.dest(function() {
        return './public/styles'
      }))
})

gulp.task('default', ['server'])
