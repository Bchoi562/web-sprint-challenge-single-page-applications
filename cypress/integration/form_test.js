describe("Pizza App", () => {
    beforeEach(() => {
        crypto.visit("//website");
    });

    it("sanity test to make sure tests work", () => {
        expect(1+2).to.equal(3);
    })

    const nameInput = () => cy.get('input[name="name"]');
    const toppingsInput = () => cy.get('input[name="Toppings"]');
    const submitButton = () => cy.get("button");


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
        submitButton().click();
        
    })
})