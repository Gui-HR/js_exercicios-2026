/*
  01

  - Obtenha a ul do index.html e adicione em todos os elementos filhos dela,  
    uma classe 'video';
  - Exiba no console os elementos filhos da ul com a classe já inserida.
*/

const listEl = document.querySelector('ul')
const lisEl = Array.from(listEl.children) 
const addClassVideo = li => li.classList.add('video')

lisEl.forEach(addClassVideo)

/*
  02

  - Usando a propriedade adequada, descubra quem é o elemento pai do h2
    e exiba-o no console;
*/

const h2El = document.querySelector('h2')
// console.log(h2El.parentElement)

/*
  03

  - Descubra quem é o próximo elemento irmão do h1 e exiba-o no console;
*/

const h1El = document.querySelector('h1')
// console.log(h2El.nextElementSibling)

/*
  04

  - Descubra quem é o irmão anterior da ul e exiba-o no console;
*/

// console.log(listEl.previousElementSibling)

/*
  05

  - Quando um clique acontecer em alguma das lis, faça com que a li clicada seja  
    exibida no console.
*/



lisEl.forEach(li => li.addEventListener('click', () => console.log(li)))

/*
  06

  - Quando o botão for clicado, adicione o nome dos vídeos abaixo dentro da ul;
  - Cada nome deve estar dentro de uma li.
*/

const videos = [{
  name: 'Como o promise all funciona | JavaScript',
  length: '00:01:52'
}, {
  name: 'Como refatorar um for loop | JavaScript',
  length: '00:04:18'
}, {
  name: 'Como fazer requisições HTTP com o método fetch | JavaScript',
  length: '00:02:55'
}]

const buttonEl = document.querySelector('button')
const createNewLis = video => {
    const newLi = document.createElement('li')
    newLi.innerText = video.name
    listEl.append(newLi)
  }

const addNewLis = () => {videos.forEach(createNewLis)}

buttonEl.addEventListener('click', addNewLis)

/*
  07

  - Se um clique no h1 acontecer, faça com que todos os elementos dentro do body 
    sejam removidos.
*/

const bodyEl = document.querySelector('body')

h1El.addEventListener('click', () => bodyEl.innerHTML = '')