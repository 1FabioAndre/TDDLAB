import ingresarTitulo from "./ingresarTitulo";
import { addProject, borrarProyecto } from "./proyectos";

document.addEventListener('DOMContentLoaded', function () {
  const btnAgregarProyecto = document.getElementById('btnAgregarProyecto');
  const formulario = document.getElementById('formulario');
  const mensaje = document.getElementById('mensaje');
  const proyectosAgregados = document.getElementById('proyectosAgregados');
  let proyectos = []; // Array para almacenar los títulos de los proyectos

  btnAgregarProyecto.addEventListener('click', function () {
    btnAgregarProyecto.style.display = 'none';
    formulario.style.display = 'block';
    mensaje.style.display = 'none'; // Oculta el mensaje si estaba visible
  });

  const formProyecto = document.getElementById('formProyecto');
  formProyecto.addEventListener('submit', function (event) {
    event.preventDefault(); // Evita que el formulario se envíe

    // Muestra el mensaje de "Añadido con éxito"
    mensaje.textContent = 'Añadido con éxito';
    mensaje.style.display = 'block';

    // Aquí puedes realizar acciones con el título del proyecto, por ejemplo:
    const tituloProyecto = document.getElementById('titulo').value;

    console.log('Título del proyecto:', tituloProyecto);

    // Agregar el título del proyecto al array de proyectos usando la función addProject
    proyectos = addProject(tituloProyecto);

    // Mostrar todos los proyectos añadidos
    actualizarProyectos(proyectos);

    // Restablece el formulario y muestra nuevamente el botón "Añadir Proyecto"
    formProyecto.reset();
    btnAgregarProyecto.style.display = 'block';
    formulario.style.display = 'none';
  });

  // Función para mostrar todos los proyectos añadidos
  function actualizarProyectos(proyectos) {
    proyectosAgregados.innerHTML = ''; // Limpiar el contenedor
    proyectos.forEach(function (proyecto) {
      proyectosAgregados.innerHTML += `
        <div>
          <p>Proyecto: ${proyecto}</p>
          <button class="btnEliminar" data-titulo="${proyecto}">Eliminar</button>
        </div>`;
    });

    // Agregar event listener a los botones de eliminar
    const btnsEliminar = document.querySelectorAll('.btnEliminar');
    btnsEliminar.forEach(function (btnEliminar) {
      btnEliminar.addEventListener('click', function () {
        const tituloAEliminar = this.getAttribute('data-titulo');
        proyectos = borrarProyecto(tituloAEliminar);
        actualizarProyectos(proyectos);
      });
    });
  }
});
