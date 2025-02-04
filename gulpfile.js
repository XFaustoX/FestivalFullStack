import path from 'path'
import fs from 'fs'
import {glob} from 'glob'

import { src, dest, watch, series } from 'gulp'
import * as dartSass from 'sass'
import gulpSass from 'gulp-sass'

const sass = gulpSass(dartSass);

import terser from 'gulp-terser'
import sharp from 'sharp'

export function js( done ){

    src('src/js/app.js', {sourcemaps: true})
        .pipe( terser() )
        .pipe( dest('build/js', {sourcemaps:true}) )

    done()
}

export function css( done ){
    src('src/scss/app.scss', {sourcemaps: true})
        .pipe( sass().on('error', sass.logError) )
        .pipe( dest('build/css', {sourcemaps:true}) )

    done()
}

export async function crop(done) {
    const inputFolder = 'src/img/gallery/full'
    const outputFolder = 'src/img/gallery/thumb';
    const width = 250;
    const height = 180;
    if (!fs.existsSync(outputFolder)) {
        fs.mkdirSync(outputFolder, { recursive: true })
    }
    const images = fs.readdirSync(inputFolder).filter(file => {
        return /\.(jpg)$/i.test(path.extname(file));
    });
    try {
        images.forEach(file => {
            const inputFile = path.join(inputFolder, file)
            const outputFile = path.join(outputFolder, file)
            sharp(inputFile) 
                .resize(width, height, {
                    position: 'centre'
                })
                .toFile(outputFile)
        });

        done()
    } catch (error) {
        console.log(error)
    }
}

export async function imagenes(done) {
    try {
        const srcDir = './src/img/';
        const buildDir = './build/img/';
        const images = await glob(['./src/img/**/*.jpg', './src/img/**/*.png']);

        await Promise.all(images.map(async (file) => {
            try {
                const relativePath = path.relative(srcDir, file);
                const outputSubDir = path.join(buildDir, path.dirname(relativePath));
                await procesarImagenes(file, outputSubDir);
            } catch (error) {
                console.error(`❌ Error procesando ${file}:`, error.message);
            }
        }));

        done();
    } catch (error) {
        console.error("❌ Error en la función imagenes:", error.message);
        done(error);
    }
}

async function procesarImagenes(file, outputSubDir) {
    try {
        if (!fs.existsSync(outputSubDir)) {
            fs.mkdirSync(outputSubDir, { recursive: true });
        }

        // ✅ Validar que el archivo sea realmente una imagen
        const metadata = await sharp(file).metadata().catch(() => null);
        if (!metadata) {
            console.warn(`⚠️  Imagen omitida (no válida o corrupta): ${file}`);
            return;
        }

        const baseName = path.basename(file, path.extname(file));
        const outputFile = path.join(outputSubDir, `${baseName}.jpg`);
        const outputFileWebp = path.join(outputSubDir, `${baseName}.webp`);
        const outputFileAvif = path.join(outputSubDir, `${baseName}.avif`);

        const options = { quality: 80 };

        await sharp(file).jpeg(options).toFile(outputFile);
        await sharp(file).webp(options).toFile(outputFileWebp);
        await sharp(file).avif().toFile(outputFileAvif);

        console.log(`✅ Imagen procesada: ${file}`);
    } catch (error) {
        console.error(`❌ Error procesando imagen ${file}:`, error.message);
    }
}

export function dev(){
    watch('src/scss/**/*.scss', css) //para que busque todas las carpetas y poder actualizar
    watch('src/js/**/*.js', js) //para que busque todas las carpetas y poder actualizar
    watch('src/img/**/*.{ jpg, png }', imagenes) //para que busque todas las carpetas y poder actualizar
}

export default series( crop, js, css, imagenes, dev ) //para que se ejecute en serie