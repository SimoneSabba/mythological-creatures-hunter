'use strict';

function HeaderCtrl($scope, ProfileService) {
    function init() {
			$scope.profileInfo = ProfileService.getMyInfo();
    }

    init();
}

HeaderCtrl.$inject = ['$scope', 'ProfileService'];
module.exports = HeaderCtrl;