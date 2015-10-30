(function(){
	angular.module("app",["ngRoute"])
	.config(function($routeProvider){
		$routeProvider
		.when("/",{
			controller : "homecontroller",
			templateUrl : "app/views/main.html"
		})
		.when("/batman/:qty?",{
			controller : "batcontroller",
			templateUrl : "app/views/hero.html"
		})
		.when("/ironman",{
			controller : "ironcontroller",
			templateUrl : "app/views/hero.html"
		})
		.when("/spiderman",{
			controller : "spidercontroller",
			templateUrl : "app/views/hero.html"
		})
		.when("/rajani",{
			controller : "rajanicontroller",
			templateUrl : "app/views/hero.html"
		})
	})
	;
}());
