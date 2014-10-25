'use strict';

/* Controllers */

var CPS = angular.module('cpsController', []);
 
CPS.controller('HomeCtrl', ['$scope', '$rootScope', '$http', '$route',
  function HomeCtrl($scope, $rootScope, $http, $route) {
    //passes $route to the view for activeTab
    $scope.$route = $route;

  }]);

 
CPS.controller('GalleryCtrl', ['$scope', '$http', '$routeParams',
  function($scope, $http) {
    $http.get('data/gallery.json').success(function(data) {
      $scope.gallery = data;
    });
 
  }]);


CPS.controller('ServicesCtrl', ['$scope', '$rootScope', '$http', '$route',
  function ServicesCtrl($scope, $rootScope, $http, $route) {
    $scope.$route = $route;
  }]);


CPS.controller('ContactCtrl', ['$scope', '$rootScope', '$http', '$route',
  function ContactCtrl($scope, $rootScope, $http, $route) {
      
      // $http.get('/app/contact.html').success(function (data) {
      //     $rootScope.pages = data;
      // });
      
      $scope.$route = $route;

      //contact form stuff
      $scope.lastForm = {};

      $scope.sendForm = function (form) {
          $scope.lastForm = angular.copy(form);
          $http({
              url: "//forms.brace.io/jeanette@creativepaintingandstenciling.com",
              method: 'POST',
              data: {
                  name: $scope.form.name,
                  email: $scope.form.email,
                  phone: $scope.form.phone,                  
                  message: $scope.form.message
              },
              headers: { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
              }
          }).success(function (data, status, headers, config) {
              $scope.resultData = data;
              //alert("Message sent successfully. We'll get in touch with you soon.");
              $(".contact-success").show();
              $location.path( "app/contact.html" );

          }).error(function (data, status, headers, config) {
              $scope.resultData = data;
              $(".contact-fail").show();
              //alert("Sending message failed.");
          });
      }

      $scope.resetForm = function () {
          $scope.form = angular.copy($scope.lastForm);
      }
      ContactCtrl.$inject = ['$scope', '$http'];
  }]);

//url: "data/email.php", 'contactname': $scope.form.name,headers: { 'Content-Type': 'application/x-www-form-urlencoded' }

