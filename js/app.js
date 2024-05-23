const disabledButton = false;
document.addEventListener("DOMContentLoaded", function (event) {
  //Change banner
  function changeImageBanner() {
    const imageBanner = document.getElementById("imageBanner");

    if (window.innerWidth < 1200) {
      imageBanner.src = "img/banner-up-mobile-of-new-s.webp";
    } else {
      imageBanner.src = "img/banner-up-bk.webp";
    }
  }

  window.addEventListener("resize", function () {
    changeImageBanner();
  });
  changeImageBanner();

  //change input Sede
  const modalidadSelect = document.getElementById("modalidad");
  const sedeInput = document.getElementById("sede");

  modalidadSelect.addEventListener("change", function () {
    if (modalidadSelect.value === "Presencial") {
      sedeInput.style.display = "block";
    } else {
      sedeInput.style.display = "none";
    }
  });

  //Expresiones Regulares
  /* document.getElementById("name").setAttribute("pattern", "[a-zA-Z ]{2,254}$");
  document
    .getElementById("lastName")
    .setAttribute("pattern", "[a-zA-Z]+( [a-zA-Z]+)?");
  document.getElementById("dni").setAttribute("pattern", "[0-9]{8,8}$");
  document.getElementById("celular").setAttribute("pattern", "^(9\\d{8})$"); */

  document.getElementById("formUp").addEventListener("submit", function (e) {
    if (!disabledButton) {
      document.getElementById("btnSubmit").style.cursor = "no-drop";
      disabledButton = true;
      //Inputs de formularios
      const name = document.getElementById("name").value;
      const lastName = document.getElementById("lastName").value;
      const dni = document.getElementById("dni").value;
      const telefono = document.getElementById("celular").value;
      const correo = document.getElementById("correo").value;
      const lugar = document.getElementById("lugar").value;
      const programa = document.getElementById("programa").value;
      const modalidad = document.getElementById("modalidad").value;
      const sede = document.getElementById("sede").value;
      const authData = document.querySelector(
        'input[name="autorizacion"]:checked'
      );
      const authDataOptional = document.querySelector(
        'input[name="autorizacionOptional"]:checked'
      );
      const nameLanding = "https://www.up.edu.pe";

      if (
        name.trim() === "" ||
        apellidopat.trim() === "" ||
        correo.trim() === "" ||
        telefono.trim() === ""
      ) {
        alert("Por favor, completa todos los campos obligatorios.");
        e.preventDefault();

        return;
      } else if (
        !name.match(/^[a-zA-Z ]{2,254}$/) ||
        !apellidopat.match(/^[a-zA-Z ]{2,254}$/) ||
        !telefono.match(/^(9\d{8}|19\d{8}|519\d{8}|\+519\d{8})$/) ||
        !dni.match(/^[0-9]{8}$/)
      ) {
        alert("Por favor, verifica los formatos de los campos.");
        e.preventDefault();

        return;
      } else {
        const dataCrm = {
          url: nameLanding,
          informe_nombre: name,
          informe_apellidos: lastName,
          informe_dni: dni,
          informe_telefono: telefono,
          informe_email: correo,
          informe_lugar: lugar,
          informe_programa: programa,
          informe_modalidad: modalidad,
          informe_sede: sede,
          informe_autorizacion: authData,
          informe_autorizacionServicios: authDataOptional,
          usuario_Id: 0,
        };

        //ENVIO DE DATA SIN ESPERAR RESPUESTA
        /* async function submitForm(dataCrm) {
          try {
            const options = {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(dataCrm),
            };
            fetch("https://back.up.edu.pe/rest_api/add_informe", options);
            setTimeout(function () {
              window.open("https://www.up.edu.pe/gracias", "_self");
              console.log("integracion");
            }, 1000);
          } catch (error) {
            console.error("Error en la solicitud:", error);
          }
        }
        submitForm(dataCrm); */
      }
    }
  });
});
