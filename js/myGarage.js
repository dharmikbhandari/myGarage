var myGarageApp = angular.module('myGarage', ['ngMaterial', 'ngRoute', 'ngAnimate', 'ngCordova']);


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


    /***** Database *****/
    //http://stackoverflow.com/questions/26604952/a-simple-cordova-android-example-including-sqlite-read-write-and-search
    // Wait for Cordova to load
    document.addEventListener("deviceready", onDeviceReady, false);

    // Cordova is ready
    function onDeviceReady() {
        var db = window.openDatabase("Database", "1.0", "Cordova Demo", 200000);
        db.transaction(populateDB, errorCB, successCB);
    }

    // Populate the database
    function populateDB(tx) {
        tx.executeSql('CREATE TABLE IF NOT EXISTS DEMO (id INTEGER PRIMARY KEY AUTOINCREMENT, name,number)');
    }

    // Transaction error callback
    function errorCB(err) {
        alert("Error processing SQL: " + err.code);
    }
    // Transaction success callback
    function successCB() {
        var db = window.openDatabase("Database", "1.0", "Cordova Demo", 200000);
        db.transaction(queryDB, errorCB);
    }
    // Query the database
    function queryDB(tx) {
        tx.executeSql('INSERT INTO DEMO (name,number) VALUES ("Dharmik","123")');
        tx.executeSql('SELECT * FROM DEMO', [], querySuccess, errorCB);
    }
    // Query the success callback
    function querySuccess(tx, results) {
        var tblText = '<table id="t01"><tr><th>ID</th> <th>Name</th> <th>Number</th></tr>';
        var len = results.rows.length;
        for (var i = 0; i < len; i++) {
            var tmpArgs = results.rows.item(i).id + ",'" + results.rows.item(i).name
                    + "','" + results.rows.item(i).number + "'";
            tblText += '<tr onclick="goPopup(' + tmpArgs + ');"><td>' + results.rows.item(i).id + '</td><td>'
                    + results.rows.item(i).name + '</td><td>' + results.rows.item(i).number + '</td></tr>';
        }
        tblText += "</table>";
        alert(tblText);
    }




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
