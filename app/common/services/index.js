'use strict';

module.exports = angular.module('common.services', [])
    .service('CreaturesService', require('./CreaturesService.js'))
    .service('ProfileService', require('./ProfileService.js'));