// HTML y JS para el popup
document.write(`
    <div class="popup message-enter-done" id="popupContainer" style="display: none;">
      <div class="popup-overlay"></div>
      <div class="pmhipaijcd">
        <div class="contents">
          <div class="popup-content">
            <header class="popup-close gap-3 justify-between">
              <button class="btn-close-popup" onclick="closePopup()">
                <span class="relative hide-for-mobile"
                  ><svg
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                    style="
                      display: block;
                      fill: none;
                      height: 16px;
                      width: 16px;
                      stroke: currentcolor;
                      stroke-width: 3;
                      overflow: visible;
                    "
                  >
                    <path d="m6 6 20 20"></path>
                    <path d="m26 6-20 20"></path></svg
                ></span>
                <div class="relative hide-for-desktop" style="display: none">
                  <svg
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                    style="
                      display: block;
                      fill: none;
                      height: 16px;
                      width: 16px;
                      stroke: currentcolor;
                      stroke-width: 4;
                      overflow: visible;
                    "
                  >
                    <g fill="none">
                      <path
                        d="m20 28-11.29289322-11.2928932c-.39052429-.3905243-.39052429-1.0236893 0-1.4142136l11.29289322-11.2928932"
                      ></path>
                    </g>
                  </svg>
                </div>
              </button>
              <h2
                class="font-br-sonoma-bold text-base text-[var(--gray1)] overflow-hidden text-ellipsis whitespace-nowrap absolute bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2"
                style="margin: auto; font-weight:bold"
              >
                Términos y condiciones
              </h2>
            </header>
            <section class="popup-description">
              <div
                class="text-[14px] tracking-[.1px] leading-7 text-[var(--neutrals7)]"
              >

                  De conformidad con la Ley N° 29733 (en adelante, la Ley) y el Decreto Supremo N°
                  003-2013-JUS (en adelante, el Reglamento), el usuario autoriza, mediante su firma o
                  cualquier otra forma de aceptación expresa automatizada, el tratamiento de los
                  datos personales de cualquier índole (los mismos que incluyen imagen y voz) que
                  facilite a la Universidad del Pacífico (en adelante, la Universidad), por cualquier
                  medio físico o electrónico, de acuerdo a las finalidades descritas a continuación.<br/><br/>
                  La Universidad, con domicilio en Jr. Gral. Luis M. Sánchez Cerro N° 2141, distrito de
                  Jesús María, fomenta y respeta el uso de los datos personales; asimismo, declara
                  ser la titular del Banco de Datos Personales e informa que los destinatarios de los
                  datos personales serán las oficinas de Marketing, Emprende UP, Admisión, Servicios
                  Académicos, Red Alumni, y cualquier otra unidad académica o administrativa de la
                  Universidad, la cual conservará los datos personales permanentemente o hasta que
                  sean modificados dependiendo de la naturaleza de los mismos; con la finalidad de
                  utilizarlos en gestiones académicas, institucionales, administrativas y comerciales,
                  así como procesar y manejar información para el adecuado desarrollo de la
                  prestación de servicios y cubrir las necesidades de sus interesados.<br/><br/>
                  En función a ello, y de acuerdo a lo estipulado en el artículo 58° del Código de
                  Protección y Defensa del Consumidor, el usuario autoriza que la Universidad remita
                  información al titular de los datos personales, sobre las carreras de pregrado que
                  ofrece la Universidad, programas académicos de postgrado, educación ejecutiva e
                  idiomas, encuestas de satisfacción y mejora del servicio educativo, eventos
                  académicos, artísticos, culturales y de entretenimiento organizados por la
                  Universidad o cualquiera de sus dependencias, para lo cual se utilizará la vía postal,
                  telefónica, correos electrónicos, medio electrónicos o cualquier otro medio de
                  comunicación. Además, el usuario autoriza a la Universidad para que realice, por sus
                  propios medios, o comparta, ceda o transfiera estos datos a terceros; a fin de
                  realizar actividades de telemarketing, mediante sistemas de llamado telefónico,
                  envío de mensajes de texto a celular, correos electrónicos postulantes (individuales
                  o masivos) o medio electrónicos, para promover productos y servicios; así como,
                  mantener actualizados los datos de los titulares, bajo la garantía de que la
                  Universidad procurará que estos no se vean afectados por cualquier uso indebido.<br/><br/>
                  En caso el usuario desee ejercer sus derechos de acceso, cancelación, oposición,
                  revocatoria de consentimiento, modificación o cualquier otro, podrá recurrir a la
                  oficina de Data Intelligence, la misma que se encuentra ubicada en Jr. Gral. Luis M.
                  Sánchez Cerro N° 2141, distrito de Jesús María o escribir a
                  revocatoria.postulantes.interesados@up.edu.pe Esta oficina tiene la obligación de
                  informar los procedimientos para hacer valer los derechos mencionados
                  anteriormente.<br/><br/>

                  Se pone en conocimiento de los usuarios que los formularios, mediante los cuales
                  otorguen sus datos personales, incluyen preguntas obligatorias y facultativas, las
                  cuales podrán ser identificadas en cada formulario. Las consecuencias de la
                  concesión de datos personales, faculta a la Universidad a utilizarlos de acuerdo a las
                  finalidades señaladas en el párrafo anterior. La negativa en la entrega de los datos
                  personales del usuario imposibilita a la Universidad a incluirlos en su base de datos
                  que remite información instantánea y actualizada respecto a programas
                  académicos de pregrado (carreras), postgrado (maestrías), educación ejecutiva
                  (extensión) e idiomas, encuestas de satisfacción y mejora del servicio educativo,
                  eventos académicos, artísticos, culturales y de entretenimiento, así como otras
                  actividades relacionadas a la Universidad o sus dependencias.



              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
    `);

function showPopup() {
  document.getElementById("popupContainer").style.display = "flex";
}

function closePopup() {
  document.getElementById("popupContainer").style.display = "none";
}
