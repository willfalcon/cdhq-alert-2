const { src, dest } = require('gulp');
const postcss = require('gulp-postcss');
const livereload = require('gulp-livereload');

const styleScript = (srcFile, destFile, dev) =>
  src(srcFile)
    .pipe(postcss([require('tailwindcss'), require('autoprefixer'), require('@tailwindcss/typography'), require('postcss-nested')]))
    .pipe(dest(destFile))
    .pipe(livereload());

exports.styleScript = styleScript;

exports.devStyles = async function devStyles() {
  await styleScript('src/styles.css', 'dist/', true);
};

exports.prodStyles = async function prodStyles() {
  await styleScript('src/styles.css', 'dist/');
};
