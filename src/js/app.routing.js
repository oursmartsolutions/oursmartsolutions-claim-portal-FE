/**
 * Created by kveena on 12/15/2016.
 */
angular.module('claimPortalApp')
  .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'js/app/access/views/app.html'
          //controller:'AppCtrl'
      })
      .state('app.signin', {
        url: '/sign-in',
        templateUrl: 'js/app/access/views/sign-in.html',
        controller: 'signInController',
        controllerAs: 'signInCtrl'
      })
      .state('app.forgot', {
        url: '/forgot',
        template: '<h1>forgot password</h1>'
      })
      .state('app.profile', {
        url: '/profile',
        templateUrl: 'js/app/employee/views/profile.html',
        controller: 'EmployeeDashboardCtrl',
        controllerAs: 'empDashboardCtrl'
      })
      .state('app.about', {
        url: '/about',
        templateUrl: 'js/app/access/views/about.html'
      })
      .state('app.services', {
        url: '/services',
        templateUrl: 'js/app/access/views/services.html'
      })
      .state('app.contact', {
        url: '/contact',
        templateUrl: 'js/app/access/views/contact.html'
      })
      .state('app.blog', {
        url: '/blog',
        templateUrl: 'js/app/access/views/blog.html'
      })
      .state('app.project_details', {
        url: '/project-details',
        templateUrl: 'js/app/employee/views/project-details-view.html',
        controller: 'ProjectDetailsCtrl',
        controllerAs: 'prjctDtlsCtrl'
      })
      .state('app.track_status', {
        url: '/track-status',
        templateUrl: 'js/app/employee/views/track-status-view.html',
        controller: 'TrackStatusCtrl',
        controllerAs: 'trckStsCtrl'
      })
      .state('app.claim_form', {
        url: '/claim-form',
        templateUrl: 'js/app/employee/views/apply-claim-form-view.html',
        controller: 'ApplyClaimController',
        controllerAs: 'claimCtrl'
      });


    $urlRouterProvider.otherwise('/app');
  }]);
