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


var cpsSubmitDirective = {
        'rcSubmit': function () {
            return {
                restrict: 'A',
                require: ['cpsSubmit', '?form'],
                controller: ['$scope', function ($scope) {
                    this.attempted = false;
 
                    this.setAttempted = function() {
                        this.attempted = true;
                    };
                }],
                compile: function(cElement, cAttributes, transclude) {
                    return {
                        pre: function(scope, formElement, attributes, controllers) {
 
                            var submitController = controllers[0];
 
                            scope.rc = scope.rc || {};
                            scope.rc[attributes.name] = submitController;
                        },
                        post: function(scope, formElement, attributes, controllers) {
 
                            var submitController = controllers[0];
                            var formController = (controllers.length > 1) ? 
                                                 controllers[1] : null;
 
                            var fn = $parse(attributes.rcSubmit);
 
                            formElement.bind('submit', function () {
                                submitController.setAttempted();
                                if (!scope.$$phase) scope.$apply();
 
                                if (!formController.$valid) return false;
 
                                scope.$apply(function() {
                                    fn(scope, {$event:event});
                                });
                            });
                        }
                    };
                }
            };
        }
    };