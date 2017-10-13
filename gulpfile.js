var gulp           = require('gulp'),
    sass           = require('gulp-sass'),
    sourcemaps     = require('gulp-sourcemaps'),
    browserSync    = require('browser-sync').create(),
    autoprefixer   = require('gulp-autoprefixer');

gulp.task('browser-sync', function() {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });
  gulp.watch('./scss/**/*.scss', ['sass']);
});

gulp.task('sass', function () {
  return gulp.src('./scss/**/*.scss')
      .pipe(sourcemaps.init())
      .pipe(sass().on('error', sass.logError))
      .pipe(autoprefixer({
        browsers: ['last 2 versions']
      }))
      .pipe(sourcemaps.write())
      .pipe(gulp.dest('./css'))
      .pipe(browserSync.stream());
});

gulp.task('default', [
  'browser-sync',
  'sass'
]);