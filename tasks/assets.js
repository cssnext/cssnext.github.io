var gulp = require("gulp")
var changed = require("gulp-changed")

module.exports = function() {
  return gulp.src([
    "src/**/assets/**/*"
  ])
    .pipe(changed("dist/"))
    .pipe(gulp.dest("dist/"))
}
