// Import our core files
import angular from 'angular';

// Import our sub modules
import './app-core/index';
// import './app-layout/index';
import './app-photos/index';


angular
  .module('app', ['app.core',  'app.photos'])
;