var gulp = require('gulp');
var coffee = require('gulp-coffee');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var del = require('del');
var colors = require('colors');

gulp.task('default', ['clean', 'build']);

gulp.task('q', function() {
    gulp.src('test/*.coffee')
        .pipe(gulp.dest('gulp-test'));
});

gulp.task('clean', function(next) {
    del('test/*.js');
    del('test/*js');

    //async.parallel([
        //task('rm --verbose test/*.js'),
        //task('rm --verbose test/*.map'),
        //task('rm --verbose dist/*.js'),
        //task('rm --verbose -r coverage/')
    //], next);
});

gulp.task('build', ['test'], function(next) {
    //async.series([
    //    task('browserify --debug index.js -o dist/better-inherits.js'),
    //    task('uglify -s dist/better-inherits.js -o dist/better-inherits.min.js')
    //], next);
});

gulp.task('test', function(next) {
    //async.series([
    //    task('coffee -cm test/*.coffee'),
    //    task('istanbul cover _mocha')
    //], next);
});
