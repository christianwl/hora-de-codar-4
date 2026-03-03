// 1
/* 
Crie um programa onde o usuário possa cadastrar estudantes sem limites, e, em seguida, Se o usuário digitar 
"PARE" o programa deve exibir a quantidade de estudantes cadastrados e a lista com cada um deles. 
*/

import { receberString } from "../utils/prompt-manager.js";

export function showExercise01(){
  showList();
}

function registerStudents() {
  let nameList = [];
  let canContinue = true;
  do {
    let name = receberString(
      "Digite o nome do estudante: \n\nOBS: Para encerrar digite 'PARE'",
    );

    canContinue = !(name.toLowerCase() == "pare");

    if (canContinue) {
      nameList.push(name);
    }
  } while (canContinue);

  return nameList;
}

function showList(){
  let studentList = registerStudents();
  let textList = studentList.reduce((result, str, i) => result + `${i + 1}º ${str}\n`, "");
  alert(`A quantidade de alunos cadastrados foi ${studentList.length} e os alunos foram:\n${textList}`)
}