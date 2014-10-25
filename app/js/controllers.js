'use strict';

/* Controllers */

var CPS = angular.module('cpsController', []);

CPS.controller('HomeCtrl', ['$scope', '$rootScope', '$http', '$route',
    function HomeCtrl($scope, $rootScope, $http, $route) {
        //passes $route to the view for activeTab
        $scope.$route = $route;

    }
]);


CPS.controller('GalleryCtrl', ['$scope', '$http', '$routeParams',
    function($scope, $http) {
        $http.get('data/gallery.json').success(function(data) {
            $scope.gallery = data;
        });

    }
]);


CPS.controller('ServicesCtrl', ['$scope', '$rootScope', '$http', '$route',
    function ServicesCtrl($scope, $rootScope, $http, $route) {
        $scope.$route = $route;
    }
]);


CPS.controller('ContactCtrl', ['$scope', '$rootScope', '$http', '$route',
    function ContactCtrl($scope, $rootScope, $http, $route) {

        $scope.$route = $route;

        //contact form stuff
        $scope.lastForm = {};
        //had to use ajax instead of $http b/c i was getting cross origin error using brace
        $scope.sendForm = function(form) {
            $scope.lastForm = angular.copy(form);
            $.ajax({
                url: "//forms.brace.io/jeanette@creativepaintingandstenciling.com",
                method: 'POST',
                data: {
                    name: $scope.form.name,
                    email: $scope.form.email,
                    phone: $scope.form.phone,
                    message: $scope.form.message
                },
                dataType: 'json',
                success: function(data) {
                    $scope.resultData = data;
                    $(".contact-success").show();

                    $('form').find("input[type=text], input[type=email], textarea").val("");
                    $scope.form = angular.copy($scope.lastForm);
                    $scope.contactForm.$setPristine();
                },
                error: function(data) {
                    $scope.resultData = data;
                    $(".contact-fail").show();
                }
            });
        }

        $scope.resetForm = function() {
            $scope.form = angular.copy($scope.lastForm);
        }
        ContactCtrl.$inject = ['$scope', '$http'];
    }
]);