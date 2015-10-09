angular.module('ajsApp')
    .service('customerModel', function ($location, $q) {
        var customer = {
            // has all the same properties as User_1234_DtoModel 
            // ...plus... 
            fullname: 'Fred Smith',
            age: 71,
            birthdate: Date("11/05/1940"),  // for doing date math
            birthdayForDisplay: "May 11, 1940",
            registeredDate: Date("04/22/2014"), // for doing date math
            registeredDateForDisplay: "Yesterday",
            hasChildren: false,
            hasPets: true,
            isOlder40: true,
            locationForDisplay: "Saugus, Ma",
            isLoaded: true,
            errors: [{ field: "is_married", err_msg: "Married status is required" }]
        }
       
        this.checkErrors = function () {
            return customer;
        }
        this.view = function () {
            return(customer);
        }
        this.update = function () {
            return "custome data updated";
        }
        this.get = function () {
            return "Fetching new customer data";
        }
        this.size = function () {
            return customer.length();
        }
    });