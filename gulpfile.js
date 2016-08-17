var Elixir = require('laravel-elixir');

const gulp = require('gulp');
const changed = require('gulp-changed');
const ts = require('gulp-typescript');
const sourcemaps  = require('gulp-sourcemaps');
const concat = require('gulp-concat');
const minify = require('gulp-minify');

var Task = Elixir.Task;
var tsProject = ts.createProject('tsconfig.json');

/**
 * Custom Task to compile Angular 2
 */
Elixir.extend('angular2', function(src, output) {

    var paths = new Elixir.GulpPaths().src(src).output(output);

    new Task('angular2', function($) {
        this.recordStep("Compile Angular 2");

        return gulp.src(paths.src.path)
            .pipe(sourcemaps.init({
                loadMaps: true
            }))
            .pipe(ts(tsProject))
            .pipe(sourcemaps.write('.'))
            .pipe(gulp.dest(paths.output.path))
            .pipe(new Elixir.Notification('Angular 2 compiled.'));
    }, paths)
        .watch(src);

});

/**
 * Custom Elixir Task to copy vendor libraries
 * (only during development)
 */
Elixir.extend('vendor', function (src, output) {

    var paths = new Elixir.GulpPaths().src(src).output(output);

    new Task('vendor', function ($) {
        this.recordStep("Copy Vendor Libraries");

        return gulp.src(paths.src.path, {base: './node_modules/'})
            .pipe(gulp.dest(paths.output.path));
    }, paths).watch('package.json');


});

Elixir(function(mix) {
    mix.sass('app.scss');

    mix.copy('resources/assets/images', 'public/images/');
    mix.copy('resources/assets/js', 'public/js/');


    // Copy vendor scripts
    var libs = [
        'node_modules/@angular',
        'node_modules/angular2-jwt',
        'node_modules/angular2-in-memory-web-api',
        'node_modules/reflect-metadata',
        'node_modules/rxjs',
        'node_modules/systemjs',
        'node_modules/zone.js'
    ];
    mix.vendor(libs, 'public/vendor/');

    // Compile Typescript
    mix.angular2(['resources/assets/typescript'], 'public/js/');

});
