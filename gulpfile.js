import { src, dest, watch, series } from 'gulp'
import * as dartSass from 'sass'
import gulpSass from 'gulp-sass'

const sass = gulpSass(dartSass);

export function js( done ){

    src('src/js/app.js', {sourcemaps: true})
        .pipe( dest('build/js', {sourcemaps:true}) )

    done()
}

export function css( done ){
    src('src/scss/app.scss', {sourcemaps: true})
        .pipe( sass().on('error', sass.logError) )
        .pipe( dest('build/css', {sourcemaps:true}) )

    done()
}

export function dev(){
    watch('src/scss/**/*.scss', css) //para que busque todas las carpetas y poder actualizar
    watch('src/js/**/*.js', js) //para que busque todas las carpetas y poder actualizar
}

export default series( js, css, dev ) //para que se ejecute en serie