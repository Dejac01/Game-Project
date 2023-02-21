//Card matching game
//Instructions: Two player matching card game
// During round one there will be 4 seconds to view the back of each card for memorization
//Each player will take turns clicking on two cards each turn to find the matching set
//Every round will increase in difficulty with less time to view cards, less time to match cards and more cards will be added each round
//The player with the most matched sets in the alloted time wins. 


// Card sets Array
const cardSet =[
    {
        name: 'fries',
        img: 'src/images/fries.png'
    },
    {
        name: 'cheeseburger',
        img: 'src/images/cheeseburger.png'
    },
    {
        name: 'ice-cream',
        img: 'src/images/ice-cream.png'
    },
    {
        name: 'pizza',
        img: 'src/images/pizza.png'
    },
    {
        name: 'milkshake',
        img: 'src/images/milkshake.png'
    },
    {
        name: 'hotdog',
        img: 'src/images/hotdog.png'
    },
    {
        name: 'fries',
        img: 'src/images/fries.png'
    },
    {
        name: 'cheeseburger',
        img: 'src/images/cheeseburger.png'
    },
    {
        name: 'ice-cream',
        img: 'src/images/ice-cream.png'
    },
    {
        name: 'pizza',
        img: 'src/images/pizza.png'
    },
    {
        name: 'milkshake',
        img: 'src/images/milkshake.png'
    },
    {
        name: 'hotdog',
        img: 'src/images/hotdog.png'
    }
]

cardSet.sort(() => 0.5 - Math.random())
console.log(cardSet);

//Add & define variables and get DOM element
// document.addEventListener("DOMContentLoaded", function () {
//grid, scoreboard, popup alert, playAgain and clickBoard

//Flip Card Function

// Add click function for images


// arrangeCard function using Math.random
function arrangeCards() { 
    cardSet.sort(() => 0.5 - Math.random())
    }

//Check for match function

//replay function

