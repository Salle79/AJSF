"use strict";
var webApiBaseUrl = "http://localhost:10422/api/";
angular.module("dataService", ['ngResource'])
.factory('categoryItem', function ($resource) {
    return $resource(webApiBaseUrl + 'ExampleUrl/:id', {}, {
        query: { method: 'GET', isArray: true }
    });
})

.factory('categories', function ($resource) {
    return $resource(webApiBaseUrl + 'ExampleUrl', {}, {
        query: { method: 'GET', isArray: true }
    });
});