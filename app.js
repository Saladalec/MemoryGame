const cardArray = [
    {
        name: 'KC',
        img: 'images/KC.png',
    },
    {
        name: 'KD',
        img: 'images/KD.png',
    },
    {
        name: 'KH',
        img: 'images/KH.png',
    },
    {
        name: 'KS',
        img: 'images/KS.png',
    },
    {
        name: 'QC',
        img: 'images/QC.png',
    },
    {
        name: 'QD',
        img: 'images/QD.png',
    },
    {
        name: 'QH',
        img: 'images/QH.png',
    },
    {
        name: 'QS',
        img: 'images/QS.png',
    },
    {
        name: 'KC',
        img: 'images/KC.png',
    },
    {
        name: 'KD',
        img: 'images/KD.png',
    },
    {
        name: 'KH',
        img: 'images/KH.png',
    },
    {
        name: 'KS',
        img: 'images/KS.png',
    },
    {
        name: 'QC',
        img: 'images/QC.png',
    },
    {
        name: 'QD',
        img: 'images/QD.png',
    },
    {
        name: 'QH',
        img: 'images/QH.png',
    },
    {
        name: 'QS',
        img: 'images/QS.png',
    },
]

cardArray.sort(() => 0.5 - Math.random());
const grid = document.querySelector('#grid');
const score = document.querySelector('#score');
score.textContent = '0';
let chosenCards =[];
let chosenCardsIds = [];
const cardsWon = [];

function createBoard() {
    for(let i = 0; i < cardArray.length; i++){
        const card = document.createElement('img');
        card.setAttribute('src', 'images/back.png');
        card.setAttribute('data-id', i);
        card.addEventListener('click', flipCard);
        grid.append(card);
    }
}

createBoard();

function checkMatch(){
    const cards = document.querySelectorAll('img');

    if (chosenCardsIds[0] == chosenCardsIds[1]){
        alert('You clicked the same card!');
        cards[chosenCardsIds[0]].setAttribute('src', 'images/back.png');
        cards[chosenCardsIds[1]].setAttribute('src', 'images/back.png');
    }
    else if(chosenCards[0] == chosenCards[1]){
        cards[chosenCardsIds[0]].setAttribute('src', 'images/Green.png');
        cards[chosenCardsIds[1]].setAttribute('src', 'images/Green.png');
        cards[chosenCardsIds[0]].removeEventListener('click', flipCard);
        cards[chosenCardsIds[1]].removeEventListener('click', flipCard);
        cardsWon.push(chosenCards);
    }
    else {
        cards[chosenCardsIds[0]].setAttribute('src', 'images/back.png');
        cards[chosenCardsIds[1]].setAttribute('src', 'images/back.png');
    }
    score.textContent = cardsWon.length;
    chosenCards = [];
    chosenCardsIds = [];

    if(cardsWon.length == 8){
        score.textContent = "You won!";
    }
}

function flipCard(){
    const cardID = this.getAttribute('data-id');
    chosenCards.push(cardArray[cardID].name);
    chosenCardsIds.push(cardID);
    this.setAttribute('src', cardArray[cardID].img);
    if (chosenCards.length === 2){
        setTimeout(checkMatch, 500);
    }
}
