/**
 * System configuration for Angular 2 apps
 * Adjust as necessary for your application needs.
 */
//(function(global) {

  // map tells the System loader where to look for things
  var map = {
    'app':                        'src', // 'dist',

    '@angular':                   'node_modules/@angular',
    'rxjs':                       'node_modules/rxjs'
  };

  // packages tells the System loader how to load when no filename and/or no extension
  var packages = {
    'app':                        { main: 'main.js',  defaultExtension: 'js' },
    'rxjs':                       { defaultExtension: 'js' }
  };

  var ngPackageNames = [
    'core',
    'compiler',
    'common',
    'http',
    'platform-browser-dynamic',
    'platform-browser',
    'router',
    'router-deprecated',
    'upgrade',
    'testing'
  ];

  // Individual files (~300 requests):
  function packIndex(pkgName) {
    packages['@angular/'+pkgName] = { main: 'index.js', defaultExtension: 'js' };
  }

  // Bundled (~40 requests):
  function packUmd(pkgName) {
    packages['@angular/'+pkgName] = { main: pkgName + '.umd.js', defaultExtension: 'js' };
  };

  //var setPackageConfig = System.packageWithIndex ? packIndex : packUmd;
  var setPackageConfig = packUmd;

  // Add package entries for angular packages
  ngPackageNames.forEach(setPackageConfig);

  var config = {
    map: map,
    packages: packages
  };

  console.log(JSON.stringify(config, null, 2));

  System.config(config);

//})(this);