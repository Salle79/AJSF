'use strict';
angular.module('mainRoute', ['ngRoute', 'serviceBase'])

.config(['$routeProvider',
  function ($routeProvider) {
      $routeProvider
          .when('/phones', {
            templateUrl: 'partials/phone-list.html',
            controller: 'PhoneListCtrl',
            resolve: {
                permission: function (userService, $route) {
                    return authorizationService.permissionCheck([roles.user]);
                },
            }

        })
          .otherwise({
            templateUrl: 'app/views/index.html',
            controller: 'testCtrl',
            resolve: {
                permission: function (userService, $route) {
                    return userService.authorize();
                },
            }
        });
  }]);