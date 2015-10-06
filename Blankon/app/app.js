"use strict";
var ajsApp = angular.module('ajsApp', []);

ajsApp.controller("ajsMainCtrl", function($scope){
    console.log("its working!");
    $scope.test = "hello";
});