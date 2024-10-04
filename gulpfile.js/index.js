const { src, watch, parallel, series } = require('gulp');
const livereload = require('gulp-livereload');
const { devStyles, prodStyles } = require('./styles');
const { devScript, prodScript } = require('./scripts');

function refresh(cb) {
  return src('index.php').pipe(livereload());
}

function watchTask(cb) {
  livereload.listen();
  watch(['src/**/*.css', '**/*.php'], parallel(devStyles));
  watch(['src/**/*.ts'], devScript);
  watch(['**/*.php'], refresh);
  cb();
}

exports.default = parallel(prodStyles, prodScript);

exports.watch = watchTask;
// module.exports = parallel(series(prodCopyNormalize, devThemeStyles, prodThemeStyles), series(devMainScript, prodMainScript));
