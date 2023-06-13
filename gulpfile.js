'use strict';

var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require("gulp-rename");
var sass = require('gulp-sass')(require('sass'));

gulp.task('default', function () {
    return gulp.src('chill-utils.js')
        .pipe(uglify())
        .pipe(rename('chill-utils.min.js'))
        .pipe(gulp.dest('./dist/'))
});