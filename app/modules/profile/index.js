'use strict';
// Home View
module.exports = angular.module('modules.profile', [])
    .controller('ProfileCtrl', require('./ProfileController'))
    .config(require('./profileRoutes'));