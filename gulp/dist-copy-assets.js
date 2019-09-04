const gulp = require('gulp');

gulp.task('dist:copy-assets', () => {
  return gulp.src([
      'src/moj/assets/**/*'
    ])
    .pipe(gulp.dest('dist/'));
});
