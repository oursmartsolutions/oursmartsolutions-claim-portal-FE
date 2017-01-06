angular.module("claimPortalApp")
  .controller("SignOutController", ['$scope', '$state', '$mdSidenav', '$rootScope', 'ToastService', 'loginService', 'appConfig', '$location', '$cookies',
    function ($scope, $state, $mdSidenav, $rootScope, ToastService, loginService, appConfig, $location, $cookies) {
      var signOutCtrl = this;
      signOutCtrl.logout = function () {
        loginService.logout().then(function (response) {
          console.log(response);
          $cookieStore.remove('userData');
          $location.path('/sign-in');
        }, function (error) {
          console.log(error);
        });
      };
      logout();
    }
  ]);
