import ingresarTitulo from "./ingresarTitulo";

document.addEventListener('DOMContentLoaded', function() {
  const btnAgregarProyecto = document.getElementById('btnAgregarProyecto');
  const formulario = document.getElementById('formulario');
  const mensaje = document.getElementById('mensaje');
  const proyectosAgregados = document.getElementById('proyectosAgregados');
  const proyectos = []; // Array para almacenar los títulos de los proyectos

  btnAgregarProyecto.addEventListener('click', function() {
    btnAgregarProyecto.style.display = 'none';
    formulario.style.display = 'block';
    mensaje.style.display = 'none'; // Oculta el mensaje si estaba visible
  });

  const formProyecto = document.getElementById('formProyecto');
  formProyecto.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe

     // Muestra el mensaje de "Añadido con éxito"
     mensaje.textContent = 'Añadido con éxito';
     mensaje.style.display = 'block';

     // Aquí puedes realizar acciones con el título del proyecto, por ejemplo:
    const tituloProyecto = document.getElementById('titulo').value;

    console.log('Título del proyecto:', tituloProyecto);

     // Agregar el título del proyecto al array de proyectos
     proyectos.push(ingresarTitulo(tituloProyecto));
     // Mostrar todos los proyectos añadidos
     proyectosAgregados.innerHTML = ''; // Limpiar el contenedor
     proyectos.forEach(function(proyecto) {
       proyectosAgregados.innerHTML += `<p>Proyecto: ${proyecto}</p>`;
     });

    // Restablece el formulario y muestra nuevamente el botón "Añadir Proyecto"
    formProyecto.reset();
    btnAgregarProyecto.style.display = 'block';
    formulario.style.display = 'none';
  });
});