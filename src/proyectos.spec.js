import addProject from "./proyectos";


describe("Añadir proyectos", () => {
    it("Deberia mostrar una array vacio", () => {
        expect(addProject()).toEqual([""]);
    });

    it("Deberia mostrar una array con el titulo de un proyecto", () => {
        expect(addProject("Titulo")).toEqual(["Titulo"]);
    });
});