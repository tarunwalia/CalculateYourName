(function (){
	'use strict';

	angular.module('CalcApp', [])
	.controller('CalcController', function($scope) {
		$scope.name="";
    $scope.totalValue=0;
		$scope.displayNumericValue = function(){
			var nameValue = calculateValue($scope.name);
			$scope.totalValue = nameValue;
		};

		function calculateValue(string){
			var valueString = 0;
			for (var i = 0; i < string.length; i++) {
				valueString += string.charCodeAt(i);
			}
			return valueString;
		};
	});
}) ();
