const gulp = require('gulp');
const concat = require('gulp-concat');
const cleanCss = require('gulp-clean-css');

// Concat and minify CSS files
gulp.task('build-css', () => {
  return gulp.src('src/styles/**/*.css')
  .pipe(concat('styles.css'))
  .pipe(cleanCss())
  .pipe(gulp.dest('dist/css'));
});

gulp.task('default', gulp.series('build-css'));