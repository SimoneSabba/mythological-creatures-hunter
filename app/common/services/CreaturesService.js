'use strict';

var CreaturesService = function(CONSTANTS) {
    
    var creatures = [];
    creatures[0] = { type: CONSTANTS.PHOENIXE, image: 'images/phoenix.jpg' };
    creatures[1] = { type: CONSTANTS.MEDUSA, image: 'images/medusa.jpg' };
    creatures[2] = { type: CONSTANTS.HIPPOGRIFF, image: 'images/hyppogriff.jpg' };
    creatures[3] = { type: CONSTANTS.UNICORN, image: 'images/unicorn.jpg' };
    creatures[4] = { type: CONSTANTS.CENTAUR, image: 'images/centaur.jpg' };
    creatures[5] = { type: CONSTANTS.DAEMON, image: 'images/daemon.jpg' };
    creatures[6] = { type: CONSTANTS.VAMPIRE, image: 'images/vampire.jpg' };
    creatures[7] = { type: CONSTANTS.MINOTAUR, image: 'images/minotaur.jpg' };
    creatures[8] = { type: CONSTANTS.WEREWOLF, image: 'images/werewolf.jpeg' };
    creatures[9] = { type: CONSTANTS.PEGASUS, image: 'images/pegasus.jpg' };
    creatures[10] = { type: CONSTANTS.CHIMERA, image: 'images/chimera.jpg' };
    creatures[11] = { type: CONSTANTS.YETI, image: 'images/yeti.png' };

    this.getCreatures = function() {
        return creatures;
    };

    this.checkName = function(name) {
        return angular.isString(name);
    };

    this.checkAge = function(age) {
        return age >= CONSTANTS.MINIMUM_AGE && age <= CONSTANTS.MAXIMUM_AGE;
    };

    this.checkMana = function(mana) {
        return mana >= CONSTANTS.MINIMUM_MANA && mana <= CONSTANTS.MAXIMUM_MANA;
    };

};

CreaturesService.$inject = ['CONSTANTS'];
module.exports = CreaturesService;
