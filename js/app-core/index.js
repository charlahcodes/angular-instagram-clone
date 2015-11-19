import angular from 'angular';
import 'angular-ui-router';

import config from './config';
import PARSE from './constants/parse.constant';

angular
  .module('app.core', ['ui.router'])
  .config(config)
  .constant('PARSE', PARSE)
;