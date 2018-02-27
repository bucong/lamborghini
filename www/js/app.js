var app=angular.module('webApp',['ngRoute']);
app.config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider){
    $locationProvider.hashPrefix("");
    $routeProvider
        .when('/home',{templateUrl:'./pages/home.tpl.html',controller:'homeCtrl'})
        .when('/models',{templateUrl:'./pages/models.tpl.html',controller:'modelsCtrl'})
        .when('/brand',{templateUrl:'./pages/brand.tpl.html',controller:'brandCtrl'})
        .when('/owner',{templateUrl:'./pages/owner.tpl.html',controller:'ownerCtrl'})
        .when('/experience',{templateUrl:'./pages/experience.tpl.html',controller:'experienceCtrl'})
        .when('/store',{templateUrl:'./pages/store.tpl.html',controller:'storeCtrl'})
        .when('/login',{templateUrl:'./pages/login.tpl.html',controller:'loginCtrl'})
        .when('/register',{templateUrl:'./pages/register.tpl.html',controller:'registerCtrl'})
        .when('/detail',{templateUrl:'./pages/detail.tpl.html',controller:'detailCtrl'})
        .when('/trySub',{templateUrl:'./pages/trySub.tpl.html',controller:'trySubCtrl'})
        .otherwise('/home')
}]);
