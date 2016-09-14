window.jQuery = window.$ = require('jquery');
window._ = require('lodash');

require('angular-bootstrap');
require('angular-ui-router');
require('angular-animate');
require('angular-cookies');
require('angular-resource');
require('angular-sanitize');
require('domready/ready');
require('lodash');

module.exports = angular.module('common',
    [
        'ui.bootstrap',
        'ui.router',
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngSanitize',
        require('./elements/header').name,
        require('./elements/footer').name,
        require('./elements/noCreatures').name,
        require('./elements/noFreeCage').name,
        require('./constants').name,
        require('./directives').name,
        require('./services').name
    ]);
