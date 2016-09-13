'use strict';

var CreaturesService = function(CONSTANTS) {
    
    var creatures = [];
    creatures[0] = { type: CONSTANTS.PHOENIXE, image: '' };
    creatures[1] = { type: CONSTANTS.MEDUSA, image: '' };
    creatures[2] = { type: CONSTANTS.HIPPOGRIFF, image: '' };
    creatures[3] = { type: CONSTANTS.UNICORN, image: '' };
    creatures[4] = { type: CONSTANTS.CENTAUR, image: '' };
    creatures[5] = { type: CONSTANTS.DAEMON, image: '' };
    creatures[6] = { type: CONSTANTS.VAMPIRE, image: '' };
    creatures[7] = { type: CONSTANTS.MINOTAUR, image: '' };
    creatures[8] = { type: CONSTANTS.WEREWOLF, image: '' };
    creatures[9] = { type: CONSTANTS.PEGASUS, image: '' };
    creatures[10] = { type: CONSTANTS.CHIMERA, image: '' };
    creatures[11] = { type: CONSTANTS.YETI, image: '' };

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
