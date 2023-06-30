const gulp = require('gulp');
const del = require('del');

function cleanDistFolder() {
  return del('dist');
}

function build() {
  return gulp.src([
    'app/index.html',
    'app/assets/**/*',
    'app/public/**/*',
    '!app/assets/js/script.js',
  ], {base: 'app'})
      .pipe(gulp.dest('dist'));
}

exports.build = gulp.series(cleanDistFolder, build);