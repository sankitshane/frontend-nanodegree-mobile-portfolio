var gulp = require('gulp');
var uglify = require('gulp-uglify');
var uglifycss = require('gulp-uglifycss');

gulp.task('script',function() {
  gulp.src('js/*.js')
  .pipe(uglify())
  .pipe(gulp.dest('js'))
});

gulp.task('style',function() {
  gulp.src('css/*.css')
  .pipe(uglifycss())
  .pipe(gulp.dest('css'))
});

gulp.task('default',['script','style']);
