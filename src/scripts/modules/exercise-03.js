// 3
/*
Vamos criar uma lista de compras.

 Crie uma array de frutas, exiba-a ao usuário e, em seguida, peça ao usuário para digitar o nome de uma das frutas.

 Caso a fruta esteja no array, remova-a e exiba a mensagem "Fruta foi retirada da lista".

 Peça novamente para o usuário digitar o nome de uma fruta para ser removida.

 Sempre que o usuário procurar por uma fruta que não está no array exiba a mensagem "Fruta indisponível no nosso mercado".

 Quando o array não possuir mais itens dentro de si, escreva "Lista de compras finalizada".
*/

import { receberString } from "../utils/prompt-manager.js";
import { textNormalizer } from "../utils/text-formatter.js";


// OBS: depois utilizar array de objetos para remover apenas de um unico array
let fruits = ["Ingá", "Banana", "Mamão", "Abacaxi", "Limão"];
let fruitsNormalize = fruits.map((str) => {
  return textNormalizer(str.toLowerCase());
});

export function showExercise03() {
  removeFruitList();
}

function removeFruitList() {
  let userFruit = "";
  let userFruitNormalize = "";
  do {
    alert(`As frutas disponíveis são: ${fruits.join(",")}.`);

    userFruit = receberString("Digite o nome de uma fruta: ");
    userFruitNormalize = textNormalizer(userFruit.toLowerCase());

    if (fruitsNormalize.includes(userFruitNormalize)) {
      let index = fruitsNormalize.indexOf(userFruitNormalize);

      alert(`A fruta ${fruits[index]} foi retirada da lista`);

      fruitsNormalize.splice(index, 1);
      fruits.splice(index, 1);
    } else {
      alert(`A fruta ${userFruit} está indisponível no nosso mercado`);
    }
  } while (fruits.length != 0);
  alert("Lista de compras finalizada");
}
