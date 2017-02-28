var gulp = require('gulp'),
	imagemin = require('gulp-imagemin'),
	htmlmin = require('gulp-htmlmin'),
	uglify = require('gulp-uglify'),
	rename = require('gulp-rename')


gulp.task('image', function () {

	return gulp.src(['./images/*'])
		.pipe(imagemin())
		.pipe(gulp.dest('./release/images'));
});

gulp.task('html', function() {

	return gulp.src(['./index.html'])
		.pipe(htmlmin())
		.pipe(gulp.dest('./release'));

});

gulp.task('js', function() {
	return gulp.src(['./js/main.js'])
		.pipe(rename({suffix: '.min'}))
		.pipe(uglify())
		.pipe(gulp.dest('./js'))
})