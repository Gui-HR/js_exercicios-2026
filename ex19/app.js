/*
Este exercício será um pouquinho diferente dos anteriores.

Seu desafio é desenvolver uma versão do quiz que:

- Aborda um tema diferente (não pode ser de filmes);
- Tem um tema de cores diferente do que foi apresentado na aula;
- Exibe na tela a pontuação que o usuário fez. Não há certo ou errado, apenas faça. Essa exibição de pontos é uma das implementações que faremos na próxima aula =D

Independente se você já fez o quiz dos filmes enquanto acompanhava a aula, busque fazer esse exercício sem rever partes da aula.

É importante que a sua versão do quiz seja feita apenas com o conteúdo que vimos até aqui.
*/

const correctAnswers = ['D', 'B', 'C', 'A', 'E']
const formEl = document.querySelector('form')
const counterEl = document.querySelector('.counter')
const counterTextEl = document.querySelector('.counter-text')
const questionOne = formEl['question-one']
const questionTwo = formEl['question-two']
const questionThree = formEl['question-three']
const questionFour = formEl['question-four']
const questionFive = formEl['question-five']

const questionContainersEl = document.querySelectorAll('.question-container')

    console.log(questionContainersEl)


formEl.addEventListener('submit', event => {
    event.preventDefault()
    
    const calculateScore = () => {
        let userScore = 0
        const userAnswers = [
            questionOne.value,
            questionTwo.value,
            questionThree.value,
            questionFour.value,
            questionFive.value
        ]
    
        for(let i = 0; i < correctAnswers.length; i++) 
            if(correctAnswers[i] === userAnswers[i]) userScore += 20

        return userScore
    }

    const showScore = userScore => {
        scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        })
    
        counterEl.classList.remove('disable')
        counterTextEl.classList.remove('disable')

        let counter = 0
        const increment = setInterval(() => {
            counterEl.textContent = `${counter}%`
    
            if(counter === userScore) clearInterval(increment)
            counter ++
        }, 50)
    }

    const userScore = calculateScore()
    showScore(userScore)
})
