describe('Searchbox Test', () => {
	before(() => {
		cy.visit('http://zero.webappsecurity.com/index.html')
	})

	it('should type into searchbox', () => {
		cy.get('#searchTerm').type('test {enter}')
	})

	it('should show results page', () => {
		cy.get('h2').contains('Search Results:')
	})
})
