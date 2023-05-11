// temporadas

const temporadas = document.querySelectorAll(".temporadas button");
console.log(temporadas);

function ativarTemporada(event) {
  const temporada = event.currentTarget;
  const controls = temporada.getAttribute("aria-controls");
  const exibirTemp = document.getElementById(controls);

  exibirTemp.classList.toggle("ativa");
  const ativa = exibirTemp.classList.contains("ativa");
  temporada.setAttribute("aria-expanded", ativa);
}

function eventosTemporadas(temporada) {
  temporada.addEventListener("click", ativarTemporada);
}

temporadas.forEach(eventosTemporadas);
