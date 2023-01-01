> Just experimenting with gulp

{
  "name": "sass-practice",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "gulp": "^4.0.2",
    "gulp-sass": "^5.1.0",
    "gulp-sourcemaps": "^3.0.0",
    "sass": "^1.57.1"
  }
}


const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');

const buildStyles =  () => {
  return src('./scss/styles.scss')
            .pipe( sourcemaps.init())
            .pipe(sass({
              // outputStyle: 'compressed'
            }))
            .pipe( sourcemaps.write('./'))
            .pipe(dest('css'));
}

const watchTask = () => {
  watch(['./scss/**/*.scss'], buildStyles);
}

exports.default = series(buildStyles, watchTask) 