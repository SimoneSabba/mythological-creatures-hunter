'use strict';

module.exports = angular.module('common.elements.noFreeCage', [])
    .directive('noFreeCage', function() {
        return {
            template: require('./template.html'),
            restrict: 'E',
            replace: true
        };
    });
    