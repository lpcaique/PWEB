const idadeInput = document.getElementById("idade");
const sexoSelect = document.getElementById("sexo");
const opiniaoSelect = document.getElementById("opiniao");
const enviarButton = document.getElementById("enviar");
const mediaIdadeSpan = document.getElementById("mediaIdade");
const maisVelhaSpan = document.getElementById("maisVelha");
const maisNovaSpan = document.getElementById("maisNova");
const pessimoCountSpan = document.getElementById("pessimoCount");
const otimoBomPercentSpan = document.getElementById("otimoBomPercent");
const mulheresCountSpan = document.getElementById("mulheresCount");
const homensCountSpan = document.getElementById("homensCount");

const respostas = [];
let mulheresCount = 0;
let homensCount = 0;

enviarButton.addEventListener("click", () => {
  const idade = parseInt(idadeInput.value);
  const sexo = sexoSelect.value;
  const opiniao = parseInt(opiniaoSelect.value);

  respostas.push({ idade, sexo, opiniao });

  // Calcula as estatísticas
  const somaIdades = respostas.reduce(
    (total, resposta) => total + resposta.idade,
    0
  );
  const mediaIdade = somaIdades / respostas.length;

  const maisVelha = Math.max(...respostas.map((resposta) => resposta.idade));
  const maisNova = Math.min(...respostas.map((resposta) => resposta.idade));

  const pessimoCount = respostas.filter(
    (resposta) => resposta.opiniao === 1
  ).length;

  const otimoBomCount = respostas.filter(
    (resposta) => resposta.opiniao === 4 || resposta.opiniao === 3
  ).length;
  const otimoBomPercent = (otimoBomCount / respostas.length) * 100;

  if (sexo === "feminino") {
    mulheresCount++;
  } else {
    homensCount++;
  }

  // Atualiza os resultados na interface
  mediaIdadeSpan.textContent = mediaIdade.toFixed(2);
  maisVelhaSpan.textContent = maisVelha;
  maisNovaSpan.textContent = maisNova;
  pessimoCountSpan.textContent = pessimoCount;
  otimoBomPercentSpan.textContent = otimoBomPercent.toFixed(2);
  mulheresCountSpan.textContent = mulheresCount;
  homensCountSpan.textContent = homensCount;
});
