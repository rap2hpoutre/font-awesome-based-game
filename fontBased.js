angular.module('fontBased', [])
	.controller('FontBasedMainController', ['$scope', function($scope) {

		$scope.townElements = [];
		$scope.info = 'Click on something...';

		var items = ['home', 'male', 'female', 'child', 'tree', 'empty'];
		for (var i=0; i<20; i++) {
			$scope.townElements.push({icon: items[Math.floor(Math.random()*items.length)]});
		}

		$scope.setInfo = function(a) {
			$scope.info = 'You clicked ' + a;
		}

	}]);