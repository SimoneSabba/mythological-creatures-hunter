'use strict';

function HeaderCtrl($scope, ProfileService) {
    $scope.profileInfo = ProfileService.getMyInfo();
}

HeaderCtrl.$inject = ['$scope', 'ProfileService'];
module.exports = HeaderCtrl;