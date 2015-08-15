'use strict';

var gulp   = require('gulp');
var config = require('../config');

// copy fonts of bower_components

gulp.task('copyFonts', function() {
    gulp.src('./bower_components/bootstrap/dist/fonts/**/*')
    .pipe(gulp.dest(config.buildDir + 'fonts/'));
});
