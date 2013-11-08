'use strict';

/* Controllers */

var cpsController = angular.module('cpsController', []);
 
cpsController.controller('HomeCtrl', ['$scope', '$rootScope', '$http', '$route',
  function HomeCtrl($scope, $rootScope, $http, $route) {
    // Load pages on startup
    $http.get('/app/home.html').success(function (data) {
        $rootScope.pages = data;
        
    });    
    //passes $route to the view for activeTab
    $scope.$route = $route;
  }]);
 
cpsController.controller('GalleryCtrl', ['$scope', '$http', '$routeParams',
  function($scope, $http) {
    $http.get('data/gallery.json').success(function(data) {
      $scope.gallery = data;
    });
 
    
  }]);
