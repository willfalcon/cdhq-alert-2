const { dest, src } = require('gulp');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const tsify = require('tsify');
const fancy_log = require('fancy-log');
const terser = require('gulp-terser');
const sourcemaps = require('gulp-sourcemaps');
const buffer = require('vinyl-buffer');
const webpackStream = require('webpack-stream');
const { webpack } = require('webpack');
const webpackConfig = require('../webpack.config');
const livereload = require('gulp-livereload');

const devScript = () => {
  return src('src/index.ts')
    .pipe(sourcemaps.init())
    .pipe(webpackStream(webpackConfig.devConfig, webpack))
    .pipe(sourcemaps.write('.'))
    .pipe(dest('dist'))
    .pipe(livereload());
};

const prodScript = () => {
  return src('src/index.ts').pipe(sourcemaps.init()).pipe(webpackStream(webpackConfig.prodConfig, webpack)).pipe(dest('dist'));
};

// const prodScript = () => {
//   return browserify({
//     basedir: '.',
//     debug: true,
//     entries: ['src/index.ts'],
//     cache: {},
//     packageCache: {},
//   })
//     .plugin(tsify)
//     .bundle()
//     .on('error', fancy_log)
//     .pipe(source('cdhq-alert.min.js'))
//     .pipe(buffer())
//     .pipe(sourcemaps.init({ loadMaps: true }))
//     .pipe(terser())
//     .pipe(sourcemaps.write('./'))
//     .pipe(dest('dist'));
// };

exports.devScript = devScript;
exports.prodScript = prodScript;
