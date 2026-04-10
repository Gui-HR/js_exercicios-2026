/*
  01

  - Faça com que o texto do h1 do index.html seja exibido com todas as letras  
    maiúsculas.
*/

const titleEl = document.querySelector('h1')
titleEl.innerText = (titleEl.innerText).toUpperCase()


/*
  02

  - Adicione, na ul vazia do index.html, os números do array "numbers" abaixo;
  - Cada número deve estar dentro de uma <li> com a classe "number".
*/

const numberEl = document.querySelector('.numbers')
const numbers = [ 53, 24, 3, 8, 1, 6, 57, 80, 77, 98, 55 ]

numbers.forEach(number => {
  numberEl.innerHTML += `<li>${number}</li>`
})

/*
  03

  - Modifique as cores dos números dentro da ul da seguinte forma:
    - Se o número é par, ele deve ser exibido na cor "lightblue";
    - Se o número é ímpar, exiba-o na cor "pink".
*/

const liNumbersEl = document.querySelectorAll('li')
const colorLiNumbers = liNumber => {
  if(liNumber.textContent % 2 === 0) return liNumber.style.color = "lightblue"
  return liNumber.style.color = "pink"
}

liNumbersEl.forEach(colorLiNumbers)

/*
  04

  - Adicione a classe "body-background" no corpo do index.html;

  P.s: a classe "body-background" já está declarada no style.css.
*/

const bodyEl = document.querySelector('body')
bodyEl.classList.add('body-background')

/*
  05

  - Adicione o link 
    https://github.com/roger-melo-treinamentos/curso-de-js-roger-melo no href  
    do link do index.html.
*/

const linkEl = document.querySelector('.link')
const link = "https://github.com/roger-melo-treinamentos/curso-de-js-roger-melo"
linkEl.setAttribute('href', link)

/*
  06

  - Exiba o novo valor do atributo href do link no console.
*/

// console.log(linkEl.getAttribute('href'))

/*
  07

  - Exiba, no console, um objeto com todas as propriedades CSS que podem ser  
    manipuladas via JS no h1.
*/

// console.log(titleEl.style)

/*
  08

  - Remova a classe "body-background", do elemento body.
*/

bodyEl.classList.remove('body-background')

/*
  09

  - Se o link da página possuir uma classe "link", remova-a;
  - Não utilize o método remove() para fazer isso.
*/



linkEl.classList.toggle('link')