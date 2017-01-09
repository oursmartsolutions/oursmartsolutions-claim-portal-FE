/**
 * Created by rkale on 8/16/2016.
 */
var module = angular.module('claimPortalApp');
module.factory('ProjectModel', function ($injector, OnsiteModal, OnsiteExpenceAproveModal, ProjectTeamModal) {
  function Project(modelData) {
    this._id = modelData._id;
    this.projectId = modelData.projectId;
    this.projectName = modelData.projectName;
    this.clientName = modelData.clientName;
    this.projectManagerId = modelData.projectManagerId;
    this.deliveryManagerId = modelData.deliveryManagerId;
    this.estimationDate = modelData.estimationDate;
    this.extendedEstimationDate = modelData.extendedEstimationDate;
    this.projectStatus = modelData.projectStatus;
    this.startDate = modelData.startDate;
    this.endDate = modelData.endDate;
    this.totalDuration = modelData.totalDuration;

    this.projectTeam = new ProjectTeamModal(modelData.projectTeam || {});
    this.onSite = new OnsiteModal(modelData.onSite || {});
    this.onSiteExpence = new OnsiteExpenceAproveModal(modelData.onSiteExpence || {});

  }


  Project.prototype.save = function () {
    var projectService = $injector.get('projectService');
    return projectService.createSale(this);
  };


  return Project;
});
