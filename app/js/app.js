'use strict';


// Declare app level module which depends on filters, and services
angular.module('cps', [
  'ngRoute',
  'cpsController',
  //'cps.filters',
  //'cps.services',
  'mixDirective',
]).
config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('!');
    $routeProvider.when('/home', { templateUrl: 'views/home.html', controller: 'HomeCtrl', activeTab: 'home' });
    $routeProvider.when('/gallery', { templateUrl: 'views/gallery.html', controller: 'HomeCtrl', activeTab: 'gallery' });
    $routeProvider.when('/services', { templateUrl: 'views/services.html', controller: 'ServicesCtrl', activeTab: 'services' });
    $routeProvider.when('/contact', { templateUrl: 'views/contact.html', controller: 'ContactCtrl', activeTab: 'contact' });
    $routeProvider.otherwise({ redirectTo: '/home' });

    
}]);




