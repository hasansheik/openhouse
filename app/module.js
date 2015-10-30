(function(){
	
	angular.module("app",["ngRoute"])
	.config(function($routeProvider){
		$routeProvider.when("/",{
			controller : "firstController",
			templateUrl : "app/view/herolist.html"
		})
	});
	
}())

