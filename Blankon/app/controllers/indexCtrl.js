"use distinct";
angular.module('ajsApp')
.controller('testCtrl', function ($scope, $routeParams, customerModel) {
    $scope.test = customerModel.view();
    console.log(customerModel.view());

    console.log(customerModel.view());
   
});