angular.module("claimPortalApp").controller("AppCtrl", ['$scope', '$state', '$rootScope', '$mdDialog', 'appConfig', '$location', '$cookies', 'loginService', '$cookieStore',
  function ($scope, $state, $rootScope, $mdDialog, appConfig, $location, $cookies, loginService, $cookieStore) {
    console.log('loading===========================');
    $state.go('app.signin');
    $scope.showLogOut = false;
    $scope.showBreadcrum = false;

    // if ($cookies.get('userData')) {
    //   $location.path(appConfig.loginRedirect);
    // }

    $scope.$on('$locationChangeStart', function (event) {
      if (!$cookies.get('userData')) {
        event.preventDefault();
      }
    })

    /*logout */
    $scope.logout = function () {
      loginService.logout().success(function () {
        $cookieStore.remove('userData');
        $state.go('app.signin');
      }, function (error) {
        console.log(error);
      });
    };

    $rootScope.$on('$stateChangeStart', function (event, preState, toState, toParams) {
      $scope.stateUrl = preState.url.substring(1);
      if (preState.name === 'app.profile') {
        $scope.showLogOut = true;
      } else if (preState.name === 'app.project_details') {
        $scope.showLogOut = true;
      } else if (preState.name === 'app.track_status') {
        $scope.showLogOut = true;
      } else {
        $scope.showLogOut = false;
      }
      if (preState.name === 'app.signin') {
        $scope.showBreadcrum = false;
      } else {
        $scope.showBreadcrum = true;
      }
    });
  }
]);
