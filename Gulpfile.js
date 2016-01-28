var gulp = require('gulp');
var babelify = require('babelify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var browserSync = require('browser-sync');
var sass = require('gulp-sass');
var templateCache = require('gulp-angular-templatecache');
var gulpsync = require('gulp-sync')(gulp);

// Build
var usemin = require('gulp-usemin');
var rev = require('gulp-rev');
var uglify = require('gulp-uglify');
var minifyCss = require('gulp-minify-css');

// Compile ES6 to ES5 && generated bundle
gulp.task('js', function () {
  browserify({
    entries: './app/src/app.js'
  })
  .transform(babelify)
  .bundle()
  .pipe(source('bundle.js'))
  .pipe(gulp.dest('./app/_tmp/'));
});

// compile Scss
gulp.task('sass', function () {
  gulp.src('./app/assets/stylesheets/**/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('./app/_tmp'));
});

// Cahced html to JS
gulp.task('htmlToJs', function(){
  gulp.src('app/src/modules/**/*.html')
  .pipe(templateCache({
    root: "/src/modules",
    module: "MyApp"
  }))
  .pipe(gulp.dest('./app/_tmp/'));
});

// Usemin
gulp.task('usemin', function() {
  return gulp.src('./app/index.html')
    .pipe(usemin({
      css: [rev()],
      js: [rev()],
    }))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('js-watch', ['js'], browserSync.reload);
gulp.task('module-html-watch', ['htmlToJs'], browserSync.reload);
gulp.task('sass-watch', ['sass'], browserSync.reload);

// Watchers
gulp.task('watch', function () {
  browserSync({
    server: {
      baseDir: './app'
    }
  });
  gulp.watch('app/src/**/*.js', ['js-watch']);
  gulp.watch('app/**/*.html', ['module-html-watch']);
  gulp.watch('app/assets/stylesheets/**/*.scss', ['sass-watch']);
});


gulp.task('default', ['js','htmlToJs', 'sass', 'watch']);
gulp.task('dist', gulpsync.sync([['sass','js','htmlToJs'], 'usemin']));
