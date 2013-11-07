'use strict';


// Declare app level module which depends on filters, and services
angular.module('cps', [
  'ngRoute',
  //'cps.filters',
  //'cps.services',
  //'cps.directives',
  //'controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {templateUrl: '/app/home.html', controller: 'HomeCtrl'});
  $routeProvider.when('/gallery', {templateUrl: '/app/gallery.html', controller: 'GalleryCtrl'});
  $routeProvider.when('/services:slug', {templateUrl: '/app/services.html', controller: 'ServicesCtrl'});
  $routeProvider.when('/contact:slug', {templateUrl: '/app/contact.html', controller: 'ContactCtrl'});
  $routeProvider.otherwise({redirectTo: '/home'});
}]);

//var CPSSite = angular.module('CPSSite', []);
//
//CPSSite.config(function ($routeProvider) {
//  $routeProvider
//    .when('/page/:slug', {templateUrl: 'partials/page.html', controller: 'RouteController'})
//    .otherwise({redirectTo: '/page/home'});
//});
//
function HomeCtrl ($scope, $rootScope, $http) {
  // Load pages on startup
  $http.get('/app/home.html').success(function (data) {
    $rootScope.pages = data;
  });

  // Set the slug for menu active class
  $scope.$on('routeLoaded', function (event, args) {
      alert('foo');
    $scope.slug = args.slug;
  });
}
//
//function RouteController ($scope, $rootScope, $routeParams) {
//  // Getting the slug from $routeParams
//  var slug = $routeParams.slug;
//  
//  $scope.$emit('routeLoaded', {slug: slug});
//  $scope.page = $rootScope.pages[slug];
//}