var myApp = angular.module("myApp", ["ui.router", "ngCookies"]);
myApp.controller("MainController", MainController);
myApp.controller("OrderPageController", OrderPageController);

myApp.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
	$stateProvider.state('main', {
		url: '/',
		templateUrl: '/NgApp/views/main.html',
		controller: MainController,
		controllerAs: 'controller'
	});
    $stateProvider.state('orderpage', {
        url: '/orderpage.html',
        templateUrl: '/NgApp/views/orderpage.html',
        controller: OrderPageController,
        controllerAs: 'controller'
    });

    $urlRouterProvider.otherwise('/notFound');
    $locationProvider.html5Mode(true);
}); 