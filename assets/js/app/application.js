var mainApp = angular.module('MeanApp', ['ngMaterial','ui.router']);

mainApp.controller('appCtrl', ['$scope', function($scope){
	$scope.name = 'Hello World';
}]);