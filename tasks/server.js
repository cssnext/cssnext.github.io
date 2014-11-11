var gulp = require("gulp")
var webserver = require("gulp-webserver")

module.exports = function(options) {
  return function() {
    return gulp.src("dist/")
      .pipe(webserver({
        port: options.port,
        livereload: options.livereload || {enable: true},
        open: true
      }))
  }
}
