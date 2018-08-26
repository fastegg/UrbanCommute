var gulp = require('gulp');
var gutil = require('gulp-util');
var tsc  = require('gulp-typescript');
var tsClientProject = tsc.createProject('client/tsconfig.json');
var config = require('./client/webpack.config.js');
var webpack = require('webpack');
var config = require('./client/webpack.config');

gulp.task('ts-client', () => {
  var tsResult = tsClientProject.src().pipe(tsClientProject());

  return tsResult.js.pipe(gulp.dest('client/lib/'));
});

gulp.task('package-client', ['ts-client'], (callback) => {
  webpack(config, function(err, stats) {
		if(err) throw new gutil.PluginError('webpack', err);
		gutil.log('[webpack]', stats.toString({
			// output options
		}));
		callback();
	});
});

gulp.task('default', ['package-client'], () => {
  gulp.watch('./client/**/*.ts', ['package-client']);
});