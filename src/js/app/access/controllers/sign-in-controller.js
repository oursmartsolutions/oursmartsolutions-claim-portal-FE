/**
 * Created by kveena on 12/15/2016.
 */
angular.module("claimPortalApp")
  .controller("signInController", ['$scope', '$state', '$mdSidenav', '$rootScope', 'ToastService', 'loginService', 'appConfig', '$location', '$cookies',
    function ($scope, $state, $mdSidenav, $rootScope, ToastService, loginService, appConfig, $location, $cookies) {
      var signInCtrl = this;
      $rootScope.showLogOut = false;
      signInCtrl.emailId = '';
      signInCtrl.password = '';

      // Open Side Nav For Credentials
      signInCtrl.toggleSideNav = function () {
        $mdSidenav('right').toggle();
      }

      signInCtrl.submitCredentials = function () {
        loginService.login({
          email: signInCtrl.emailId,
          password: signInCtrl.password
        }).then(function (response) {
          if (response) {
            $state.go($scope.app.loginRedirect);
            console.log(response);
            return;
          }
          if ($scope.$prevState && $scope.$prevStateParams) {
            if (_.contains(['app.signin', 'app.forgot', 'app.signout'], $scope.$prevState)) {
              $state.go($scope.app.loginRedirect);
            } else {
              $state.go($scope.$prevState, $scope.$prevStateParams);
            }
          } else {
            $state.go($scope.app.loginRedirect);
          }
        }, function (err) {
          ToastService.toastError('', 'Plase check your credentials');
        });
      };
    }
  ]);
