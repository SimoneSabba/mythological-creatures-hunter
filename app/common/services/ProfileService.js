'use strict';

var ProfileService = function() {

    this.info = {
        myCreatures: {},
        totalMana: 0,
        freeCage: 10,
        totalAge: 0
    };
    
    this.getMyInfo = function() {
        return this.info;
    };

    this.addCreature = function(creature) {
        if (creature) {
            creature.captureTime = new Date();
            this.info.myCreatures[creature.name] = creature;
            this.info.totalMana += parseInt(creature.mana, 10);
            this.info.totalAge += parseInt(creature.age, 10);
            this.info.freeCage -= 1;
            return this.info;
        }
    };

    this.removeCreature = function(creature) {
        if (this.info.myCreatures[creature.name]) {
            delete this.info.myCreatures[creature.name];
            this.info.totalMana -= parseInt(creature.mana, 10);
            this.info.totalAge -= parseInt(creature.age, 10);
            this.info.freeCage += 1;
            return this.info;
        }
    };
};

ProfileService.$inject = [];
module.exports = ProfileService;
