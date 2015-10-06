'use strict';
var app = angular.module('mainRoute', ['ngRoute'])

.config(['$routeProvider',
  function ($routeProvider) {
      $routeProvider.
        when('/phones', {
            templateUrl: 'partials/phone-list.html',
            controller: 'PhoneListCtrl'
        }).
        otherwise({
            templateUrl: 'app/views/index.html',
            controller: 'testCtrl'
            
        });
  }]);