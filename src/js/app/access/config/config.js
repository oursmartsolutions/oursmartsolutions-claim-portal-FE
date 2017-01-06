angular.module('claimPortalApp')
  .config(function ($httpProvider, $qProvider, $locationProvider) {
    $httpProvider.defaults.headers.common['source'] = 'web';
    $httpProvider.interceptors.push('myInterceptor');
  })
  .factory('myInterceptor', function ($q, $location, $cookies) {
    return {
      'request': function (config) {
        config.headers = config.header || {};
        if ($cookies.get('userData')) {
          var token = JSON.parse($cookies.get('userData')).token;
          token ? config.headers.Authorization = token : null;
        }
        return config;
      }
    }
  });
