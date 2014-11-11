var serverOptions = {port: 1985, livereload: {enable: true, port: 1986}}

var gulp = require("gulp")
var server = require("./tasks/server")

gulp.task("clean", require("./tasks/clean"))

// generated assets
gulp.task("scripts:linting", require("./tasks/scripts-linting"))
gulp.task("styles", require("./tasks/styles"))

// html & assets
gulp.task("html", require("./tasks/html"))
gulp.task("assets", require("./tasks/assets"))

// build
gulp.task("dist", [
  "clean",
  "html",
  "styles",
  "assets"
])

gulp.task("test", ["dist"])

gulp.task("watch", ["dist"], function() {
  gulp.watch("src/**/*.html", ["html"])
  gulp.watch("src/**/*.css", ["styles"])
  gulp.watch("src/**/assets/**/*", ["assets"])

  gulp.watch("tasks/**/*.js", ["scripts:linting"])
  gulp.watch("tests/**/*.js", ["scripts:linting"])
})

// dev server
gulp.task("server", ["dist"], server(serverOptions))

// deploy
gulp.task("deploy", ["dist"], require("./tasks/deploy"))

gulp.task("default", ["dist", "server", "watch"])
