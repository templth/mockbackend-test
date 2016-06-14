System.config({
  //map tells the System loader where to look for things
  map: {
    app: "./src",
    //'@angular': 'http://localhost:8000/all/@angular',
    '@angular': 'node_modules/@angular',
    'rxjs': 'node_modules/rxjs'
  },
  //packages defines our app package
  packages: {
    app: {
      main: './main.ts',
      defaultExtension: 'js'
    },
    '@angular/core': {
      main: 'index.umd.js',
      defaultExtension: 'js'
    },
    '@angular/compiler': {
      main: 'index.umd.js',
      defaultExtension: 'js'
    },
    '@angular/common': {
      main: 'index.umd.js',
      defaultExtension: 'js'
    },
    '@angular/http': {
      main: 'index.umd.js',
      defaultExtension: 'js'
    },
    '@angular/platform-browser-dynamic': {
      main: 'index.umd.js',
      defaultExtension: 'js'
    },
    '@angular/platform-browser': {
      main: 'index.umd.js',
      defaultExtension: 'js'
    },
    rxjs: {
      defaultExtension: 'js'
    }
  }
});
