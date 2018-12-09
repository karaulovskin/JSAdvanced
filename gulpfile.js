var gulp = require('gulp');
var browserSync = require('browser-sync');

// Сервер
gulp.task('server', function () {
   browserSync({
       port: 9000,
       server: {
           baseDir: 'app'
       }
   })
});

// Слежка
gulp.task('watch', function ({}) {
    gulp.watch([
        'app/**/*'
    ]).on('change', browserSync.reload);
});

// Задача по умолчанию
gulp.task('default', ['server', 'watch']);