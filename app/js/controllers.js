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

cpsController.controller('ServicesCtrl', ['$scope', '$rootScope', '$http', '$route',
  function ServicesCtrl($scope, $rootScope, $http, $route) {
    // Load pages on startup
    $http.get('/app/services.html').success(function (data) {
        $rootScope.pages = data;
        
    });    
    //passes $route to the view for activeTab
    $scope.$route = $route;
  }]);

cpsController.controller('ContactCtrl', ['$scope', '$rootScope', '$http', '$route',
  function ContactCtrl($scope, $rootScope, $http, $route) {
    // Load pages on startup
    $http.get('/app/contact.html').success(function (data) {
        $rootScope.pages = data;
        
    });    
    //passes $route to the view for activeTab
    $scope.$route = $route;

    $scope.username1 = 'Peter Parker';
    $scope.email1 = 'pparker@gmail.com';

    $scope.submitForm = function () {
        console.info("Here I should implement the logic to send a request to the server.");
    }

  }]);