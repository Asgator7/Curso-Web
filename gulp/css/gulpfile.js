const { series } = require('gulp')
const { parallel } = require('gulp')
const gulp = require('gulp')
const sass = require('gulp-sass')
const uglify = require('gulp-uglifycss')
const concat = require('gulp-concat')

function transformacaoSASS(){
    return gulp.src('src/sass/index.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(uglify({
            "uglyComments":true
        }))
        .pipe(concat('estilo.min.css'))
        .pipe(gulp.dest('build/css'))
}

function copiarHTML(){
    return gulp.src('src/index.html')
        .pipe(gulp.dest('build'))
}

exports.default = parallel(
    transformacaoSASS,
    copiarHTML
    )