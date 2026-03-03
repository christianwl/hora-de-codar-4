# Hora de Codar 4

Este repositório contém três atividades práticas focadas no domínio de **Arrays** ("Matrizes") em JavaScript, desenvolvidas originalmente em **2024** durante o programa **Proprofissão** no **Instituto PROA** e refatoradas com padrões modernos de desenvolvimento em 2026.

## 📜 Sobre o Projeto
O objetivo central destas atividades foi aprender a gerenciar coleções de dados, permitindo que o usuário interaja com listas através de cadastro, busca e remoção de itens. O projeto demonstra a evolução do uso de estruturas de repetição simples para uma arquitetura modular com **Data Normalization** ("Normalização de Dados").

## 🛠️ Tecnologias Utilizadas
* **JavaScript (ES6+)**
* **Modules** ("Módulos" para organização de arquivos)
* **Regex & Unicode Normalization** (Tratamento de acentos e caracteres especiais)
* **HTML5** (Interface básica para execução dos scripts)

## 📂 Atividades Implementadas

### 1. Cadastro de Estudantes (Refatoração para Loop)
Um sistema de cadastro sem limite fixo. A lógica original de **Recursion** ("Recursividade") foi refatorada para um laço `do...while`, garantindo maior controle sobre o fluxo de parada.
* **Destaque técnico:** Uso do método `.reduce()` para formatar a lista final de alunos e tratamento de **Case Insensitive** ("Sensibilidade a Maiúsculas") para a palavra-chave `"PARE"`.

### 2. Verificador de Planetas (Busca Inteligente)
Uma lista pré-definida de planetas onde o sistema valida a entrada do usuário. A nova versão utiliza normalização para garantir que nomes digitados com ou sem acento sejam reconhecidos.
* **Destaque técnico:** Implementação de um fluxo de comparação que ignora acentos e diferenças entre maiúsculas/minúsculas através de uma função utilitária de normalização.

### 3. Lista de Compras Interativa
Um simulador de mercado onde o usuário visualiza as frutas disponíveis e pode removê-las uma a uma até esvaziar o estoque.
* **Destaque técnico:** Sincronização de arrays para busca por **Index** ("Índice") e uso de `splice()` para manipulação precisa da lista, mantendo a interface atualizada a cada remoção.

---

### ⚙️ Módulos Utilitários
Como parte da refatoração, o projeto agora conta com:
* **Text Formatter:** Módulo que utiliza `normalize("NFD")` e **Regex** ("Expressões Regulares") para remover diacríticos (acentos) das entradas.
* **Prompt Manager:** Centralização da captura de dados para garantir a integridade das **Strings** recebidas.

## Autor

<div>
  <a href="https://github.com/christianwl">
    <img src="https://contrib.rocks/image?repo=christianwl/hora-de-codar-4" alt="Autor do Portfolio"/>
  </a>
</div>