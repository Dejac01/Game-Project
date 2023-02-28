//Car Card matching game
//Instructions: Two player matching card game
// During round one there will be 3 seconds to view the back of each card for memorization
//Each player will take turns clicking on two cards each turn to find the matching set
//Second round will increase in difficulty with less time to view cards, less time to match cards and more cards will be added
//The player with the most matched sets in the alloted time wins. 

// window.alert("Instructions: Two player matching card game. During round one there will be 3 seconds to view the back of each card for memorization. Each player will take turns clicking on two cards each turn to find the matching set.The player with the most matched sets in the alloted time wins. ");
document.addEventListener('DOMContentLoaded', () => {
  
// Card sets Array
const cardSet =[
    {
        car: 'i8',
        img: 'https://www.westcoastexoticcars.com/imagetag/49/main/l/Used-2016-BMW-i8-1610048744.jpg'
    }, 
    {
        car: 'Lamb',
        img: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/c200-lamborghini-sian-rds-final-150-1594215316.jpg?crop=0.5625xw:1xh;center,top&resize=1200:*'
    },
    {
        car: 'rolls',
        img: 'https://mediapool.bmwgroup.com/cache/P9/202110/P90442352/P90442352-rolls-royce-announces-black-badge-ghost-the-purest-black-badge-yet-2249px.jpg'
    },
    {
        car: 'gwagon',
        img: 'https://pbs.twimg.com/media/E3llxWHWYAIw_kJ.jpg'
    },
    {
        car: 'range',
        img: 'https://s3.us-east-2.amazonaws.com/dealer-inspire-vps-vehicle-images/110005554/SALGW2SE2JA514373/27f2460a3be05f0fa63e3b4fe55b6694.jpg'
    },
    {
        car: 'bb',
        img: 'https://media.wired.com/photos/5927284ff3e2356fd800b9b4/master/w_1600%2Cc_limit/03_CHIRON_34-front_WEB.jpg'
    },
   
    {
        car: 'i8',
        img: 'https://www.westcoastexoticcars.com/imagetag/49/main/l/Used-2016-BMW-i8-1610048744.jpg'
    },
    {
        car: 'Lamb',
        img: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/c200-lamborghini-sian-rds-final-150-1594215316.jpg?crop=0.5625xw:1xh;center,top&resize=1200:*'
    },
    {
        car: 'rolls',
        img: 'https://mediapool.bmwgroup.com/cache/P9/202110/P90442352/P90442352-rolls-royce-announces-black-badge-ghost-the-purest-black-badge-yet-2249px.jpg'
    },
    {
        car: 'gwagon',
        img: 'https://pbs.twimg.com/media/E3llxWHWYAIw_kJ.jpg'
    },
    {
        car: 'range',
        img: 'https://s3.us-east-2.amazonaws.com/dealer-inspire-vps-vehicle-images/110005554/SALGW2SE2JA514373/27f2460a3be05f0fa63e3b4fe55b6694.jpg'
    },
    {
        car: 'bb',
        img: 'https://media.wired.com/photos/5927284ff3e2356fd800b9b4/master/w_1600%2Cc_limit/03_CHIRON_34-front_WEB.jpg'
    }
    
]

cardSet.sort(() => 0.5 - Math.random())
console.log(cardSet);
let playerChoices = [];
let choiceIds = [];


//Popup
const showPopup = (msg) => {
    let popupDisplay = document.querySelector(".popup");
    popupDisplay.innerHTML = msg;
  }; 
showPopup();

//Board Function
const board = document.querySelector('.board')

function MyBoard(){
    for (let i = 0; i <cardSet.length; i++){
        const card = document.createElement('img');
        card.setAttribute('src', 'https://us.123rf.com/450wm/lkeskinen/lkeskinen1802/lkeskinen180202844/95589838-pick-me-rubber-stamp-grunge-design-with-dust-scratches-effects-can-be-easily-removed-for-a-clean.jpg?ver=6')
        card.setAttribute('data-id', i)
        card.setAttribute("class", "cardsize")
        card.addEventListener('click', showCard)
        card.style.margin = "6px";
        board.appendChild(card)
        showPopup("Lets Begin!");
    }
}

setTimeout(MyBoard(), 150)

// MyBoard();

//Flip Card Function
function showCard(){
    console.log('clicked')
    let choice = this.getAttribute('data-id')
    playerChoices.push(cardSet[choice].name)  
    choiceIds.push(choice)  
    this.setAttribute('src', cardSet[choice].img)
    if (playerChoices.length === 2){
        setTimeout(matchFunction, 15)
    }
    console.log(cardsChosen); 
}

// on click function
imgs = document.querySelectorAll("img");
Array.from(imgs).forEach(img => 
img.addEventListener("click", showCard)
);



// arrangeCard function using Math.random
function arrangeCard() {
    cardSet.sort(() => 0.5 - Math.random())
    }

arrangeCard();

//Timer Function
//Function same card alert
function sameCardAlert(cards,Id1, Id2) {
    alert('You have clicked the same image');
    cards[Id1].setAttribute('src', 'https://us.123rf.com/450wm/lkeskinen/lkeskinen1802/lkeskinen180202844/95589838-pick-me-rubber-stamp-grunge-design-with-dust-scratches-effects-can-be-easily-removed-for-a-clean.jpg?ver=6') 
    cards[Id2].setAttribute('src', 'https://us.123rf.com/450wm/lkeskinen/lkeskinen1802/lkeskinen180202844/95589838-pick-me-rubber-stamp-grunge-design-with-dust-scratches-effects-can-be-easily-removed-for-a-clean.jpg?ver=6')  

}

//match found
function matchFound(cards, Id1, Id2){
    cards[Id1].setAttribute('src', 'https://www.shutterstock.com/image-vector/abstract-grey-smooth-gradient-background-260nw-1022786422.jpg') 
    cards[Id2].setAttribute('src', 'https://www.shutterstock.com/image-vector/abstract-grey-smooth-gradient-background-260nw-1022786422.jpg') 
    cards[Id1].removeEventListener('click', flipCard)
    cards[Id2].removeEventListener('click', flipCard)
    cardsWon.push(cardsChosen)
// call set player score
}

// clear out
function clearOut() {
    playerChoices = []
  choiceIds = []
}

//no match
function noMatch (cards, Id1, Id2) {
    cards[Id1].setAttribute('src', 'images/blank.png')
    cards[Id2].setAttribute('src', 'images/blank.png')
    alert('No Match!')
}


// Game Function
function matchFunction() {
    
const cards = document.querySelectorAll('img')
if (choiceIds[0] == choiceIds[1]){
   sameCardAlert(cards, choiceIds[0], choiceIds[1]); 
}
else if (playerChoices[0] === playerChoices[1]){
    matchFound(cards, choiceIds[0], choiceIds[1]);
    alert('You have a match')   
}
else {
    cards[optionOneId].setAttribute('src', 'images/blank.png')
    cards[optionTwoId].setAttribute('src', 'images/blank.png')
    alert('Sorry, try again')
  }
  
  resultDisplay.textContent = cardsWon.length
  if  (cardsWon.length === cardArray.length/2) {
    resultDisplay.textContent = 'Congratulations! You found them all!'
  }
}



    

//Rematch function


})
