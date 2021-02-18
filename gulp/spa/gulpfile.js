const { series, parallel } = require('gulp')
const gulp = require('gulp')
const {appHTML, appCSS, appJS, appIMG} = require('./gulpTasks/apps')
const {depsCSS, depsFonts} = require('./gulpTasks/deps')
const {monitorarArquivos, servidor} = require('./gulpTasks/servidor')

module.exports.default = series(
    parallel(
        series(appHTML, appCSS, appJS, appIMG),
        series(depsCSS, depsFonts)
    ),
    servidor,
    monitorarArquivos
)