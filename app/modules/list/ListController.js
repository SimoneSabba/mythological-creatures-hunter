'use strict';

function ListCtrl($scope, $state, $timeout, CreaturesService, ProfileService) {

    function initForm() {
        $scope.isSubmitted = false;
    }

    function initInfo() {
        $scope.info = {};
    }

    function initSelectedCreature() {
        $scope.selectedCreature = {};
    }

    function initValidationErrors() {
        $scope.isValid = {};
    }
    
    function init() {
        initInfo();
        initSelectedCreature();
        initValidationErrors();
        initForm();
        $scope.creatures = CreaturesService.getCreatures();
        $scope.profileInfo = ProfileService.getMyInfo();
        $scope.isCatched = false;
    }

    $scope.hunt = function(creature) {
        initInfo();
        $scope.selectedCreature = creature;
    };

    $scope.isHunting = function(creature) {
        return creature && creature.type === $scope.selectedCreature.type ? true : false;
    };

    $scope.cancel = function() {
        initSelectedCreature();
        initInfo();
        initValidationErrors();
        initForm();
    };

    $scope.catch = function(creature) {
        $scope.isSubmitted = true;
        $scope.isValid.name = CreaturesService.checkName($scope.info.name);
        $scope.isValid.age = CreaturesService.checkAge($scope.info.age);
        $scope.isValid.mana = CreaturesService.checkMana($scope.info.mana);

        if ($scope.isValid.name && $scope.isValid.age && $scope.isValid.mana) {
            angular.extend(creature, $scope.info);
            $scope.profileInfo = ProfileService.addCreature(creature);
            $scope.isCatched = true;
            $timeout(function() {
                $scope.isCatched = false;
                initSelectedCreature();
            }, 1000);
            
        }
    };

    init();

}

ListCtrl.$inject = ['$scope', '$state', '$timeout', 'CreaturesService', 'ProfileService'];
module.exports = ListCtrl;