'use strict';

function ProfileCtrl($scope, $state, $timeout, $filter, ProfileService, CONSTANTS) {

	function initSortingProperties () {
		$scope.orderingType = [
			{ name: 'mana', value: 'mana' },
			{ name: 'age', value: 'age' },
			{ name: 'name', value: 'name' },
			{ name: 'capture time', value: 'captureTime'}
		];
	}

	var init = function() {
		initSortingProperties();
		$scope.orderingProperty = $scope.orderingType[2];
		$scope.profileInfo = ProfileService.getMyInfo();
	};

	$scope.free = function(creature) {
		$scope.loading = true;
		$timeout(function(){
			$scope.profileInfo = ProfileService.removeCreature(creature);
			$scope.loading = false;
		}, CONSTANTS.FREE_TIME);
	};

	$scope.huntMore = function() {
		$state.go('home');
	};

	$scope.formatDate = function(captureTime) {
		return $filter('date')(captureTime, CONSTANTS.DATE_FORMAT)
	};

	init();
}

ProfileCtrl.$inject = ['$scope', '$state', '$timeout', '$filter', 'ProfileService', 'CONSTANTS'];
module.exports = ProfileCtrl;