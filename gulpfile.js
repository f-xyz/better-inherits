var gulp = require('gulp');
var mocha = require('gulp-spawn-mocha');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var debug = require('gulp-debug');
var sourcemaps = require('gulp-sourcemaps');
var rename = require('gulp-rename');
var jsdoc = require('gulp-jsdoc');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var del = require('del');
var colors = require('colors');
var browserify = require('browserify');
var async = require('async');

gulp.task('default', ['build']);
gulp.task('build', ['clean', 'browserify', 'test', 'jsdoc']);

gulp.task('clean', function(cb) {
    async.parallel([
        function(next) { del('dist/*.*', next) },
        function(next) { del('coverage/', next) }
    ], cb);
});

gulp.task('browserify', function() {
    var bundler = browserify({
        entries: ['./index.js'],
        debug: true
    });
    return bundler
        .bundle()

        .pipe(source(getBundleName('.js')))
        .pipe(gulp.dest('dist/'))

        .pipe(rename({ extname: '.min.js' }))
        .pipe(buffer())
        .pipe(sourcemaps.init({ loadMaps: true }))
        .pipe(uglify())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('dist/'))
    ;
});

gulp.task('test', function() {
    gulp.src('test/*.*', { read: false })
        .pipe(mocha({
            R: 'spec',
            colors: true,
            debug: true,
            istanbul: true,
            compilers: 'coffee:coffee-script/register'
        }));
});

gulp.task('jsdoc', function() {
    gulp.src('*.js')
        .pipe(jsdoc('docs'))
});

function getBundleName(ext) {
    var name = require('./package.json').name;
    var version = require('./package.json').version;
    return name + '-' + version + ext;
}
