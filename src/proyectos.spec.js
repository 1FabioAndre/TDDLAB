import { addProject, borrarProyecto } from "./proyectos";


describe("Añadir proyectos", () => {
    it("Deberia mostrar una array vacio", () => {
        expect(addProject()).toEqual([]);
    });

    it("Deberia mostrar una array con el titulo de un proyecto", () => {
        expect(addProject("Titulo")).toEqual(["Titulo"]);
    });

    it("Deberia mostrar una array con 2 titulos de proyectos", () => {
        expect(addProject("Titulo2")).toEqual(["Titulo", "Titulo2"]);
    });

    it("Debería borrar un proyecto del array", () => {
        expect(borrarProyecto("Titulo")).toEqual(["Titulo2"]);
    });

    it("Debería borrar un proyecto del array", () => {
        expect(borrarProyecto("Titulo2")).toEqual([]);
    });
});