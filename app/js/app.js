'use strict';


// Declare app level module which depends on filters, and services
angular.module('cps', [
  'ngRoute',
  //'cps.filters',
  //'cps.services',
  //'cps.directives',
  //'controllers'
]).
config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/home', { templateUrl: '/app/home.html', controller: 'HomeCtrl', activeTab: 'home' });
    $routeProvider.when('/gallery', { templateUrl: '/app/gallery.html', controller: 'HomeCtrl', activeTab: 'gallery' });
    $routeProvider.when('/services:slug', { templateUrl: '/app/services.html', controller: 'ServicesCtrl', activeTab: 'services' });
    $routeProvider.when('/contact:slug', { templateUrl: '/app/contact.html', controller: 'ContactCtrl', activeTab: 'contact' });
    $routeProvider.otherwise({ redirectTo: '/home' });
}]);

//var CPSSite = angular.module('CPSSite', []);
//
//CPSSite.config(function ($routeProvider) {
//  $routeProvider
//    .when('/page/:slug', {templateUrl: 'partials/page.html', controller: 'RouteController'})
//    .otherwise({redirectTo: '/page/home'});
//});
//
function HomeCtrl($scope, $rootScope, $http, $route) {
    // Load pages on startup
    $http.get('/app/home.html').success(function (data) {
        $rootScope.pages = data;
        
    });
    $scope.$route = $route;
    
    // Set the slug for menu active class
    //  $scope.$on('routeLoaded', function (event, args) {
    //      alert('foo');
    //    $scope.slug = args.slug;
    //  });
}
//
//function RouteController ($scope, $rootScope, $routeParams) {
//  // Getting the slug from $routeParams
//  var slug = $routeParams.slug;
//  
//  $scope.$emit('routeLoaded', {slug: slug});
//  $scope.page = $rootScope.pages[slug];
//}