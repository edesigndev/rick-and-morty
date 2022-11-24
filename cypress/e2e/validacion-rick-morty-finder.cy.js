describe("Validaciones Rick and Morty finder", () => {
  it("Navegar a url publica", () => {
    cy.visit("http://127.0.0.1:5173/")
  })

  it("Recargar pagina", () => {
    cy.reload()
  })

  it("Recargar pagina forzada", () => {
    cy.visit("http://127.0.0.1:5173/")
    cy.reload(true)
  })

  it("Obtener la imagen principal", () => {
    cy.get(".card-image")
  })

  it("Obtener el buscador", () => {
    cy.get(".search-character-content")
  })

  it.only("Ingresar personaje a buscar", () => {
    cy.visit("http://127.0.0.1:5173/")
    cy.get("#search").type("rick")
  })

  it.only("Filtro por Alive", () => {
    cy.visit("http://127.0.0.1:5173/")
    cy.get("#search").type("rick")

    cy.get("#status").select("alive")
  })
  it.only("Filtro por dead", () => {
    cy.visit("http://127.0.0.1:5173/")
    cy.get("#search").type("rick")

    cy.get("#status").select("dead")
  })
  it.only("Filtro por unknown", () => {
    cy.visit("http://127.0.0.1:5173/")
    cy.get("#search").type("rick")

    cy.get("#status").select("")
  })
})
