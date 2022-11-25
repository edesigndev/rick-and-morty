describe("Validaciones Rick and Morty finder", () => {
  it("Navegar a url publica", () => {
    cy.visit("https://edesigndev.github.io/rick-and-morty/")
  })

  it("Recargar pagina", () => {
    cy.reload()
  })

  it("Recargar pagina forzada", () => {
    cy.visit("https://edesigndev.github.io/rick-and-morty/")
    cy.reload(true)
  })

  it("Obtener la imagen principal", () => {
    cy.get(".card-image")
  })

  it("Obtener el buscador", () => {
    cy.get(".search-character-content")
  })

  it.only("Ingresar personaje a buscar", () => {
    cy.visit("https://edesigndev.github.io/rick-and-morty/")
    cy.get("#search").type("rick")
  })

  it.only("Filtro por Alive", () => {
    cy.visit("https://edesigndev.github.io/rick-and-morty/")
    cy.get("#search").type("rick")

    cy.get("#status").select("alive")
  })
  it.only("Filtro por dead", () => {
    cy.visit("https://edesigndev.github.io/rick-and-morty/")
    cy.get("#search").type("rick")

    cy.get("#status").select("dead")
  })
  it.only("Filtro por unknown", () => {
    cy.visit("https://edesigndev.github.io/rick-and-morty/")
    cy.get("#search").type("rick")

    cy.get("#status").select("")
  })
})
