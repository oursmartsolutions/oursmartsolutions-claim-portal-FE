/**
 * Created by rkale on 8/16/2016.
 */
var module = angular.module('claimPortalApp');
module.factory('ProjectTeamModal', function ($injector) {
  function ProjectTeam(modelData) {
    this._id = modelData._id;
    this.feTeamLeadId = modelData.feTeamLeadId;
    this.feTeamMembers = modelData.feTeamMembers;
    this.beTeamLeadId = modelData.beTeamLeadId;
    this.beTeamMembers = modelData.beTeamMembers;
    this.testingTeamLeadId = modelData.testingTeamLeadId;
    this.testingTeamMembers = modelData.testingTeamMembers;
  };
  return ProjectTeam;
});
