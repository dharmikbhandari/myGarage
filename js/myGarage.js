var myGarageApp = angular.module('myGarage', ['ionic', 'ngRoute']);


// configure routes
myGarageApp.config(function ($routeProvider) {
    $routeProvider

        /*****route for generalPages*****/

        // route for the home page
        .when('/', {
            templateUrl: 'generalPages/home.html',
            controller: 'mainController'
        })

        // route for the about page
        .when('/about', {
            templateUrl: 'generalPages/about.html',
            controller: 'aboutController'
        })

        // route for the contact page
        .when('/contact', {
            templateUrl: 'generalPages/contact.html',
            controller: 'contactController'
        })



        /***** route for Vehicle *****/

        // route for the contact page
        .when('/vehicle/add', {
            templateUrl: 'vehicle/add.html',
            controller: 'vehicleAddController'
        })

        

    ;
});


/***** General Controller *****/
myGarageApp.controller('mainController', function ($scope) {
    $scope.message = 'Welcome Saheb...!';
});

myGarageApp.controller('aboutController', function ($scope) {
    $scope.message = 'What are you looking for....? Is this looking good...?';
});

myGarageApp.controller('contactController', function ($scope) {
    $scope.message = 'Contact Saheb for chilling out....';
});



/***** Vehicle Controller *****/
myGarageApp.controller('vehicleAddController', function ($scope) {
    $scope.VehicleNo = "Dharmik";
});
