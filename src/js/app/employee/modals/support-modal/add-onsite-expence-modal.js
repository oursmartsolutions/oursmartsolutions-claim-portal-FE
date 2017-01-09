var module = angular.module('claimPortalApp');
module.factory('AddOnsiteExpenceModal', function ($injector) {
  function AddOnsiteExpences(modelData) {
    this._id = modelData._id;
    this.reason = modelData
    this.amount = modelData.amount;
    this.reciptNo = modelData.reciptNo;
    this.reciptDoc = modelData.reciptDoc;
    this.remainingBudget = modelData.remainingBudget;
  }
  return AddOnsiteExpences;
});
