var gulp = require("gulp")
var opts = require("./options")
var util = require("gulp-util")
var plumber = require("gulp-plumber")
var cssnext = require("gulp-cssnext")

module.exports = function() {
  return gulp.src("src/*.css")
    .pipe(opts.plumber ? plumber() : util.noop())
    .pipe(cssnext({
      sourcemap: opts.debug,
      // compress: opts.minify
    }))
    .pipe(gulp.dest("./dist/"))
}
