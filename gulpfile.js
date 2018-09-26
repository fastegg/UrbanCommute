var gulp = require('gulp');
var gutil = require('gulp-util');
var clean = require('gulp-clean');
var tsc  = require('gulp-typescript');
var tsClientProject = tsc.createProject('client/tsconfig.json');
var config = require('./client/webpack.config.js');
var webpack = require('webpack');
var config = require('./client/webpack.config');

gulp.task('changes-detected', (callback) => {
	gutil.log('[WATCH] - Changes Detected! Compiling...')
})

gulp.task('ts-clean', () => {
	return gulp.src('client/lib', {read: false}).pipe(clean());
});

gulp.task('ts-client', ['ts-clean'], () => {
	try {
		var tsResult = tsClientProject.src().pipe(tsClientProject());
	} catch(e) {
		console.log('Error updatings ts');
	}
  return tsResult.js.pipe(gulp.dest('client/lib/'));
});

gulp.task('copy-css', ['ts-clean'], () => {
	gulp.src('./client/src/**/*.{css,svg,js}').pipe(gulp.dest('client/lib/'));
});

gulp.task('package-client', ['ts-client', 'copy-css'], (callback) => {
  webpack(config, function(err, stats) {
		if (err) throw new gutil.PluginError('webpack', err);
		const errs = stats.toString('errors-only');
		if (errs) {
			gutil.log('[webpack]', errs);
		}
		callback();
	});
});

gulp.task('default', ['package-client'], () => {
  gulp.watch('./client/src/**/*', ['changes-detected', 'package-client', 'ts-client', 'copy-css']);
});