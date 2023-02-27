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
        card.setAttribute('src', 'https://i0.wp.com/www.car-revs-daily.com/wp-content/uploads/2014/03/LaFerrari-NERO-Animated-Turntable-GIF.gif?ssl=1')
        card.setAttribute('data-id', i)
        card.setAttribute("class", "cardsize")
        card.addEventListener('click', flipCard)
        card.style.margin = "5px";
        board.appendChild(card)
        showPopup("Lets Begin!");
    }
}

setTimeout(MyBoard(), 150)

// MyBoard();

//Flip Card Function
function flipCard(){
    console.log('clicked')
    let choice = this.getAttribute('data-id')
    playerChoices.push(cardSet[choice].name)  
    choiceIds.push(choice)  
    this.setAttribute('src', cardSet[choice].img)
    alert("New Image should show");
    if (cardsChosen.length === 2){
        setTimeout(checkForMatch, 5)
    }
    console.log(cardsChosen); 
}

// on click function
imgs = document.querySelectorAll("img");
Array.from(imgs).forEach(img => 
img.addEventListener("click", flipCard)
);



// arrangeCard function using Math.random
function arrangeCard() {
    cardSet.sort(() => 0.5 - Math.random())
    }

arrangeCard();

//Timer Function

//Check for match function


//Rematch function


})
