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
        .when('/vehicle/add', {
            templateUrl: 'vehicle/add.html',
            controller: 'vehicleAddController'
        })
        .when('/vehicle/list', {
            templateUrl: 'vehicle/list.html',
            controller: 'vehicleListController'
        })



        

    ;
});


/***** General Controller *****/
myGarageApp.controller('mainController', function ($scope, $ionicPopover) {
    $scope.message = 'Welcome Saheb...!';

    $ionicPopover.fromTemplateUrl('templates/popover.html', {
        scope: $scope,
    }).then(function (popover) {
        $scope.popover = popover;
    });
    $scope.openPopover = function ($event) {
        $scope.popover.show($event);
    };
    $scope.closePopover = function () {
        $scope.popover.hide();
    };
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

myGarageApp.controller('vehicleListController', function ($scope) {
    $scope.popoverTemplate = 'templates/popover.html';
});
