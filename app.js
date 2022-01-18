letters = ['v', 'e', 's', 't', 'i', 'r']
words = ['vest', 'vets', 'rise', 'stir', 'tire', 'rivet', 'rest', 'ires', 'site',
    'sire', 'strive', 'rite', 'tier']

const grid = document.querySelector('.grid')
const passButton = document.querySelector('.pass')
const lettersPicked = document.querySelector('.selected-letters')
const resultDiv = document.querySelector('.results')
const startButtonDiv = document.querySelector('.start')
const wordBox = document.querySelector('.word-box')
const choiceInstructions = document.querySelector('.choices')

let pickedLetters = []
let wordsGuessed = []
let blankBoxes = [1, 2, 3, 5, 6, 11, 12, 13, 15, 16, 18, 20, 21, 23, 28, 30, 31,
    33, 35, 36, 45, 47, 49, 50, 51, 53, 54, 59, 60, 61, 62, 63, 65, 67, 69, 70, 77, 78, 79, 80, 81,
    82, 83, 85, 86, 87, 88, 89, 90, 91, 92, 93, 95, 96, 97, 98, 99, 100]

function generateBoard() {

    // create div elements that will generate the boxes to be filled 
    for (let i = 1; i <= 100; i++) {
        const box = document.createElement('div')
        box.setAttribute('class', 'box')
        box.setAttribute('data-info', i)
        wordBox.appendChild(box)

        // will put color to all the boxes listed as 'blank boxes'
        if (blankBoxes.includes(i)) {
            box.style.backgroundColor = 'black'
        }
    }

    // create div elements containing distinct data info
    for (let i = 0; i < letters.length; i++) {
        const tile = document.createElement('div')
        tile.textContent = `${letters[i]}`
        tile.setAttribute('class', 'tiles')
        tile.setAttribute('data-info', letters[i])
        tile.addEventListener('click', storeLetter)
        grid.appendChild(tile)
    }

    //create an instruction for choices
    choiceInstructions.innerHTML = `<h1>Pick a letter to form words.</h1>`

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

    // to make the start button disappear when start pressed
    startButtonDiv.innerHTML = ``
}

function storeLetter() {
    let letterInfo = this.getAttribute('data-info')
    pickedLetters.push(letterInfo)
    lettersPicked.innerText = `${pickedLetters.join('')}`
}
function checkWord() {
    let wordFormed = pickedLetters.join('')

    // to check if the word is already guessed
    for (let i = 0; i < words.length; i++) {
        if (wordFormed === wordsGuessed[i]) {
            alert(`You have already guessed this word!`)
            return
        }
    }

    // to check if the word is in the list of words needed to be identified
    for (let i = 0; i < words.length; i++) {

        if (wordFormed === words[i]) {
            alert(`Congrats! You found a new word!`)
            wordsGuessed.push(wordFormed)

            // fills the words guessed in boxes
            if (wordFormed === 'vest') {
                document.querySelectorAll('.box')[40].innerHTML = 'v'
                document.querySelectorAll('.box')[41].innerHTML = 'e'
                document.querySelectorAll('.box')[42].innerHTML = 's'
                document.querySelectorAll('.box')[43].innerHTML = 't'
            } else if (wordFormed === 'vets') {
                document.querySelectorAll('.box')[23].innerHTML = 'v'
                document.querySelectorAll('.box')[24].innerHTML = 'e'
                document.querySelectorAll('.box')[25].innerHTML = 't'
                document.querySelectorAll('.box')[26].innerHTML = 's'
            } else if (wordFormed === 'rise') {
                document.querySelectorAll('.box')[6].innerHTML = 'r'
                document.querySelectorAll('.box')[7].innerHTML = 'i'
                document.querySelectorAll('.box')[8].innerHTML = 's'
                document.querySelectorAll('.box')[9].innerHTML = 'e'
            } else if (wordFormed === 'stir') {
                document.querySelectorAll('.box')[8].innerHTML = 's'
                document.querySelectorAll('.box')[18].innerHTML = 't'
                document.querySelectorAll('.box')[28].innerHTML = 'i'
                document.querySelectorAll('.box')[38].innerHTML = 'r'
            } else if (wordFormed === 'tire') {
                document.querySelectorAll('.box')[36].innerHTML = 't'
                document.querySelectorAll('.box')[37].innerHTML = 'i'
                document.querySelectorAll('.box')[38].innerHTML = 'r'
                document.querySelectorAll('.box')[39].innerHTML = 'e'
            } else if (wordFormed === 'rivet') {
                document.querySelectorAll('.box')[3].innerHTML = 'r'
                document.querySelectorAll('.box')[13].innerHTML = 'i'
                document.querySelectorAll('.box')[23].innerHTML = 'v'
                document.querySelectorAll('.box')[33].innerHTML = 'e'
                document.querySelectorAll('.box')[43].innerHTML = 't'
            } else if (wordFormed === 'rest') {
                document.querySelectorAll('.box')[6].innerHTML = 'r'
                document.querySelectorAll('.box')[16].innerHTML = 'e'
                document.querySelectorAll('.box')[26].innerHTML = 's'
                document.querySelectorAll('.box')[36].innerHTML = 't'
            } else if (wordFormed === 'ires') {
                document.querySelectorAll('.box')[37].innerHTML = 'i'
                document.querySelectorAll('.box')[47].innerHTML = 'r'
                document.querySelectorAll('.box')[57].innerHTML = 'e'
                document.querySelectorAll('.box')[67].innerHTML = 's'
            } else if (wordFormed === 'site') {
                document.querySelectorAll('.box')[63].innerHTML = 's'
                document.querySelectorAll('.box')[73].innerHTML = 'i'
                document.querySelectorAll('.box')[83].innerHTML = 't'
                document.querySelectorAll('.box')[93].innerHTML = 'e'
            } else if (wordFormed === 'sire') {
                document.querySelectorAll('.box')[45].innerHTML = 's'
                document.querySelectorAll('.box')[55].innerHTML = 'i'
                document.querySelectorAll('.box')[65].innerHTML = 'r'
                document.querySelectorAll('.box')[75].innerHTML = 'e'
            }  else if (wordFormed === 'strive') {
                document.querySelectorAll('.box')[70].innerHTML = 's'
                document.querySelectorAll('.box')[71].innerHTML = 't'
                document.querySelectorAll('.box')[72].innerHTML = 'r'
                document.querySelectorAll('.box')[73].innerHTML = 'i'
                document.querySelectorAll('.box')[74].innerHTML = 'v'
                document.querySelectorAll('.box')[75].innerHTML = 'e'
            }  else if (wordFormed === 'rite') {
                document.querySelectorAll('.box')[54].innerHTML = 'r'
                document.querySelectorAll('.box')[55].innerHTML = 'i'
                document.querySelectorAll('.box')[56].innerHTML = 't'
                document.querySelectorAll('.box')[57].innerHTML = 'e'
            }  else if (wordFormed === 'tier') {
                document.querySelectorAll('.box')[21].innerHTML = 't'
                document.querySelectorAll('.box')[31].innerHTML = 'i'
                document.querySelectorAll('.box')[41].innerHTML = 'e'
                document.querySelectorAll('.box')[51].innerHTML = 'r'
            } 
        }
    }

    if (words.includes(wordFormed) === false) {
        alert(`Sorry, try another guess!`)
    }

    resultDiv.innerText = `Words guessed: ${wordsGuessed.length}/${words.length}`

    if (wordsGuessed.length === words.length) {
        document.querySelector('body').innerHTML = `<h1>Congratulations, you found them all!</h1>`
    }

}

function clearWord() {
    pickedLetters = []
    lettersPicked.innerText = `${pickedLetters.join('')}`
}
