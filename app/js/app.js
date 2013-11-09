'use strict';


// Declare app level module which depends on filters, and services
angular.module('cps', [
  'ngRoute',
  'cpsController',
  //'cps.filters',
  //'cps.services',
  'mixDirective',
  //'cps.controllers'
]).
config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/home', { templateUrl: '/app/home.html', controller: 'HomeCtrl', activeTab: 'home' });
    $routeProvider.when('/gallery', { templateUrl: '/app/gallery.html', controller: 'HomeCtrl', activeTab: 'gallery' });
    $routeProvider.when('/services', { templateUrl: '/app/services.html', controller: 'ServicesCtrl', activeTab: 'services' });
    $routeProvider.when('/contact', { templateUrl: '/app/contact.html', controller: 'ContactCtrl', activeTab: 'contact' });
    $routeProvider.otherwise({ redirectTo: '/home' });
}]);



