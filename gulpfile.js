'use strict';

const gulp = require('gulp');
const uglify = require('gulp-uglify');
const rename = require("gulp-rename");
const sass = require('gulp-sass')(require('sass'));

gulp.task('scripts', () => {
    return gulp.src('./src/chill-utils.js')
        .pipe(uglify())
        .pipe(rename('chill-utils.min.js'))
        .pipe(gulp.dest('./dist/'))
});

gulp.task('styles', () => {
    return gulp.src('./src/chill-utils.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dist/'))
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(rename('chill-utils.min.css'))
        .pipe(gulp.dest('./dist/'))
});

gulp.task('default', gulp.series(['scripts', 'styles']));