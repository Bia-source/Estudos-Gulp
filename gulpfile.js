const gulp = require('gulp');
const htmin = require('gulp-htmlmin');
const notify = require("gulp-notify");

 gulp.task('start', function(){
   return gulp.src(['./src/index.html'])
    .pipe(htmin({collapseWhitespace:true}))
    .pipe(gulp.dest('./build'));   
}); 

gulp.task('mensagem', function() {
    return gulp.src("./src/index.html")
    .pipe(notify("Hello Gulp!"));
})
