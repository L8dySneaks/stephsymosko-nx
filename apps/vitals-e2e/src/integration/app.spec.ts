import { getAddVitalButton, getVitals } from './../support/app.po';
import { getGreeting } from '../support/app.po';

describe('Vitals App', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    // Custom command example, see `../support/commands.ts` file
    cy.login('my-email@something.com', 'myPassword');

    // Function helper example, see `../support/app.po.ts` file
    getGreeting().contains('Vitals');
  });

  it('should display vitals', () => {

    getVitals().should((t) => expect(t.length).equal(2));

    getAddVitalButton().click();

    getVitals().should((t) => expect(t.length).equal(3));

  });
});
