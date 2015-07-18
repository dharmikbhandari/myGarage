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


    initializeDB();


});

/***** Database *****/
function initializeDB()
{

    //http://stackoverflow.com/questions/26604952/a-simple-cordova-android-example-including-sqlite-read-write-and-search
    // Wait for Cordova to load
    document.addEventListener("deviceready", onDeviceReady, false);

}
// Cordova is ready
function onDeviceReady() {
    var db = window.openDatabase("Database", "1.0", "myGarageDB", 200000);
    db.transaction(populateDB, errorCB);
}

// Populate the database
function populateDB(tx) {
    tx.executeSql('CREATE TABLE IF NOT EXISTS Vehicle (Id INTEGER PRIMARY KEY AUTOINCREMENT, Name,Number,CurrentMeterReading)');
}

// Transaction error callback
function errorCB(err) {
    console.log("Error processing SQL: " + err.code);
}

// Query the database
function executeQuery(query)
{
    try
    {
        
        var db = window.openDatabase("Database", "1.0", "myGarageDB", 200000);
         db.transaction(function (tx) {
            console.log("In", query);
             tx.executeSql(query, [], function (tx, result) {

               dataset = result.rows;

                for (var i = 0, item = null; i < dataset.length; i++) {

                    item = dataset.item(i);

                    console.log("Result:", item);
                }
             

            }, function (tx,error){
                console.log("Error in query:" + error.code);
               
            });

        });

        return r;

    }
    catch(e)
    {
        
    }

}

myGarageApp.service('VehicleService', function () {
    this.Insert = function (a) {
        return MathService.multiply(a, a);
    }
});



/***** General Controller *****/
myGarageApp.controller('mainController', function ($scope) {
    $scope.message = 'Welcome Saheb...!';
    $scope.Enter = function () {
        location.href = "#/menu";
    };
});

myGarageApp.controller('menuController', function ($scope, $mdSidenav) {
    $scope.VehicleEnter = function () {
        location.href = "#/vehicle/list";
    };
    $scope.toggleMenu = function () {
        $mdSidenav('menu').toggle();
    };
    $scope.onSwipeLeft = function () {
        alert("Hello");
        $mdSidenav('menu').toggle();
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
myGarageApp.controller('vehicleAddController', function ($scope, $mdToast) {

    $scope.addVehicle=function()
    {
        //var result = executeQuery('INSERT INTO Vehicle (Name,Number,CurrentMeterReading) VALUE ("' + $scope.vehicleAdd.VehicleName + '","' + $scope.vehicleAdd.VehicleNumber + '","' + $scope.vehicleAdd.CurrentMeterReading + '")');
      executeQuery('select * from Vehicle');

      

        //  console.log("Error:", flag);
        //if (!flag)
        //{
        //    $mdToast.show($mdToast.simple().content($scope.vehicleAdd.VehicleName + ' added !'));
            
        //}
        
    }
});

myGarageApp.controller('vehicleListController', function ($scope, $rootScope) {
    $scope.Navigate = function () {
    };
});
