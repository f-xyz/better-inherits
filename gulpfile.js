var gulp = require('gulp');
var async = require('async');
var exec = require('child_process').exec;
require('colors');

gulp.task('default', ['clean', 'build']);

gulp.task('clean', function(next) {
    async.parallel([
        task('rm --verbose test/*.js'),
        task('rm --verbose test/*.map'),
        task('rm --verbose dist/*.js'),
        task('rm --verbose -r coverage/')
    ], next);
});

gulp.task('build', ['test'], function(next) {
    async.series([
        task('browserify --debug index.js -o dist/better-inherits.js'),
        task('uglify -s dist/better-inherits.js -o dist/better-inherits.min.js')
    ], next);
});

gulp.task('test', function(next) {
    async.series([
        task('coffee -cm test/*.coffee'),
        task('istanbul cover _mocha')
    ], next);
});

function task(cmd) {
    return function(next) {
        shell(cmd, next);
    }
}

function shell(cmd, next) {
    console.log('$ ' + cmd.green.bold);
    exec(cmd, function(stderr, stdout) {
        console.log(stdout.dim);
        if (next) next();
    })
}
