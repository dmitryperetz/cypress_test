describe('StackAdapt main page', () =>{


    it('main page', () =>{

       //Visit main page
        cy.visit('https://www.stackadapt.com/')
        
        //Click the "Request a Demo" button in the top right
        cy.get('.site-navbar-clear > .sa-head > .sa-side > :nth-child(2) > .sa-link').click();
        cy.get('.sa-times').click();
        cy.wait(1000)

        // Fill in the form fields
        cy.get('#first_name').type("Jane");
        cy.get('#last_name').type("Doe");
        cy.get('#email').type("jane.doe@advertising.com");
        cy.get('#phone').type("+1112223344");
        cy.get('#company_name').type("advertising.com");
        cy.get('#job_title').type("Chief Executive Officer");
        cy.get('#company_type').select("Publisher");
        cy.get('#country').select("Canada");
        cy.get('#province').select("Ontario");
        

        // Submit the form
        cy.get('.px-3').click();


        

    });
});