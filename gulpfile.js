var gulp = require('gulp');
var gutil = require('gulp-util');
var uglify = require('gulp-uglify');

gulp.task('default', function(){
	 gulp.watch('lib/js/*.js', function(){
        gulp.run('lint', 'scripts');
    });
});

gulp.task('compress', function(){
	gulp.files('lib/js/*.js')
	.pipe(uglify())
	.pipe(gulp.folder('dist'))
});