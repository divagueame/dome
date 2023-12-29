document.addEventListener('DOMContentLoaded', () => {
const cardArray = [
    {
        name: 'planet',
        img: 'img/1.jpg'
    },
    {
        name: 'skull';
        img: 'img/2.jpg'
    },
    {
        name: 'lion',
        img: 'img/3.jpg'
    },
    {
        name: 'octopus',
        img: 'img/4.jpg'
    },
    {
        name: 'duck',
        img: 'img/5.jpg'
    },
    {
        name: 'time',
        img: 'img/6.jpg'
    }

]

const grid = document.querySelector('.grid')

function createBoard() {
    for (let i = 1; i < cardArray.length; i++){
        var card = document.createElement('img')}
        card.setAttribute('src','img/sfondo.jpeg')
        card.setAttribute('data-id',i)
        // card.addEventListener('click',flipcard)
        grid.appendChild(card)
}
}
cardArray.sort(() => 0.5 - Math.random())

const grid = document.querySelector('.grid')
const resultDisplay = document.querySelector('#result')
let cardsChosen = []
let cardsChosenId = []
let cardsWon = []

//create your board
function createBoard() {
  for (let i = 0; i < cardArray.length; i++) {
    const card = document.createElement('img')
    card.setAttribute('src', 'images/blank.png')
    card.setAttribute('data-id', i)
    card.addEventListener('click', flipCard)
    grid.appendChild(card)
  }
}

//check for matches
function checkForMatch() {
  const cards = document.querySelectorAll('img')
  const optionOneId = cardsChosenId[0]
  const optionTwoId = cardsChosenId[1]
  
  if(optionOneId == optionTwoId) {
    cards[optionOneId].setAttribute('src', 'img/sfondo.jpeg')
    cards[optionTwoId].setAttribute('src', 'img/sfondo.jpeg')
    alert('You have clicked the same image!')
  }
  else if (cardsChosen[0] === cardsChosen[1]) {
    alert('You found a match')
    cards[optionOneId].setAttribute('src', 'images/white.png')
    cards[optionTwoId].setAttribute('src', 'images/white.png')
    cards[optionOneId].removeEventListener('click', flipCard)
    cards[optionTwoId].removeEventListener('click', flipCard)
    cardsWon.push(cardsChosen)
  } else {
    cards[optionOneId].setAttribute('src', 'img/sfondo.jpeg')
    cards[optionTwoId].setAttribute('src', 'img/sfondo.jpeg')
    alert('Sorry, try again')
  }
  cardsChosen = []
  cardsChosenId = []
  resultDisplay.textContent = cardsWon.length
  if  (cardsWon.length === cardArray.length/2) {
    resultDisplay.textContent = 'Congratulations! You found them all!'
  }
}

//flip your card
function flipCard() {
  let cardId = this.getAttribute('data-id')
  cardsChosen.push(cardArray[cardId].name)
  cardsChosenId.push(cardId)
  this.setAttribute('src', cardArray[cardId].img)
  if (cardsChosen.length ===2) {
    setTimeout(checkForMatch, 500)
  }
}

createBoard()
})