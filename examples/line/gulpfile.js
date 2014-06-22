'use strict'

var gulp       = require('gulp')
  , purescript = require('gulp-purescript')
  ;

var paths = {
    src: '../../src/**/*.purs',
    bowerSrc: [
      '../../bower_components/purescript-*/src/**/*.purs',
      '../../bower_components/purescript-*/src/**/*.purs.hs'
    ],
    examples: '*.purs',
    dest: '',
    docsDest: 'README.md'
};

var options = {
  main: 'Examples.Graphics.C3.Line',
  output: 'line.js'
};

var compile = function(compiler) {
    var psc = compiler(options);
    psc.on('error', function(e) {
        console.error(e.message);
        psc.end();
    });
    return gulp.src([paths.src, paths.examples].concat(paths.bowerSrc))
        .pipe(psc)
        .pipe(gulp.dest(paths.dest));
};

gulp.task('make', function() {
    return compile(purescript.pscMake);
});

gulp.task('browser', function() {
    return compile(purescript.psc);
});

gulp.task('docs', function() {
    return gulp.src(paths.src)
      .pipe(purescript.docgen())
      .pipe(gulp.dest(paths.docsDest));
});

gulp.task('watch-browser', function() {
    gulp.watch(paths.examples, ['browser', 'docs']);
});

gulp.task('watch-make', function() {
    gulp.watch(paths.examples, ['make', 'docs']);
});

gulp.task('default', ['make', 'docs']);
