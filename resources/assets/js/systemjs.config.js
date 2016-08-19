(function(global) {

    // map tells the System loader where to look for things
    var map = {
        'angular2-jwt':                 'vendor/angular2-jwt',
        'app':                         'js', // 'dist',
        'rxjs':                        'vendor/rxjs',
        'angular2-in-memory-web-api':  'vendor/angular2-in-memory-web-api',
        '@angular':                    'vendor/@angular'
    };

    // packages tells the System loader how to load when no filename and/or no extension
    var packages = {
        'main':                        { main: 'main.js',  defaultExtension: 'js' },
        'rxjs':                         { main: 'Rx.js', defaultExtension: 'js' },
        'angular2-in-memory-web-api': { defaultExtension: 'js' },
        'angular2-jwt':                 { main: 'angular2-jwt.js'}
    };

    var packageNames = [
        '@angular/common',
        '@angular/compiler',
        '@angular/core',
        '@angular/forms',
        '@angular/http',
        '@angular/platform-browser',
        '@angular/platform-browser-dynamic',
        '@angular/router',
        '@angular/router-deprecated',
        '@angular/testing',
        '@angular/upgrade',
    ];

    // add package entries for angular packages in the form '@angular/common': { main: 'index.js', defaultExtension: 'js' }
    packageNames.forEach(function(pkgName) {
        packages[pkgName] = { main: 'index.js', defaultExtension: 'js' };
    });

    var config = {
        defaultJSExtensions: true,
        map: map,
        packages: packages
    };

    // filterSystemConfig - index.html's chance to modify config before we register it.
    if (global.filterSystemConfig) { global.filterSystemConfig(config); }

    System.config(config);

})(this);