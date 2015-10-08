'use strict';
angular.module('customerModel',[])
.factory('Book', ['$http', function($http) {  
    function Book(bookData) {
        if (bookData) {
            
        }
        // Some other initializations related to book
    };
    Book.prototype = {
        setData: function(bookData) {
            angular.extend(this, bookData);
        },
        load: function(id) {
            
        }
    };
    return Book;
}]);