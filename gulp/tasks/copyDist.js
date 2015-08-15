'use strict';

var gulp   = require('gulp');
var config = require('../config');
var concat = require('gulp-concat');

/*
 Generate vendor.js (bootstrap and jquery)
*/
gulp.task('copyDist', function() {
    gulp.src([
        './bower_components/jquery/dist/jquery.js',
        './bower_components/bootstrap/dist/js/bootstrap.js'
    ])
    .pipe(concat('vendor.js'))
    .pipe(gulp.dest(config.buildDir + 'dist/'));
});
