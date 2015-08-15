'use strict';

var gulp   = require('gulp');
var config = require('../config');

// copy fonts of bower_components

gulp.task('copyToastr', function() {
    gulp.src('./bower_components/toastr/*')
    .pipe(gulp.dest(config.buildDir + 'toastr/'));
});
