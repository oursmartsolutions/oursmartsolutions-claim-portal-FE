'use strict';

/**
 * @ngdoc overview
 * @name claimPortalApp
 * @description
 * # claimPortalApp


 'use strict';

 /**
 * @ngdoc overview
 * @name claimPortalApp
 * @description
 * # claimPortalApp
 *
 * Main module of the application.
 */
angular
  .module('claimPortalApp', [
    'ui.router',
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngSanitize',
    'ngMaterial',
    'toaster'
  ]);

angular.element(document).ready(function () {
  jQuery.get('/app-config.json?' + new Date().getTime(), function (data) {
    angular.module('claimPortalApp').run(function ($rootScope) {
      $rootScope.app = data.app;
    }).constant('appConfig', data.app);
    angular.bootstrap(document, ['claimPortalApp']);
  }).fail(function () {
    throw "error in client-config.json"
  });
});
