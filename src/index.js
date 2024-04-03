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

}

function gameOver() {
    console.log('game over')
}