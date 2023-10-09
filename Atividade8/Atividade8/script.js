const botoesEscolha = document.querySelectorAll(".escolhas button");
const resultadoDiv = document.getElementById("resultado");

botoesEscolha.forEach((botao) => {
  botao.addEventListener("click", () => {
    const escolhaUsuario = botao.id;
    const escolhaComputador = getEscolhaComputador();
    const vencedor = getVencedor(escolhaUsuario, escolhaComputador);
    mostrarResultado(escolhaUsuario, escolhaComputador, vencedor);
  });
});

function getEscolhaComputador() {
  const aleatorio = Math.random();
  if (aleatorio < 0.33) {
    return "pedra";
  } else if (aleatorio < 0.66) {
    return "papel";
  } else {
    return "tesoura";
  }
}

function getVencedor(usuario, computador) {
  if (usuario === computador) {
    return "Empate!";
  } else if (
    (usuario === "pedra" && computador === "tesoura") ||
    (usuario === "papel" && computador === "pedra") ||
    (usuario === "tesoura" && computador === "papel")
  ) {
    return "Você ganhou!";
  } else {
    return "O computador ganhou!";
  }
}

function mostrarResultado(usuario, computador, vencedor) {
  resultadoDiv.innerHTML = `Você escolheu ${usuario}. O computador escolheu ${computador}. Resultado: ${vencedor}`;
}
