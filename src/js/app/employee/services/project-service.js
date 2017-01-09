var app = angular.module('claimPortalApp');

app.factory('projectService', ['$http', '$q', 'appConfig', '$cookies', 'ProjectModel',
  function ($http, $q, appConfig, $cookies, ProjectModel) {
    //  var BASEURI = appConfig.apiUrl;
    var BASEURI = appConfig.locUri
    var createProject = function (data) {
      return $http({
        method: 'POST',
        url: BASEURI + '/api/project',
        data: data
      })
    };

    var updateProject = function (data) {
      return $http({
        method: 'PUT',
        url: BASEURI + '/api/project/' + data._id,
        data: data
      })
    }

    var getProject = function () {
      var deferred = $q.defer();
      $http({
        method: 'GET',
        url: BASEURI + '/api/project'
      }).then(function (project) {
        console.log(project);
        var projectList = project.data.map(function (project) {
          return new ProjectModel(project);
        });
        console.log("ProjectModal", projectList);
        deferred.resolve(projectList);

      }, function () {});
      return deferred.promise;
    };

    var getProjectById = function (id) {
      return $http({
        method: 'GET',
        url: BASEURI + '/api/project/' + id
      })
    };

    var updateProjectById = function (data) {
      return $http({
        method: 'POST',
        url: BASEURI + '/api/project',
        data: data
      })
    };
    var deleteProject = function (id) {
      return $http({
        method: 'DELETE',
        url: BASEURI + '/api/project/' + id
      })
    };

    return {
      createProject: createProject,
      updateProject: updateProject,
      updateProjectById: updateProjectById,
      getProject: getProject,
      getProjectById: getProjectById,
      deleteProject: deleteProject
    }
  }
]);
