'use strict';
/*
@ APIs
@ Login:
@ url:    https://claim-backend.herokuapp.com/login
@ Method: POST
@ payload: email & password
==================Responce=============
  @for Success:    {
                        success:true,
                        message:"some string"
                        token:"some string"
                    }

========================================
========================================
@ Default password is password
========================================
*/

var app = angular.module('claimPortalApp');

app.service('loginService', ['$http', '$q', 'appConfig', '$cookies', function ($http, $q, appConfig, $cookies) {
  //   var BASEURI = appConfig.apiUrl;
  var BASEURI = appConfig.locUri
  this.login = function (data) {
    var deferred = $q.defer();
    $http({
      method: 'POST',
      url: BASEURI + '/api/login',
      data: data
    }).success(function (data) {
      var user = {
        token: data.authHeader,
        session: data.session,
        userDetails: data.user,
        resources: data.resources
      };
      $cookies.put('userData', JSON.stringify(user));
      deferred.resolve(data);
      console.log(data);

    }).error(function (err) {
      deferred.resolve(err);
    });
    return deferred.promise;
  }

  this.logout = function () {
    return $http({
      method: 'DELETE',
      url: BASEURI + '/api/logout'
    });
  };
}]);
