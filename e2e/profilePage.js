describe('profile page', function() {
  it('should display a message when there are no creatures yet', function() {
    
        browser.get('http://localhost:5000/profile');

        expect(element(by.css('.no-creature')).isDisplayed()).toBeTruthy();
        expect(element(by.css('.no-creature__text')).getText()).toEqual('You dont have any creatures yet!');
        expect(element(by.css('.no-creature__button')).getText()).toEqual('Start hunting!');

    
    
  });

});