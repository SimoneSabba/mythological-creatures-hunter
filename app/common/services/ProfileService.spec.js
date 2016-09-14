/*jshint expr: true*/

'use strict';

describe('Profile service', function() {

    var profileService, creature1, creature2;

    creature1 = {
            name: 'myFirstCreature',
            mana: 1000,
            age: 300
        };

    creature2 = {
        name: 'mySecondCreature',
        mana: 4300,
        age: 280
    };

    beforeEach(angular.mock.module('myApp'));

    beforeEach(function() {

        angular.mock.inject(function(ProfileService) {
            profileService = ProfileService;
        });

    });

    it('should contain the right functions', function() {
        expect(profileService.getMyInfo).to.be.function;
        expect(profileService.addCreature).to.be.function;
        expect(profileService.removeCreature).to.be.function;
    });

    it('should return default profile info when is called the first time', function() {
        var myInfo = profileService.getMyInfo();
        expect(myInfo.myCreatures).to.be.array;
        expect(myInfo.myCreatures.length).to.be.equal(0);
        expect(myInfo.totalMana).to.be.equal(0);
        expect(myInfo.totalAge).to.be.equal(0);
        expect(myInfo.freeCage).to.be.equal(10);
    });

    it('should add a creature and return the updated profile info', function() {
        var myInfo;
        
        // add first creature
        myInfo = profileService.addCreature(creature1);
        expect(myInfo.myCreatures).to.be.array;
        expect(myInfo.myCreatures.length).to.be.equal(1);
        expect(myInfo.myCreatures[0].name).to.be.equal(creature1.name);
        expect(myInfo.totalMana).to.be.equal(1000);
        expect(myInfo.totalAge).to.be.equal(300);
        expect(myInfo.freeCage).to.be.equal(9);

        // add second creature
        myInfo = profileService.addCreature(creature2);
        expect(myInfo.myCreatures).to.be.array;
        expect(myInfo.myCreatures.length).to.be.equal(2);
        expect(myInfo.myCreatures[1].name).to.be.equal(creature2.name);
        expect(myInfo.totalMana).to.be.equal(5300);
        expect(myInfo.totalAge).to.be.equal(580);
        expect(myInfo.freeCage).to.be.equal(8);
    });

    it('should remove a creature and return the updated profile info', function() {
        var myInfo;
        
        // add first creature
        myInfo = profileService.addCreature(creature1);
        expect(myInfo.freeCage).to.be.equal(9);
        // add second creature
        myInfo = profileService.addCreature(creature2);
        expect(myInfo.freeCage).to.be.equal(8);
        // remove first creature
        myInfo = profileService.removeCreature(creature1);

        expect(myInfo.myCreatures).to.be.array;
        expect(myInfo.myCreatures.length).to.be.equal(1);
        expect(myInfo.myCreatures[0].name).to.be.equal(creature2.name);
        expect(myInfo.totalMana).to.be.equal(4300);
        expect(myInfo.totalAge).to.be.equal(280);
        expect(myInfo.freeCage).to.be.equal(9);
    });

});