var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync').create();

/** Sass Task */
gulp.task('sass', function() {
    gulp.src('sass/**/*scss')
        .pipe(sass())
        .pipe(gulp.dest('./css'));
});

/** BrowserSync Task */
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: './',
            index: './src/template/index.html'
        }
    })
});
gulp.task('bs-reload', function() {
	browserSync.reload();
})


// Watch
gulp.task('watch', ['sass', 'browser-sync', 'bs-reload'], function() {
    gulp.watch('src/scss/**/*.scss', ['sass']);
    gulp.watch('src/template/*.html', ['bs-reload']);
});