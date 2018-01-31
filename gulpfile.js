var gulp      = require('gulp'),
    spawn     = require('child_process').spawn,
    webserver = require('gulp-webserver'),
    notifier  = require('node-notifier');

var SERVER_PORT = 4000;
var SERVER_ROOT = '_site/'

var Logger = function() {
  var logger = function() {

  };

  var _log = function(message) {
    console.log(message);
  };

  var _notify = function(title, message) {
    notifier.notify({
      title:   title,
      message: message
    });
  };

  logger.prototype = {
    log:    _log,
    notify: _notify
  };
  return logger;
}();

gulp.task('jekyll', function() {
  var jekyll = spawn('jekyll', ['build']);
  var logger = new Logger();

  jekyll.stderr.on('data', function(data) {
    logger.log("", + data);
    logger.notify('Build Error', data);
  });

  jekyll.on('exit', function(code) {
    var message = code ? 'error' : 'success';
    logger.log('Finished Jekyll Build : ' + message);
  });
});

gulp.task('serve', function() {
  gulp.src(SERVER_ROOT)
    .pipe(webserver({
      livereload: true,
      open:       true,
      port:       SERVER_PORT
    }));
});

gulp.task('watch', function() {
  gulp.watch(['*.html', '*/*.html', 'assets/js/*.js', 'assets/css/*.css', '*.md', '*/*.md'], ['jekyll']);
});

gulp.task('default', ['jekyll', 'serve', 'watch']);
