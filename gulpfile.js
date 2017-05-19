const gulp = require('gulp')
const server = require('gulp-express')                          //- express关联
const sass = require('gulp-sass')                               //- scss文件编辑
const autoprefixer = require('gulp-autoprefixer')               //- CSS自动补充前缀
const smushit = require('gulp-smushit')                         //- 图片压缩（只用于jpg、png）
const minifyCss = require('gulp-minify-css')                    //- 压缩CSS为一行；
const rev = require('gulp-rev')                                 //- 对文件名加MD5后缀
const revCollector = require('gulp-rev-collector')             //- 路径替换
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')
const clean = require('gulp-clean')

gulp.task('dev', function() {
  server.run(['./bin/www'])
  gulp.watch(['./public/sass/**/*'], ['styles'])
  gulp.watch(['./views/**/*.{html,jade}'])
  gulp.watch(['./public/images/**/*'])
  gulp.watch(['./app.js', 'routes/**/*', './server/**/*'], [server.run])
})

gulp.task('styles', function() {
  return gulp.src('./public/sass/*.{sass,scss}')
      .pipe(sass())
      .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'opera 12.1', 'ios 6', 'android 4'))
      .pipe(gulp.dest(function() {
        return './public/styles'
      }))
})

gulp.task('images', function() {
  return gulp.src('./public/images/*')
      .pipe(smushit({
        verbose: true
      }))
      .pipe(gulp.dest('./dist/images'))
})

gulp.task('js', function() {
  return gulp.src('./public/javascripts/*')
    .pipe(babel({
      presets: ['env']
    }))
    .pipe(uglify())
    .pipe(rev())
    .pipe(gulp.dest('./dist/javascripts'))
    .pipe(rev.manifest('js.json'))
    .pipe(gulp.dest('./rev'))
})

gulp.task('css', function() {
  return gulp.src('./public/styles/*')
      .pipe(minifyCss())
      .pipe(rev())
      .pipe(gulp.dest(function() {
        return './dist/styles'
      }))
      .pipe(rev.manifest('css.json'))
      .pipe(gulp.dest('./rev'))
})

gulp.task('lib', function() {
  return gulp.src('./public/lib/**/*')
    .pipe(gulp.dest('./dist/lib'))
})

gulp.task('rev', function() {
  gulp.src(['./rev/*.json', './views/**/*'])
    .pipe(revCollector())
    .pipe(gulp.dest('./dist/views'))
})

gulp.task('clean', function() {
  return gulp.src(['./dist/javascripts', './dist/views', './dist/styles', './dist/lib'])
    .pipe(clean())
})

// gulp.task('build', ['images', 'css', 'js', 'rev'])
gulp.task('build', ['clean'], function() {
  gulp.start('css', 'js', 'lib', 'rev')
})
