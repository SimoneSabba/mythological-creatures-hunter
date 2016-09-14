'use strict';

module.exports = angular.module('common.elements.noCreatures', [])
    .directive('noCreatures', function() {
        return {
            template: require('./template.html'),
            restrict: 'E',
            replace: true
        };
    });
    