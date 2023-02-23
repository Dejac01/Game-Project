//Car Card matching game
//Instructions: Two player matching card game
// During round one there will be 3 seconds to view the back of each card for memorization
//Each player will take turns clicking on two cards each turn to find the matching set
//Second round will increase in difficulty with less time to view cards, less time to match cards and more cards will be added
//The player with the most matched sets in the alloted time wins. 

document.addEventListener("DOMContentLoaded", () => {

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
        car: 'goldLamb',
        img: 'https://s1.cdn.autoevolution.com/images/news/worlds-most-expensive-lamborghini-the-75m-aventador-carved-out-of-gold-165823-7.jpg'
    },
   
    {
        car: 'i8',
        img: 'src/images/fries.png'
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
        car: 'goldLamb',
        img: 'https://s1.cdn.autoevolution.com/images/news/worlds-most-expensive-lamborghini-the-75m-aventador-carved-out-of-gold-165823-7.jpg'
    }
    
]

cardSet.sort(() => 0.5 - Math.random())
console.log(cardSet);

//Board Function
const board = document.querySelector('.board')

function createBoard() {
    for (let i = 0; i <cardSet.length; i++){
        const card = document.createElement('img');
        card.setAttribute('src','https://i0.wp.com/www.car-revs-daily.com/wp-content/uploads/2014/03/HYUNDAI-Coupe-Designs-HND-9-animated-gif-header.gif')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        board.appendChild(card)
    }
}
//Add & define variables and get DOM element
//*scoreboard, popup alert, playAgain and clickBoard*


//Flip Card Function
function flipCard() { 
    let selected = this.dataset.id;
    cardsSelected.push(cardSet[selected].name); 
    cardsId.push(selected); 
    this.classList.add("flip"); 
    this.setAttribute("src", cardSet[selected].img); 
    if (cardsId.length === 2) { 
    setTimeout(checkForMatch, 500);
    } 
    }

// Add click function for images


// arrangeCard function using Math.random
function arrangeCards() { 
    cardSet.sort(() => 0.5 - Math.random())
    }

//Timer Function

//Check for match function


//Rematch function
})