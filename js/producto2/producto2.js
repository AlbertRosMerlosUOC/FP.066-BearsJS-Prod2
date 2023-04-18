var content = "";

function writeCard(item) {
  console.log(item);
  content += `
  <div class="col">
    <div class="card cardWeek" style="background-color: ${item.color}">
        <p>${item.descripcion}</p>
    </div>
  </div>
  `;
}

//Conexion al servidor GraphQl
fetch("http://localhost:5000", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },

  body: JSON.stringify({
    query: `{
    tasks {
        color
        descripcion
        }
    }`,
  }),
})
  .then((res) => res.json())
  .then((res) => {
    console.log(res);
    content += `<div class="row align-items-start">`;
    res.data.tasks.map((item) => writeCard(item));
    content += `</div>`;
    document.getElementById("tasks").innerHTML = content;
  });
