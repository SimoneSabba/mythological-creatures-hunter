describe('add new creature functionality', function() {

	it('should add a new creature', function() {
    
        browser.get('http://localhost:5000/');
        browser.ignoreSynchronization = true;

        var creaturesList = element.all(by.repeater('c in creatures')),
            creatureButton = creaturesList.get(0).element(by.css('.box__content__button--hunt')),
            confirmationMessage = creaturesList.get(0).element(by.css('.bg-success')),
            totalMana = element(by.css('.header__total__mana--number')),
            totalAge = element(by.css('.header__total__age--number')),
            totalCage = element(by.css('.header__total__cage--number'));

        creatureButton.click();
        
        expect(confirmationMessage.getAttribute('class')).toMatch('ng-hide');
        expect(totalMana.getText()).toEqual('0');
        expect(totalAge.getText()).toEqual('0');
        expect(totalCage.getText()).toEqual('10');

        creaturesList.get(0).element(by.id('name')).sendKeys('My creature');
        creaturesList.get(0).element(by.model('info.age')).sendKeys(100);
        creaturesList.get(0).element(by.model('info.mana')).sendKeys(1200);
        creaturesList.get(0).element(by.css('.box__form__button--catch')).click();

        expect(confirmationMessage.isDisplayed()).toBeTruthy();
        expect(confirmationMessage.getText()).toEqual('You cathced it!');

        expect(totalMana.getText()).toEqual('1200');
        expect(totalAge.getText()).toEqual('100');
        expect(totalCage.getText()).toEqual('9');
        
        browser.ignoreSynchronization = false;        
       
    });
});