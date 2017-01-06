'use strict';
angular
    .module('claimPortalApp')
    .config(function ($httpProvider) {
        $httpProvider.interceptors.push('myInterceptor')
    })
    .factory('myInterceptor', function ($q, $location) {
        return {
            request: function (config) {

                 //config.headers =  {'Content-Type': 'application/json'};
                //   if ($localStorage.token) { config.headers.Authorization = 'Bearer ' + $localStorage.token;
                //  }
                return config;
            },
            requestError: function (config) {
                return config;
            },
            response: function (res) {
                return res;
                // $state.go('');

            },
            responseError: function (res) {
                return res;
            }
        }
    });
 //
 // var history_api=typeof history.pushState!==undefined;
 // if(history_api) history.pushState(null,'','');;
