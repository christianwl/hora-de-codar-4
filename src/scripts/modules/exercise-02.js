// 2
// Crie uma array de planetas que inclua "Terra", "Marte", "Plutão", "Vênus", "Júpiter", "Saturno"  e, em seguida, peça ao usuário para digitar o nome de um planeta.

// Verifique se o planeta que o usuário informou está na array e informe ao usuário.

let planetas = ["Terra", "Marte", "Plutão", "Vênus", "Júpiter", "Saturno"];

export function verificaPlaneta() {
  let usuarioDigitou = prompt("Digite um nome de um planeta: ");
  let negativa = planetas.includes(usuarioDigitou) ? "" : "não ";

  apresentarNaTela(`O Planeta ${usuarioDigitou} ${negativa}está no array`);
}

function apresentarNaTela(conteudo) {
  alert(conteudo);
  document.write("<br><br>" + conteudo);
}
