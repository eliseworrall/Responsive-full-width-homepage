/// <vs SolutionOpened='default' />
var gulp = require('gulp'); 

// Include Our Plugins
var compass = require('gulp-compass');
var sourcemaps = require('gulp-sourcemaps');
var watch = require('gulp-watch');

gulp.task('compass', function() {
  gulp.src('./assets/style/*.scss')
    .pipe(sourcemaps.init())
    .pipe(compass({
      css: './assets/style',
      sass: './assets/style',
    }))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./assets/style/'));
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('./assets/style/**/*.scss', ['compass']);
});

// Default Task
gulp.task('default', ['compass', 'watch']); 