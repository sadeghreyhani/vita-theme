const gulp = require("gulp")
const sass = require("gulp-sass")
const watchSass = require("gulp-watch-sass")
 
gulp.task("sass:watch", () => watchSass([
  "./assets/**/*.{scss,css}",
  "!./assets/css/**/*"
])
  .pipe(sass())
  .pipe(gulp.dest("./assets")));