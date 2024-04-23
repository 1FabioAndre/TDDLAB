let proyectos = []; // Array para almacenar los títulos de los proyectos

function addProject(titulo = "") {
    if (titulo.trim() !== "") { // Verificar si el título no está vacío después de eliminar espacios en blanco
        proyectos.push(titulo);
    }
    return proyectos;
}

function borrarProyecto(tituloABorrar) {
    const indice = proyectos.findIndex(proyecto => proyecto === tituloABorrar);
    if (indice !== -1) {
        proyectos.splice(indice, 1);
    }

    return proyectos;
}

export { addProject, borrarProyecto };