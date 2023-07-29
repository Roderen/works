const gulp = require('gulp');
const del = require('del');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');

const cleanDistFolder = () => {
  return del('dist');
}

const minifyJs = () => {
  return gulp.src('app/assets/js/script.js')
      .pipe(concat('script.min.js'))
      .pipe(uglify())
      .pipe(gulp.dest('app/assets/js'))
}

const logFunc = (done) => {
  console.log('Success');
  done();
}

exports.cleanDistFolder = cleanDistFolder;
exports.minifyJs = minifyJs;
exports.logFunc = logFunc;

exports.default = gulp.parallel(cleanDistFolder, minifyJs, logFunc);