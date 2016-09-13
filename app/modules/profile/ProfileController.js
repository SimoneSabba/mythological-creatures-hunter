'use strict';

function ProfileCtrl($scope, $state, ProfileService) {

	var init = function() {
			$scope.profileInfo = ProfileService.getMyInfo();	
	}

	$scope.free = function(creature) {
			$scope.profileInfo = ProfileService.removeCreature(creature);
	}

	$scope.huntMore = function() {
			$state.go('home');
	}

		init();
}

ProfileCtrl.$inject = ['$scope', '$state', 'ProfileService'];
module.exports = ProfileCtrl;