angular.module('application')
.controller('header', function($scope, $rootScope, $state){
	$scope.pages = $rootScope.pages;
	$rootScope.$on('$stateChangeSuccess', function(event, toState){
		$scope.currentPage = toState;
	});
});