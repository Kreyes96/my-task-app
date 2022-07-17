/* Dependencies */
const { src, dest, watch, parallel } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const plumber = require('gulp-plumber');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const postcss = require('gulp-postcss');
const sourcemaps = require('gulp-sourcemaps');
const terser = require('gulp-terser');

/* Use Sass and compile files to .css */
function stylesheet(done) {
   src('./src/scss/**/*.scss')
      .pipe(sourcemaps.init())
      .pipe(plumber())
      .pipe(sass())
      .pipe(postcss([autoprefixer(), cssnano()]))
      .pipe(sourcemaps.write('.'))
      .pipe(dest('./build/css/'));

   done();
};

/* Minify JS Scrpits */
function jsScript(done) {
   src('./src/js/**/*.js')
      .pipe(sourcemaps.init())
      .pipe(terser())
      .pipe(sourcemaps.write('.'))
      .pipe(dest('./build/js/'));

   done();
};

/* Watch files changes */
function watchFilesChanges(done) {
   watch('./src/scss/**/*.scss', stylesheet);
   watch('./src/js/**/*.js', jsScript);

   done();
};

/* Export every function to use them individually */
exports.stylesheet = stylesheet;
exports.jsScript = jsScript;
exports.watchFilesChanges = watchFilesChanges;

/* Run multiple functions at the same time  */
exports.build = parallel(stylesheet, jsScript, watchFilesChanges);
