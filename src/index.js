const $time = document.querySelector('time');
const $paragraph = document.querySelector('p');
const $input = document.querySelector('input');


const INITIAL_TIME = 30;

const TEXT = 'the quick brown fox jums over the lazy dog benja is trying to clone monkey type for fun and profit and using vanilla js'

let words = []
let currentTime = INITIAL_TIME;

initGame()
initEvens()

function initGame() {
    words = TEXT.split(' ').slice(0, 32)
    currentTime = INITIAL_TIME

    $time.textContent = currentTime

    // $paragraph.textContent = words.map(word => word + ' ').join('')

    $paragraph.innerHTML = words.map( (word, inex) => {
        const letters = word.split('')
        return (
                `<word>
                    ${letters
                        .map(letter => `<letter>${letter}</letter>`)
                        .join('')
                    }
                </word>`
            )
    }).join('')

    const $firstWord = $paragraph.querySelector('word')
    $firstWord.classList.add('active')
    $firstWord.querySelector('letter').classList.add('active')
    const intervalId = setInterval( () => {
        currentTime--
        $time.textContent = currentTime
        
        if (currentTime == 0) {
            clearInterval(intervalId)
            gameOver()
        }
    }, 1000)
}

function initEvens() {
    document.addEventListener('keydown', () => {
        $input.focus()
    })

    $input.addEventListener('keydown', onKeyDown)
    $input.addEventListener('keyup', onKeyUp)
}


function onKeyUp() {}

function onKeyDown() {
    // current element active
    const $currentWord = $paragraph.querySelector('word.active')
    const $currentLetter = $currentWord.querySelector('letter.active')

    const currentWord = $currentWord.innerText.trim()

    $input.maxLength = currentWord.length

    const $allLetters = $currentWord.querySelectorAll('letter')

    $allLetters.forEach($letter => $letter.classList.remove('correct', 'incorrect'))


    $input.value.split('').forEach( (char, index) => {

        const $letter = $allLetters[index]
        const letterToCheck = currentWord[index]

        const isCorrect = char == letterToCheck
        const letterClass = isCorrect ? 'correct' : 'incorrect'
        $letter.classList.add(letterClass)
    })

    $currentLetter.classList.remove('active', 'is-last')
    const inputLength = $input.value.length 


    const $nextActiveLetters = $allLetters[inputLength]

    if ($nextActiveLetters){
        $nextActiveLetters.classList.add('active')
    } else {
        $currentLetter.classList.add('active', 'is-last')
    }
}   


function gameOver() {
    console.log('game over')
}