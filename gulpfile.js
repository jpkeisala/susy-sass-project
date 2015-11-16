var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var notify = require('gulp-notify');
var uglify = require('gulp-uglify');
var webserver = require('gulp-webserver');
var sourcemaps = require('gulp-sourcemaps');
var debug = require('gulp-debug');

var DEV = 'app';
var DEST = 'dist';

gulp.task('styles', function() {
    gulp.src(DEV + '/scss/*.{scss,sass}')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(DEV +'/css/'))
        .pipe(debug({title: 'unicorn:'}))
        .pipe(sourcemaps.write());
        /*.pipe(notify({ message: 'Styles task complete' })); */
});

gulp.task('sass', function() {
    gulp.src(DEV + '/scss/*.{scss,sass}')
    //.pipe(sourcemaps.init())
    .pipe(sass({
      errLogToConsole: true
    }))
    .pipe(sass({ includePaths: ['/app/bower_components/susy/sass']}))
    //.pipe(sourcemaps.write())
    .pipe(gulp.dest(DEV + '/css'));
})

gulp.task('scripts', function(){

});


gulp.task('watch', function(){
  gulp.watch(DEV + '/scss/**/*.{scss,sass}', ['sass']);
  gulp.watch(DEV +'/*.html');
  gulp.watch(DEV + '/scripts/**/*.js', ['scripts']);
});

gulp.task('webserver', function() {
  /*gulp.src('dist')
    .pipe(webserver({
      port:'9090',
      livereload: true,
      open: true
    })); */
});


//Watch task
gulp.task('default', ['watch', 'styles']);
