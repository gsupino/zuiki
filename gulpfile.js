var gulp = require('gulp');
var gutil = require("gulp-util");
var webpack = require("webpack");
var webpackConfig=require('./webpack.config');
var runSequence=require('run-sequence');
var nodemon = require('gulp-nodemon');
var size     = require('gulp-size');
var imagemin=require('gulp-imagemin');

var watch=false;

// Production build
gulp.task("build", ["webpack:build"]);

gulp.task("webpack:build", function(callback) {
    var verbose =false ;

    function bundle(err, stats) {
        if(err) throw new gutil.PluginError("webpack:build", err);
        gutil.log("[webpack:build]", stats.toString({
            //colors: $.util.colors.supportsColor,
            hash: verbose,
            version: verbose,
            timings: verbose,
            chunks: verbose,
            chunkModules: verbose,
            cached: verbose,
            cachedAssets: verbose
        }));
    }
    // run webpack
    var compiler=webpack(webpackConfig);
    if (watch) {
        compiler.watch(200, bundle);
    } else {
        compiler.run(bundle);
    }

});
// Build and start watching for modifications
gulp.task('build:watch', function(callback) {
    watch = true;
    runSequence('build',function() {
        gulp.watch('./src/**/*.*', []);
        callback();
    });
});

gulp.task('server:nodemon', function (done) {
    nodemon({
        script: './babel.server.js',
        "execMap": {
            "js": "/usr/local/bin/iojs"
        },
        env: {'NODE_ENV': 'development', 'DEBUG': 'MB:*'}
    })
        .on('restart', function () {
            console.log('restarted!');
        });
});

/**
 * Copy and minimize image files
 */
gulp.task('optimize:images', function() {
  return gulp.src('./asset/image/**/*.{jpg,jpeg,png,gif}')
    .pipe(imagemin({
          optimizationLevel: 3,
          progessive: true,
          interlaced: true
        }))
    .pipe(gulp.dest('./static/image/'))
    .pipe(size());
});