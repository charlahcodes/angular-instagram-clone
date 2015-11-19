import angular from 'angular';
import '../app-core/index';

import HomeController from './controllers/home.controller';
import AddController from './controllers/Add.controller';

import PhotosService from './services/photos.service';

import charlieImage from './directives/photo.directive';

angular
  .module('app.photos', ['app.core'])
  .controller('HomeController', HomeController)
  .controller('AddController', AddController)
  .service('PhotosService', PhotosService)
  .directive('charlieImage', charlieImage)
;