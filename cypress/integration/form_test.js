

describe('Pizza Order Site', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/pizza')
    })

    const nameInput = () => cy.get('input[id="name-input"]')
    const sizeDropdown = () => cy.get('select')
    const toppingBoxes = () => cy.get('[type="checkbox"]')
    const specialInput = () => cy.get('input[id="special-text"]')
    const addToOrderButton = () => cy.get('button[id="order-button"]')

    it('Sanity test', () => {
        expect(1 + 2).to.equal(3);
        expect(2 + 2).not.to.equal(5);
        expect({}).not.to.equal({});
        expect({}).to.eql({});
    });

    it('Elements are showing?', () => {
        nameInput().should('exist');
        sizeDropdown().should('exist');
        toppingBoxes().should('exist');
        specialInput().should('exist');
        addToOrderButton().should('exist');
    });

describe('Inputs can be filled and submitted?', () => {
    it('Inputs with interaction?', () => {
        nameInput()
            .should('have.value', '')
            .type('Sammi')
            .should('have.value', 'Sammi')
        sizeDropdown()
            .should('have.value', '')
            .select('tiny')
            .select('small')
            .select('big')
            .select('bigger')
            .select('biggest')
        toppingBoxes()
            .check()
        specialInput()
            .should('have.value', '')
            .type('Extra cheese please!')
            .should('have.value', 'Extra cheese please!')
    })

    it('Add to Order button works?', () => {
        nameInput()
            .type('Sammi')
        sizeDropdown()
            .select('tiny')
        toppingBoxes()
            .check()
        specialInput()
            .type('Extra cheese please!')
        addToOrderButton()
            .click()
    })
})
});