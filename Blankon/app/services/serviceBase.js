"use distinct";
angular.module('serviceBase', [])
    .service('userService', function () {
        this.authorize = function () {
            console.log(" You have now called a service");
        }
    });