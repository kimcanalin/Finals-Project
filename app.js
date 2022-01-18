letters = ['v', 'e', 's', 't', 'i', 'r']
words = ['vest', 'vets', 'rise', 'stir', 'tire', 'rivet', 'rest', 'ires', 'site', 'sire', 'strive', 'rite', 'tier']

const grid = document.querySelector('.grid')
const passButton = document.querySelector('.pass')
const lettersPicked = document.querySelector('.selected-letters')
const resultDiv = document.querySelector('.results')
const startButtonDiv = document.querySelector('.start')

let pickedLetters = []
let wordsGuessed = []

function generateBoard() {

    for (let i = 0; i < letters.length; i++) {
        const tile = document.createElement('div')
        tile.textContent = `${letters[i]}`
        tile.setAttribute('class', 'tiles')
        tile.setAttribute('data-info', letters[i])
        tile.addEventListener('click', storeLetter)
        grid.appendChild(tile)
    }

    // check word button
    const pass = document.createElement('button')
    pass.addEventListener('click', checkWord)
    pass.innerText = 'Check Word'
    passButton.appendChild(pass)

    //clear word button
    const clear = document.createElement('button')
    clear.addEventListener('click', clearWord)
    clear.innerText = 'Clear Word'
    passButton.appendChild(clear)

    // to make the start button disapear when start pressed
    startButtonDiv.innerHTML = ``
}

function storeLetter() {
    let letterInfo = this.getAttribute('data-info')
    pickedLetters.push(letterInfo)
    lettersPicked.innerText = `${pickedLetters.join('')}`
}



function checkWord() {
    let wordFormed = pickedLetters.join('')

    for (let i = 0; i < words.length; i++) {
        if (wordFormed === wordsGuessed[i]) {
            alert(`You have already guessed this word!`)
            return
        }
    }

    for (let i = 0; i < words.length; i++) {

        if (wordFormed === words[i]) {
            alert(`Congrats! You found a new word!`)
            wordsGuessed.push(wordFormed)
        }
    }

    if (words.includes(wordFormed) === false) {
        alert(`Sorry, try another guess!`)
    }

    resultDiv.innerText = `Words guessed: ${wordsGuessed.length}/${words.length}`

}

function clearWord() {
    pickedLetters = []
    lettersPicked.innerText = `${pickedLetters.join('')}`
}
