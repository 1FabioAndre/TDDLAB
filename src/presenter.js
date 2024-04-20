document.addEventListener('DOMContentLoaded', function() {
  const btnAgregarProyecto = document.getElementById('btnAgregarProyecto');
  const formulario = document.getElementById('formulario');

  btnAgregarProyecto.addEventListener('click', function() {
    btnAgregarProyecto.style.display = 'none';
    formulario.style.display = 'block';
  });

  const formProyecto = document.getElementById('formProyecto');
  formProyecto.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe

    // Aquí puedes realizar acciones con el título del proyecto, por ejemplo:
    const tituloProyecto = document.getElementById('titulo').value;
    console.log('Título del proyecto:', tituloProyecto);

    // Restablece el formulario y muestra nuevamente el botón "Añadir Proyecto"
    formProyecto.reset();
    btnAgregarProyecto.style.display = 'block';
    formulario.style.display = 'none';
  });
});