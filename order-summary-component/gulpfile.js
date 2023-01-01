const gulp = require('gulp');
const concat = require('gulp-concat');
const cleanCss = require('gulp-clean-css');
const sourcemaps = require('gulp-sourcemaps');

// Concat and minify CSS files
gulp.task('build-css', () => {
  return gulp.src('src/styles/**/*.css')
  .pipe(sourcemaps.init())
  .pipe(concat('styles.css'))
  .pipe(cleanCss())
  .pipe(sourcemaps.write())
  .pipe(gulp.dest('dist/styles'));
});

gulp.task('default', gulp.series('build-css'));