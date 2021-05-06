
var app=angular.module("class", ['ngAnimate', 'ngSanitize', 'ui.bootstrap'])




app.controller("controller",function($scope){
       
  $scope.tabs = [
    { title:'Dynamic Title 1', content:'Dynamic content 1' },
    { title:'Dynamic Title 2', content:'Dynamic content 2', disabled: true }
  ];



  $scope.model = {
    name: 'Tabs'
  };
     $scope.create=function(){
      
         console.log("fdsgd")
     }
   
   
     
})

/*/*
app.config(function($routeProvider){
  $routeProvider
  .when("/home",{
   templateUrl:"./home/home.html",
   controller:"controller"
 }).when("/addStudent",{
     templateUrl:"./create/create.html",
     controller:"controller"
   }).when("/search",{
     templateUrl:"./search/search.html",
     controller:"controller"
   }).when("/topper",{
     templateUrl:"./topper/topper.html",
     controller:"controller"
   }).when("/seed",{
     templateUrl:"./seed/seed.html",
     controller:"controller"
   })
   .otherwise({
     redirectTo:"/home"
   })
 })
*/ 