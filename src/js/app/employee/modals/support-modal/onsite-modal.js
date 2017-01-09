/**
 * Created by rkale on 8/16/2016.
 */
var module = angular.module('claimPortalApp');
module.factory('OnsiteModal', function ($injector, AddOnsiteExpenceModal) {
  function OnsiteModal(modelData) {
    this._id = modelData._id;
    this.location = modelData.location;
    this.allotedBudget = modelData.allotedBudget;
    this.remainingBudget = modelData.remainingBudget;
    this.onSiteTeamMembers = modelData.onSiteTeamMembers;
    this.startDate = modelData.startDate;
    this.endDate = modelData.endDate;
    this.expences = [];
    if (modelData && modelData.expences) {
      this.expences = modelData.expences.map(function (expence) {
        return new AddOnsiteExpenceModal(expence);
      });
    }
  }

  return OnsiteModal;
});
