var gulp = require("gulp")
var opts = require("./options")
var util = require("gulp-util")
var plumber = require("gulp-plumber")
// var jsx = require("gulp-react")
var jscs = require("gulp-jscs")
var jshint = require("gulp-jshint")

/**
 * task scripts:linting
 *
 * jshint + jscs
 */
module.exports = function() {
  return gulp.src(
    [
      "*.js",
      "./src/**/*.js",
      "!./src/lib/**/*.js",
      "./tasks/**/*.js",
      "./tests/**/*.js",
    ])
    .pipe(opts.plumber ? plumber() : util.noop())
    // .pipe(jsx({harmony: true}))
    .pipe(jscs())
    .pipe(jshint())
    .pipe(jshint.reporter("jshint-stylish"))
    .pipe(jshint.reporter("fail"))
}
