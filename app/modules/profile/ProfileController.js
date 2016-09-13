'use strict';

function ProfileCtrl($scope, $state, $timeout, ProfileService, CONSTANTS) {

	var init = function() {
			$scope.profileInfo = ProfileService.getMyInfo();	
	}

	$scope.free = function(creature) {
		$scope.loading = true;
		$timeout(function(){
			$scope.profileInfo = ProfileService.removeCreature(creature);
			$scope.loading = false;
		}, CONSTANTS.FREE_TIME);
			
	}

	$scope.huntMore = function() {
			$state.go('home');
	}

		init();
}

ProfileCtrl.$inject = ['$scope', '$state', '$timeout', 'ProfileService', 'CONSTANTS'];
module.exports = ProfileCtrl;