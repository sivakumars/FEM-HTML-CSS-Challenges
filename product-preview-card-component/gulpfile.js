const { src, dest, series, watch} = require('gulp');
const concat = require('gulp-concat');      // Concat all src files 
const cleanCss = require('gulp-clean-css'); // Minify CSS
const sourcemaps = require('gulp-sourcemaps'); // create sourcemaps for the minified files.

const buildStyles = () => {
  return src('./src/styles/**/*.css')
         .pipe(sourcemaps.init())
         .pipe(concat('styles.css'))
         .pipe(cleanCss())
         .pipe(sourcemaps.write())
         .pipe(dest('dist/styles'));
}

const watchFiles = () => {
  watch(['./src/**/*.css', '*.html'], buildStyles) 
}

exports.default = series(buildStyles, watchFiles);