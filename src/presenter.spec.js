import ingresarTitulo from "./ingresarTitulo";

describe("Añadir proyecto", () => {
    it("Deberia ingresar un titulo de proyecto y devolverme el mismo titulo", () => {
      expect(ingresarTitulo("Titulo")).toEqual("Titulo");
    });
  });
  