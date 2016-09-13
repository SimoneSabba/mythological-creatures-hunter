'use strict';

function profileRoutes($stateProvider) {

    var profile = {
        name: 'profile', // state name
        url: '/profile', // url path that activates this state
        template: require('./profile.html'), // generate the Directive "homeView" - when calling the directive in HTML, the name must not be camelCased
        controller: 'ProfileCtrl'
    };

    $stateProvider.state(profile);

}

profileRoutes.$inject = ['$stateProvider'];
module.exports = profileRoutes;