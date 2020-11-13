describe("Pizza App", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3008/order");
    });

    it("sanity test to make sure tests work", () => {
        expect(1+2).to.equal(3);
    })

    const nameInput = () => cy.get('input[name="Name"]');
    const toppingsInput = () => cy.get('input[type="checkbox"]');
    const sizeInput = () => cy.get('select');
    const submitButton = () => cy.get('button');
    const instructions = () => cy.get('input[name="SpecialInstructions"]');


    it("Can type into the name input", () => {
        nameInput()
            .should("have.value","")
            .type("Brian")
            .should("have.value", "Brian");
    });

    it("Can select multiple toppings", () => {
        toppingsInput()
            .check();
    });

    it("can submit", () => {
        nameInput().type("Brian");
        toppingsInput().check();
        sizeInput().select('Medium');
        instructions().type('fdsafsda');
        submitButton().click();

    })
})