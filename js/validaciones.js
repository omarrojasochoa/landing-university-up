$(document).ready(function () {
  $("#formUp").validate({
    rules: {
      nombre: "required",
      apellidos: "required",
      procedencia: "required",
      lugar: "required",
      programa: "required",
      modalidad: "required",
      dni: {
        required: true,
        minlength: 8,
      },
      telefono: {
        required: true,
        minlength: 9,
      },
      correo: {
        required: true,
        email: true,
      },
    },
    messages: {
      nombre: "Por favor, ingrese su nombre",
      apellidos: "Por favor, ingrese sus apellidos",
      dni: {
        required: "Por favor, ingrese su DNI",
        minlength: "El DNI debe tener al menos 8 caracteres",
      },
      telefono: {
        required: "Por favor, ingrese su número de teléfono",
        minlength: "El número de teléfono debe tener al menos 9 caracteres",
      },
      correo: {
        required: "Por favor, ingrese su correo electrónico",
        email: "Por favor, ingrese un correo electrónico válido",
      },
      procedencia: "Por favor, seleccione su lugar de procedencia",
      lugar: "Seleccione su lugar de procedencia",
      programa: "Por favor, seleccione un programa",
      modalidad: "Por favor, seleccione una modalidad",
      autorizacion: "Por favor, seleccione una opción de autorización",
    },
  });
});
