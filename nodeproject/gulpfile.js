var gulp = require("gulp");
var jshint = require("gulp-jshint");

var jsFiles = ["*.js", "src/**/*.js"];

gulp.task("style", () => {
  return gulp.src(jsFiles).pipe(jshint());
});