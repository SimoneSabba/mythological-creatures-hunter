'use strict';

var CONSTANTS = (function() {
    return {
        PHOENIXE: 'Phoenixe',
        MEDUSA: 'Medusa',
        HIPPOGRIFF: 'Hippogriff',
        UNICORN: 'Unicorn',
        CENTAUR: 'Centaur',
        DAEMON: 'Daemon',
        VAMPIRE: 'Vampire',
        MINOTAUR: 'Minotaur',
        WEREWOLF: 'Werewolf',
        PEGASUS: 'Pegasus',
        CHIMERA: 'Chimera',
        YETI: 'Yeti',
        MINIMUM_AGE: 0,
        MAXIMUM_AGE: 500,
        MINIMUM_MANA: 1000,
        MAXIMUM_MANA: 10000
    };
}());

CONSTANTS.$inject = [];
module.exports = CONSTANTS;