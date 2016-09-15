describe('creature list page', function() {
  it('should display a box with creature information', function() {
    
        browser.get('http://localhost:5000/');
        
        var creaturesList,
            creatureTitle,
            creatureButton;

        creaturesList = element.all(by.repeater('c in creatures'));
        expect(creaturesList.count()).toEqual(12);

        creatureTitle = creaturesList.get(0).element(by.css('.box__content__title'));
        expect(creatureTitle.getText()).toEqual('Phoenix');

        creatureButton = creaturesList.get(0).element(by.css('.box__content__button--hunt'));
        expect(creatureButton.getText()).toEqual('Hunt it!');
    
  });

  it('should be displayed the form only when the button is clicked', function() {
    
        browser.get('http://localhost:5000/');

        var form = element.all(by.css('.box__form')),
            creaturesList = element.all(by.repeater('c in creatures')),
            creatureButton = creaturesList.get(0).element(by.css('.box__content__button--hunt')),
            catchButton,
            cancelButton;

        expect(form.getAttribute('class')).toMatch('ng-hide');
        
        creatureButton.click();
        expect(form.isDisplayed()).toBeTruthy();

        expect(creaturesList.get(0).element(by.css('label[for=name]')).getText()).toEqual('Name:');
        expect(creaturesList.get(0).element(by.model('info.name')).isDisplayed()).toBeTruthy();

        expect(creaturesList.get(0).element(by.model('info.age')).isDisplayed()).toBeTruthy();
        expect(creaturesList.get(0).element(by.css('label[for=age]')).getText()).toEqual('Age:');

        expect(creaturesList.get(0).element(by.model('info.mana')).isDisplayed()).toBeTruthy();
        expect(creaturesList.get(0).element(by.css('label[for=mana]')).getText()).toEqual('Mana:');
        
        catchButton = creaturesList.get(0).element(by.css('.box__form__button--catch'));
        expect(catchButton.isDisplayed()).toBeTruthy();
        
        cancelButton = creaturesList.get(0).element(by.css('.box__form__button--cancel'));
        expect(cancelButton.isDisplayed()).toBeTruthy();
        
        cancelButton.click();
        expect(form.getAttribute('class')).toMatch('ng-hide');

    });
});