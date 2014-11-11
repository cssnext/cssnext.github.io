var gulp = require("gulp")
var ghPages = require("gulp-gh-pages")

/**
* publish task
*
* publish build in the gh-pages branch
*/
module.exports = function() {
  // https://github.com/rowoot/gulp-gh-pages/issues/26
  return gulp.src("dist/**/*")
    .pipe(ghPages({
      remoteUrl: "https://" + (process.env.GH_TOKEN ? process.env.GH_TOKEN + "@" : "") + "github.com/" + process.env.GH_OWNER + "/" + process.env.GH_PROJECT_NAME + ".git",
      branch: "master",
      cacheDir: __dirname + "/../.publish"
    }))
}
