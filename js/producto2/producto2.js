// Seleccionar el formulario y el contenedor de la tarjeta
const form = document.querySelector("#myForm");
const cardContainer = document.querySelector("#cardContainer");
var content = "";

// Controlador de colores de fondo para poner la letra en blanco o negro
function checkDarkColor(color) {
  const r = parseInt(color.slice(1, 3), 16);
  const g = parseInt(color.slice(3, 5), 16);
  const b = parseInt(color.slice(5, 7), 16);
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance < 0.5;
}

function writeCard(item) {
  const schedule = item.hour_ini != "" && item.hour_end != "" ? "de " + item.hour_ini + " a " + item.hour_end + "h" : "No especificadas horas de inicio y de fin";
  const workMode = item.type == "T" ? "Teletrabajo" : "Presencial";

  const card = document.createElement("div");
  card.classList.add("card");
  card.classList.add("cardWeek");
  card.style.backgroundColor = item.color;
  if (checkDarkColor(item.color.replace("#", ""))) {
    card.classList.add("cardWeekDark");
  } else {
    card.classList.add("cardWeekLight");
  }
  card.innerHTML = `
    <h4>Semana ${item.week} del año ${item.year}</h4>
    <p>${item.description}</p>
    <p><b>Modalidad de trabajo:</b> ${workMode}</p>
    <p><b>Horario laboral:</b> ${schedule}</p>
    <div class="buttonsDiv">
      <button type="button" class="btn btn-success" onclick="window.location.href='./dashboard.html?_id=${item._id}'"><i class="fa fa-search fa-lg"></i></button>
      <button type="button" class="btn btn-danger delete" id="delete" data-bs-toggle="modal" data-bs-target="#myModalQuit"><i class="fa fa-trash-o fa-lg"></i></button>
    </div>
  `;

  // Agregar la tarjeta al contenedor
  cardContainer.appendChild(card);

  // Funcionalidad de quitar tarjeta (lanza modal de confirmacion)
  const quitCard = card.querySelector(".delete");

  quitCard.addEventListener("click", () => {
    const modalQuit = document.querySelector("#myModalQuit");
    const modalInstance = bootstrap.Modal.getInstance(modalQuit);
    modalInstance.show();

    // Funcionalidad de quitar tarjeta (elimina tarjeta)
    const deleteCard = document.querySelector("#deleteCard");
    deleteCard.addEventListener("click", () => {
      modalInstance.hide();
      if (card.parentNode) {
        tareaEliminada(card);
      }
    });
  });

  // Elimina el elemento padre del elemento que se haya seleccionado
  function tareaEliminada(element) {
    element.parentNode.removeChild(element);
  }
}

// Carga de datos inicial con conexión a MongoDB. 
// Conexion al servidor GraphQl para la llamada getWeeks
fetch("http://localhost:5000", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    query: `{
      getWeeks {
        _id
        week
        year
        description
        hour_ini
        hour_end
        type
        color
      }
    }`,
  }),
}).then((res) => res.json())
  .then((res) => {
    res.data.getWeeks.map((item) => writeCard(item));
  });
