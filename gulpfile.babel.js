import yargs from 'yargs';
import { src, dest, watch, series, parallel } from 'gulp';
import sass from 'gulp-sass';
import cleanCss from 'gulp-clean-css';
import gulpif from 'gulp-if';
import postcss from 'gulp-postcss';
import sourcemaps from 'gulp-sourcemaps';
import autoprefixer from 'autoprefixer';
import imagemin from 'gulp-imagemin';
import del from 'del';
import webpack from 'webpack-stream';
import browserSync from 'browser-sync';
import info from "./package.json";
import zip from 'gulp-zip';

const PRODUCTION = yargs.argv.prod;

export const styles = () => {
    return src(['scss/bundle.scss', 'scss/home.scss', 'scss/single.scss', 'scss/video-reel.scss'])
    .pipe(gulpif(!PRODUCTION, sourcemaps.init()))
    .pipe(sass().on('error', sass.logError))
    .pipe(gulpif(PRODUCTION, postcss([ autoprefixer ])))
    .pipe(gulpif(PRODUCTION, cleanCss({compatibility: 'ie8'})))
    .pipe(gulpif(!PRODUCTION, sourcemaps.write()))
    .pipe(gulpif(PRODUCTION, dest('dist/css'), dest('css')))
    .pipe(server.stream());
}

export const fonts = () => {
    return src('scss/bundle/webfonts/**/*')
        .pipe(gulpif(PRODUCTION, dest('dist/css/webfonts'), dest('css/webfonts')))
}
export const images = () => {
    return src('images/**/*.{jpg,jpeg,png,svg,gif}')
        .pipe(gulpif(PRODUCTION, imagemin()))
        .pipe(gulpif(PRODUCTION, dest('dist/images'), dest('./images')))
}

export const copy = () => {
    return src(['*.php', 'template-parts/**/*.php', 'style.css', 'webfonts/**/*'], { base: '.'} )
    .pipe(gulpif(PRODUCTION, dest('dist')))
}

export const clean = (cb) => {
    del(['dist', 'css']);
    cb();
} 

export const scripts = () => {
    return src('js/bundle/bundle.js')
        .pipe(webpack({
            module: {
                rules: [
                    {
                        test: /\.js$/,
                        use: {
                            loader: 'babel-loader',
                            options: {
                                presets: []
                            }
                        }
                    }
                ]
            },
            mode: PRODUCTION ? 'production' : 'development',
            devtool: !PRODUCTION ? 'inline-source-map' : false,
            output: {
                filename: 'bundle.js'
            }
        }))
        .pipe(gulpif(PRODUCTION, dest('dist/js'), dest('js')))
}

export const watchForChanges = () => {
    watch('scss/**/*.scss', series(styles, reload));
    // watch('style.scss', series(styles, reload));
    watch('images/**/*.{jpg,jpeg,png,svg,gif}', series(images, reload));
    watch(['*.php', 'template-parts/**/*.php'], series(copy, reload));
    watch('js/**/*.js', series(scripts, reload));
}

const server = browserSync.create();

export const serve = done => {
    server.init({
        proxy: 'http://localhost:8080'
    });
    done();
};

export const reload = done => {
    server.reload();
    done();
}

export const compress = () => {
    return src('dist/**/*')
        .pipe(zip(`${info.name}.zip`))
        .pipe(dest('bundled'))
}

export const dev = series(clean, parallel(styles, fonts, images, copy, scripts), watchForChanges);
export const build = series(clean, parallel(styles, fonts, images, copy, scripts), compress);

export default dev;