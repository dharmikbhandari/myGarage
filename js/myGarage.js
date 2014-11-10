var myGarageApp = angular.module('myGarage', ['ngRoute']);


// configure routes
myGarageApp.config(function ($routeProvider) {
    $routeProvider

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
        });
});

myGarageApp.controller('mainController', function ($scope) {
    $scope.message = 'Hello Everyone!';
});

myGarageApp.controller('aboutController', function ($scope) {
    $scope.message = 'Look! I am an about page.';
});

myGarageApp.controller('contactController', function ($scope) {
    $scope.message = 'Contact us! JK. This is just a demo.';
});
