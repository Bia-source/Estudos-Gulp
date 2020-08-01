const gulp = require('gulp');
const htmin = require('gulp-htmlmin');

gulp.task('start', function(){
   return gulp.src(['./src/index.html'])
    .pipe(htmin({collapseWhitespace:true}))
    .pipe(gulp.dest('./build'));   
});
