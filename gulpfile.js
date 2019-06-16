const gulp = require('gulp');
const browserSync = require('browser-sync').create();


function clean(cb) {
  // body omitted
  cb();
}

function javascript(cb) {
  // body omitted
  cb();
}

function css(cb) {
  // body omitted
  cb();
}

function html(db) {
  // body omitted
  cb();
}


exports.default = function() {
  // You can use a single task
  gulp.watch('src/**/*.html', html);
  // You can use a single task
  gulp.watch('src/**/*.css', css);
  // Or a composed task
  gulp.watch('src/**/*.js', gulp.series(clean, javascript));


  var files = [
    'src/**/*.html',
    'src/css/**/*.css',
    'src/js/**/*.js',
    'src/sass/**/*.scss'
  ];


  // Serve files from the root of this project
  // https://www.browsersync.io/docs/options
  browserSync.init({
    injectChanges: true,
    watch: true,
    server: {
      baseDir: "./src",
      index: 'index.html',
    },
    port: 8000
  });


  // https://gulpjs.com/docs/en/api/watch#options
  gulp.watch(files, { events: 'all' }, function (done){
    browserSync.reload();
    done();
  });

};
