"use distinct";
angular.module('authenitcationService', ['dataService'])
    .service('userService', function ($location, $q) {

        this.authorize = function (loginPage) {
            if (this.isAuthorized() === true) {
                console.log("You are Authorized");
                return $q.when(this.getCredentials());
            }
            else {
                console.log("You are not Authorized, relocating to safe webpage");
                $location.path(loginPage);
            }
        }

        this.isAuthorized = function () {
            return true;
        }

        this.getCredentials = function () {
            return("ID and Username of authorized user");
        }
    });