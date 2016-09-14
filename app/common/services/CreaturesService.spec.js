/*jshint expr: true*/

'use strict';

describe('Creatures service ', function() {

    var creaturesService, constants;

    beforeEach(angular.mock.module('myApp'));

    beforeEach(function() {

        angular.mock.inject(function(CreaturesService, CONSTANTS) {
            creaturesService = CreaturesService;
            constants = CONSTANTS;
        });

    });

    it('should contain the right methods', function() {
        expect(creaturesService.getCreatures).to.be.function;
        expect(creaturesService.checkName).to.be.function;
        expect(creaturesService.checkAge).to.be.function;
        expect(creaturesService.checkMana).to.be.function;
    });

    it('should return the list of creatures with the right content', function() {
        var creatures = creaturesService.getCreatures();
        expect(creatures).to.be.array;
        expect(creatures.length).to.be.equal(12);
        expect(creatures[0].type).to.be.equal(constants.PHOENIX);
        expect(creatures[0].image).to.be.equal('images/phoenix.jpg');
        expect(creatures[3].type).to.be.equal(constants.UNICORN);
        expect(creatures[3].image).to.be.equal('images/unicorn.jpg');
    });

    it('should return true if name is a string, false otherwise', function() {
        expect(creaturesService.checkName('myName')).to.be.equal(true);
        expect(creaturesService.checkName()).to.be.equal(false);
        expect(creaturesService.checkName(123)).to.be.equal(false);
        expect(creaturesService.checkName(null)).to.be.equal(false);
    });

    it('should return true if age is a value between 0 and 500, false otherwise', function() {
        expect(creaturesService.checkAge(0)).to.be.equal(true);
        expect(creaturesService.checkAge(234)).to.be.equal(true);
        expect(creaturesService.checkAge(500)).to.be.equal(true);
        expect(creaturesService.checkAge(5001)).to.be.equal(false);
        expect(creaturesService.checkAge(-1)).to.be.equal(false);
    });

    it('should return true if mana is a value between 1000 and 10000, false otherwise', function() {
        expect(creaturesService.checkMana(1000)).to.be.equal(true);
        expect(creaturesService.checkMana(5234)).to.be.equal(true);
        expect(creaturesService.checkMana(10000)).to.be.equal(true);
        expect(creaturesService.checkMana(100001)).to.be.equal(false);
        expect(creaturesService.checkMana(999)).to.be.equal(false);
        expect(creaturesService.checkMana(-1)).to.be.equal(false);
    });

});