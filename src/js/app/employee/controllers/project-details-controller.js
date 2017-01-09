/**
 * Created by kveena on 12/19/2016.
 */
angular.module("claimPortalApp")
  .controller("ProjectDetailsCtrl", ['$scope', '$state', 'projectService', 'ProjectModel',
    function ($scope, $state, projectService, ProjectModel) {
      var prjctDtlsCtrl = this;
      prjctDtlsCtrl.projectDetailsArr = [];
      projectService.getProject().then(function (response) {
        prjctDtlsCtrl.projectDetailsArr = response;
      })


      prjctDtlsCtrl.currentPage = 0;
      prjctDtlsCtrl.paging = {
        total: prjctDtlsCtrl.projectDetailsArr.length,
        current: 1,
        itemsperpage: 4

      };
      prjctDtlsCtrl.BackToProfilePage = function () {
        $state.go('app.profile');
      };
      prjctDtlsCtrl.onNextToApplyClaim = function () {
        $state.go('app.claim_form');
      };
      prjctDtlsCtrl.onSelectingProject = function (projectObj, index) {
        projectObj.isSelected = !projectObj.isSelected;
      }
    }
  ]);
