var myGarageApp = angular.module('myGarage', ['ngMaterial', 'ngRoute', 'ngAnimate']);


// configure routes
myGarageApp.config(function ($routeProvider) {
    $routeProvider

        /*****route for generalPages*****/

          // route for the main page
        .when('/', {
            templateUrl: 'main.html',
            controller: 'mainController'
        })

        // route for the home page
        .when('/home', {
            templateUrl: 'generalPages/home.html',
            controller: 'homeController'
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

        // route for the contact page
        .when('/menu', {
            templateUrl: 'menu.html',
            controller: 'menuController'
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

myGarageApp.run(function ($rootScope) {
    $rootScope.navigateTo = function (navigateUrl) {
        location.href = navigateUrl;
    };
});

/***** General Controller *****/
myGarageApp.controller('mainController', function ($scope) {
    $scope.message = 'Welcome Saheb...!';
    $scope.Enter = function () {
        location.href = "#/menu";
    };
});

myGarageApp.controller('menuController', function ($scope) {
    $scope.VehicleEnter = function () {
        location.href = "#/vehicle/list";
    };
});


myGarageApp.controller('homeController', function ($scope) {
    $scope.message = 'Welcome home Saheb...!';
    $scope.footerText = "home";
});


myGarageApp.controller('aboutController', function ($scope) {
    $scope.message = 'What are you looking for....? Is this looking good...?';
    $scope.footerText = "about";
});

myGarageApp.controller('contactController', function ($scope) {
    $scope.message = 'Contact Saheb for chilling out....';
    $scope.footerText = "Contact Footer";
});



/***** Vehicle Controller *****/
myGarageApp.controller('vehicleAddController', function ($scope) {

    $scope.addVehicle=function()
    {
        console.log("Vehicle No:" + $scope.vehicleAdd.VehicleNo);
        console.log("CurrentMeterReading:" + $scope.vehicleAdd.CurrentMeterReading);
    }
});

myGarageApp.controller('vehicleListController', function ($scope, $rootScope) {
    $scope.Navigate = function () {
    };
});
