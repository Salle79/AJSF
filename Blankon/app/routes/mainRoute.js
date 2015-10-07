'use strict';
angular.module('mainRoute', ['ngRoute', 'service'])

.config(['$routeProvider',
  function ($routeProvider) {
      var loginPage = '/newValue';
      $routeProvider
          .when('/phones', {
            templateUrl: 'app/views/customer.html',
            controller: 'customerCtrl',
            resolve: {
                permission: function (userService, $route) {
                    return userService.authorize(loginPage);
                },
            }
        })
          .otherwise({
            templateUrl: 'app/views/index.html',
            controller: 'testCtrl',
           
        });
  }]);