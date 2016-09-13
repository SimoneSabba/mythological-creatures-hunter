'use strict';

module.exports = angular.module('modules',
    [
        require('./list').name,
        require('./profile').name
    ])
    .controller('MainCtrl', require('./MainController'));