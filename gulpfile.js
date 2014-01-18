var gulp = require('gulp');
var gutil = require('gulp-util');
var uglify = require('gulp-uglify');
var watch = require('gulp-watch');

//Minificando Scripts
gulp.task('scripts', function(){
	//Tarefa
	return gulp
		.src(['src/js/**/*.js'])
		.pipe(uglify())
		.pipe(gulp.dest('build/js'));
});

//Watch
gulp.task('watch', function(){
	gulp.watch('src/js/**/*.js', function(event) {
        gutil.log('File '+event.path+' was '+event.type+', running tasks...');
        gulp.run('scripts');
    });
});