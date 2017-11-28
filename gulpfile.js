var gulp = require('gulp')
var babel = require('gulp-babel')
var nodemon = require('gulp-nodemon')
var notify = require('gulp-notify')
var clean = require('gulp-clean')

gulp.task('es6', () => {
  return gulp.src(['server.js', 'routes/*', 'lib/*', 'middleware/*'], {base: '.'})
        .pipe(babel())
        .pipe(gulp.dest('dist'))
})

gulp.task('json', () => {
  return gulp.src(['config/*'], {base: '.'})
        .pipe(gulp.dest('dist'))
})

gulp.task('clean', function () {
  return gulp.src('dist/', {read: false})
        .pipe(clean())
})

gulp.task('server', function () {
  nodemon({
    script: 'dist/server.js',
    watch: ['server.js', 'routes/*', 'lib/*', 'middleware/*', 'config/*'],
    ext: 'js json',
    tasks: ['build']
  }).on('restart', function () {
    gulp.src('server.js').pipe(notify('Server successfully restarted'))
  })
})

gulp.task('default', ['build', 'server'])
gulp.task('build', ['es6', 'json'])
gulp.task('heroku', ['clean', 'build'])
