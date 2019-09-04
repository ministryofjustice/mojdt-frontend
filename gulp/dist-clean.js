const del = require('del');
const gulp = require('gulp');

gulp.task('dist:clean', (done) => {
  return del([
    'dist/*'
  ], done)
});
