'use strict';

/* Directives */

var mixDirective = angular.module('mixDirective', []);
 
mixDirective.directive('mixPlugin', function() {
    return {        
        restrict: 'A',
        link: function(scope, element, attrs) {
            $('#Grid').mixitup(scope.$eval(attrs.mixPlugin));
        }
    };
});
