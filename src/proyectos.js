let proyectos = []; // Array para almacenar los títulos de los proyectos

function addProject(titulo = "") {
    if (titulo.trim() !== "") { // Verificar si el título no está vacío después de eliminar espacios en blanco
        proyectos.push(titulo);
    }
    return proyectos;
}

export default addProject;
