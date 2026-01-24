// 3
// Vamos criar uma lista de compras.

// Crie uma array de frutas, exiba-a ao usuário e, em seguida, peça ao usuário para digitar o nome de uma das frutas.

// Caso a fruta esteja no array, remova-a e exiba a mensagem "Fruta foi retirada da lista".

// Peça novamente para o usuário digitar o nome de uma fruta para ser removida.

// Sempre que o usuário procurar por uma fruta que não está no array exiba a mensagem "Fruta indisponível no nosso mercado".

// Quando o array não possuir mais itens dentro de si, escreva "Lista de compras finalizada".

var frutas = ["ingá", "banana", "mamão", "abacaxi", "limão"];

function listarFrutas(valor) {
  return frutas.includes(valor);
}

function retirarFrutas() {
  var continuarLoop = true;

  while (continuarLoop) {
    var textoFrutas = "As frutas disponíveis são: ";
    for (var i = 0; i < frutas.length; i++) {
      var espaco = i < frutas.length - 1 ? ", " : ".";
      textoFrutas += frutas[i] + espaco;
    }
    apresentarNaTela(textoFrutas);
    var frutaDigitada = prompt("Digite o nome de uma fruta: ");

    if (listarFrutas(frutaDigitada)) {
      frutas.splice(frutas.indexOf(frutaDigitada), 1);
      apresentarNaTela("Fruta foi retirada da lista");
      if (frutas.length == 0) {
        apresentarNaTela("Lista de compras finalizada");
        continuarLoop = false;
      }
    } else {
      apresentarNaTela("Fruta indisponível no nosso mercado");
    }
  }
}

function apresentarNaTela(conteudo) {
  alert(conteudo);
  document.write("<br><br>" + conteudo);
}
