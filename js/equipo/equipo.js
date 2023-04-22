const botonCopiarGitP1 = document.querySelector("#copy-git-p1");
const textoACopiarGitP1 = document.querySelector("#text-git-p1");
const botonCopiarGitP2 = document.querySelector("#copy-git-p2");
const textoACopiarGitP2 = document.querySelector("#text-git-p2");
const botonCopiarGSites = document.querySelector("#copy-gsites");
const textoACopiarGSites = document.querySelector("#text-gsites");
const botonCopiarSandboxP1 = document.querySelector("#copy-sandbox-p1");
const textoACopiarSandboxP1 = document.querySelector("#text-sandbox-p1");

botonCopiarGitP1.addEventListener("click", () => {
  const seleccion = document.getSelection();
  const contenido = textoACopiarGitP1.innerText;

  const textareaTemporal = document.createElement("textarea");
  textareaTemporal.value = contenido;
  document.body.appendChild(textareaTemporal);

  textareaTemporal.select();
  textareaTemporal.setSelectionRange(0, 99999);

  document.execCommand("copy");

  document.body.removeChild(textareaTemporal);
});

botonCopiarGitP2.addEventListener("click", () => {
  const seleccion = document.getSelection();
  const contenido = textoACopiarGitP2.innerText;

  const textareaTemporal = document.createElement("textarea");
  textareaTemporal.value = contenido;
  document.body.appendChild(textareaTemporal);

  textareaTemporal.select();
  textareaTemporal.setSelectionRange(0, 99999);

  document.execCommand("copy");

  document.body.removeChild(textareaTemporal);
});

botonCopiarSandboxP1.addEventListener("click", () => {
  const seleccion = document.getSelection();
  const contenido = textoACopiarSandboxP1.innerText;

  const textareaTemporal = document.createElement("textarea");
  textareaTemporal.value = contenido;
  document.body.appendChild(textareaTemporal);

  textareaTemporal.select();
  textareaTemporal.setSelectionRange(0, 99999);

  document.execCommand("copy");

  document.body.removeChild(textareaTemporal);
});

botonCopiarGSites.addEventListener("click", () => {
  const seleccion = document.getSelection();
  const contenido = textoACopiarGSites.innerText;

  const textareaTemporal = document.createElement("textarea");
  textareaTemporal.value = contenido;
  document.body.appendChild(textareaTemporal);

  textareaTemporal.select();
  textareaTemporal.setSelectionRange(0, 99999);

  document.execCommand("copy");

  document.body.removeChild(textareaTemporal);
});
