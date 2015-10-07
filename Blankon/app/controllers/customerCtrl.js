"use distinct";
angular.module('ajsApp')
.controller('customerCtrl', function ($scope, $routeParams, permission) {
    console.log(permission);
    $scope.test = "hello";
});