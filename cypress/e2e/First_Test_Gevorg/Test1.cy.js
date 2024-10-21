describe('TEST PRACTICE FORM SECTION (Chained Commands)', () => {
    it('fills out and submits the form', () => {

        cy.visit('https://demoqa.com/automation-practice-form')
            .url().should('include', 'demoqa');


        cy.get('input#firstName').type('TESTFIRST')
        cy.get('input#lastName').type('TESTLAST');


        cy.get('input#userEmail').type('Test.Demo@example.com');


        cy.get('input[name="gender"][value="Male"]').check({ force: true });



        cy.get('input#userNumber').type("4445556667");

        cy.get('#hobbies-checkbox-2').check({ force: true });



        cy.get('textarea#currentAddress').type('111 TEST, DEMO, ARMENIA');


        cy.get('button#submit').click();


        cy.get('.modal-title').should('have.text', 'Thanks for submitting the form');


        cy.get('#closeLargeModal').click({ force: true });

    });
});


