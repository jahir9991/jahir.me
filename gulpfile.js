var gulp = require('gulp'), notify = require("gulp-notify"), gutil = require('gulp-util');

// Sass/CSS stuff
var sass = require('gulp-sass'), prefix = require('gulp-autoprefixer'),
  cleanCss = require('gulp-clean-css'),
  rename = require('gulp-rename');

// JavaScript
var uglify = require('gulp-uglify');

// Images
var svgmin = require('gulp-svgmin'), imagemin = require('gulp-imagemin');

// Stats and Things
var size = require('gulp-size');

/*//*/

var path = {
  sass: './dev/style/sass',
  css: './dev/style/css',
  cssMin: './public/css',
  js: './dev/js',
  jsMin: './public/js',
  ngApp: './dev/app',
  ngAppMin: './public/app'

}

gulp.task('watch', function () {
  gulp.watch(path.sass + '/**/*.scss', ['sass']);
  gulp.watch(path.js + '/**/*.js', ['uglify']);
  gulp.watch(path.ngApp + '/**/*.js', ['uglifyApp']);
});

// compile all your Sass
gulp.task('sass', function () {
  gulp.src([path.sass + '/*.scss', path.sass + '/_variables.scss'])
    .pipe(sass({
      includePaths: [path.sass],
      outputStyle: 'expanded'
    }))
    .on("error", notify.onError({
      message: "Error: <%= error.message %>",
      title: "Error sass"
    }))
    .pipe(prefix(
      "last 1 version", "> 1%", "ie 8", "ie 7"
    ))
    .on("error", notify.onError({
         message: "Error: <%= error.message %>",
         title: "Error sass"
       }))
    .pipe(gulp.dest(path.css))
    .pipe(cleanCss({debug: true}, function (details) {
      console.log(details.name + ': before:' + details.stats.originalSize);
      console.log(details.name + ': after:' + details.stats.minifiedSize);
    }))
    .on("error", notify.onError({
         message: "Error: <%= error.message %>",
         title: "Error sass"
       }))
    .pipe(rename({
      suffix: '.min'
    }))
    .on("error", notify.onError({
         message: "Error: <%= error.message %>",
         title: "Error sass"
       }))
    .pipe(gulp.dest(path.cssMin))

    .pipe(notify("sassed complete !"));
});


// Uglify JS
gulp.task('uglify', function () {
  gulp.src(path.js + '/*.js')

    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest(path.jsMin))
    .pipe(notify("js complete !"));
});

gulp.task('uglifyApp', function () {
  gulp.src(path.ngApp + '/**/*.js')
    .pipe(uglify())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest(path.ngAppMin))
  // .pipe(notify("js complete !"));
});


gulp.task('default', ['sass', 'uglify', 'watch']);

