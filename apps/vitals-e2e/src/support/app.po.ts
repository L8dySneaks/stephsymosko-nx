export const getGreeting = () => cy.get('h1');

export const getVitals = () => cy.get('li.vital');
export const getAddVitalButton = () => cy.get('button#add-vital');
