const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const imagemin = require('gulp-imagemin')
const less = require('gulp-less');


function watch() {
    browserSync.init({
        server: {
            baseDir: './',
        }
    });

    gulp.watch('./*.html').on('change', browserSync.reload)
    gulp.watch('./img/*', imageMinify).on('change', browserSync.reload)
    gulp.watch('./less/*.less', compileLess).on('change', browserSync.reload)
}

function imageMinify() {
    return gulp.src('./img/*')
        .pipe(imagemin({
            optimizationLevel: 10,
        }))
        .pipe(gulp.dest('./img_minified'))
}

function compileLess() {
    return gulp.src('./less/*.less')
      .pipe(less())
      .pipe(gulp.dest('./css'));
  };

exports.watch = watch;

