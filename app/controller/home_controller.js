(function(){
//-----------------------------------------	
var homeController = function($scope){
	$scope.comp = "My Company | Bangalore ";
	$scope.message = " welcome to my company ";
}

angular.module("app").controller("homecontroller", homeController)
//-----------------------------------------	
}())
