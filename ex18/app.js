/*
  Apenas 3 exercícios, mas que exigem um certo nível de conhecimento do que  
  vimos até aqui =)
*/

/*
  01

  - Valide o valor do input "username" à medida em que ele é digitado;
  - Ele deve conter: 
    - No mínimo 6 caracteres;
    - Apenas letras maiúsculas e/ou minúsculas;
  - Se o valor inserido não é válido, exiba um parágrafo laranja abaixo do  
    input com a seguinte mensagem: "O valor deve conter no mínimo 6 caracteres,  
    com apenas letras maiúsculas e/ou minúsculas";
  - Se o valor é válido, o parágrafo deve ser verde e exibir a mensagem  
    "Username válido =)";
  - Use as classes disponíveis no arquivo style.css para colorir o parágrafo;
  - Não insira o parágrafo manualmente no index.html.
  
  Dica: pesquise pelo método "insertAdjacentElement", no MDN;
*/

const formEl = document.querySelector('form')
const usernameEl = formEl.username
const validadeInputEl = document.createElement('p')

usernameEl.insertAdjacentElement('afterend', validadeInputEl)

const regex = /^[a-zA-Z]{6,}$/

const inputValidation = () => {
  if(regex.test(usernameEl.value)) {
    validadeInputEl.textContent = 'Username válido =)'
    validadeInputEl.classList.remove('username-help-feedback')
    validadeInputEl.classList.add('username-success-feedback')
    return
  }

  validadeInputEl.textContent = 'O valor deve conter no mínimo caracteres, com apenas letras maiúsculas e/ou minúsculas'
  validadeInputEl.classList.remove('username-success-feedback')
  validadeInputEl.classList.add('username-help-feedback')
}

usernameEl.addEventListener('input', inputValidation)

/*
  02

  - Valide o envio do form;
  - Se o username inserido no input é válido, no envio do form, exiba um  
    parágrafo verde abaixo do botão com a mensagem "Dados enviados =)";
  - Se no momento do envio, o valor do input é inválido, o parágrafo deve ser  
    vermelho e exibir "Por favor, insira um username válido".
  - Use as classes disponíveis no arquivo style.css para colorir o parágrafo;
  - Não insira o parágrafo manualmente no index.html.
*/

const formValidateEl = document.createElement('p')
formEl.insertAdjacentElement('beforeend', formValidateEl)

const formValidation = event => {
  event.preventDefault()
  
  if(regex.test(usernameEl.value)) {
    formValidateEl.classList.remove('submit-help-feedback')
    formValidateEl.classList.add('submit-success-feedback')
    formValidateEl.textContent = 'Dados enviados =)'
    return
  }

  formValidateEl.classList.remove('submit-success-feedback')
  formValidateEl.classList.add('submit-help-feedback')
  formValidateEl.textContent = 'Por favor, insira um username válido'
}

formEl.addEventListener('click', formValidation)

/*
  03

  - Há algumas aulas, falamos sobre o método some;
  - Neste exercício, seu desafio será criar este método do zero;
  - Implemente uma função "some" que possui a mesma funcionalidade do método  
    some original;
  - A assinatura da invocação desta função deverá ser:
    - some([1, 2, 3], item => item > 2) - Retorna true;
    - some([1, 3, 5], item => item === 0) - Retorna false;
  - Se você não se lembra como o método some funciona, há 2 opções:
    1) Reassistir às seguintes aulas:
      - "Desenvolvendo um popup" - Aula 04-04 da etapa 5;
      - "Correção dos exercícios da aula 04 da etapa 05" - Aula 01-01 da etapa  
        6;
    2) Pesquisar no MDN.
*/

const mySome = (arr, callback) => {
  for(let i = 0; i < arr.length; i ++) {    
    if(callback(arr[i], i, arr)) return true
    if(arr[i] === arr[arr.length - 1]) return false
  }
}

console.log(mySome([1, 2, 3], item => item > 2))
console.log(mySome([1, 3, 5], item => item === 0))