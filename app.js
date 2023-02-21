//Car Card matching game
//Instructions: Two player matching card game
// During round one there will be 4 seconds to view the back of each card for memorization
//Each player will take turns clicking on two cards each turn to find the matching set
//Second round will increase in difficulty with less time to view cards, less time to match cards and more cards will be added
//The player with the most matched sets in the alloted time wins. 


// Card sets Array
const cardSet =[
    {
        name: 'i8',
        img: 'https://www.westcoastexoticcars.com/imagetag/49/main/l/Used-2016-BMW-i8-1610048744.jpg'
    },
    {
        name: 'Lamb',
        img: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/c200-lamborghini-sian-rds-final-150-1594215316.jpg?crop=0.5625xw:1xh;center,top&resize=1200:*'
    },
    {
        name: 'rolls',
        img: 'https://mediapool.bmwgroup.com/cache/P9/202110/P90442352/P90442352-rolls-royce-announces-black-badge-ghost-the-purest-black-badge-yet-2249px.jpg'
    },
    {
        name: 'gwagon',
        img: 'https://pbs.twimg.com/media/E3llxWHWYAIw_kJ.jpg'
    },
    {
        name: 'range',
        img: 'https://s3.us-east-2.amazonaws.com/dealer-inspire-vps-vehicle-images/110005554/SALGW2SE2JA514373/27f2460a3be05f0fa63e3b4fe55b6694.jpg'
    },
   
    {
        name: 'i8',
        img: 'src/images/fries.png'
    },
    {
        name: 'Lamb',
        img: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/c200-lamborghini-sian-rds-final-150-1594215316.jpg?crop=0.5625xw:1xh;center,top&resize=1200:*'
    },
    {
        name: 'rolls',
        img: 'https://mediapool.bmwgroup.com/cache/P9/202110/P90442352/P90442352-rolls-royce-announces-black-badge-ghost-the-purest-black-badge-yet-2249px.jpg'
    },
    {
        name: 'gwagon',
        img: 'https://pbs.twimg.com/media/E3llxWHWYAIw_kJ.jpg'
    },
    {
        name: 'range',
        img: 'https://s3.us-east-2.amazonaws.com/dealer-inspire-vps-vehicle-images/110005554/SALGW2SE2JA514373/27f2460a3be05f0fa63e3b4fe55b6694.jpg'
    }
    
]

cardSet.sort(() => 0.5 - Math.random())
console.log(cardSet);

//Add & define variables and get DOM element
//grid, scoreboard, popup alert, playAgain and clickBoard

//Flip Card Function

// Add click function for images


// arrangeCard function using Math.random
function arrangeCards() { 
    cardSet.sort(() => 0.5 - Math.random())
    }

//Check for match function

//replay function

