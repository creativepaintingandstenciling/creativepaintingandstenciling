'use strict';

/* Controllers */

angular.module('cps.controllers', []).
  controller('HomeCtrl', [function() {
  $http.get('/home.html').success(function (data) {
    $rootScope.pages = data;
  });

  // Set the slug for menu active class
//  $scope.$on('routeLoaded', function (event, args) {
//    $scope.slug = args.slug;
//  });
  }])
  .controller('GalleryCtrl', [function() {

  }]);
  .controller('ServicesCtrl', [function() {

  }]);
  .controller('ContactCtrl', [function() {

  }]);
