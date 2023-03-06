//Car Card matching game
//Instructions: Two player matching card game
// During round one there will be 3 seconds to view the back of each card for memorization
//Each player will take turns clicking on two cards each turn to find the matching set
//Second round will increase in difficulty with less time to view cards, less time to match cards and more cards will be added
//The player with the most matched sets in the alloted time wins.

// window.alert("Instructions: Two player matching card game. During round one there will be 3 seconds to view the back of each card for memorization. Each player will take turns clicking on two cards each turn to find the matching set.The player with the most matched sets in the alloted time wins. ");
document.addEventListener("DOMContentLoaded", () => {

  window.alert("Welcome to the Pokemon Card Match Game! Heres the only rule of the game: Have Fun!");
  
  // Card sets Array
  const cardSet = [
    {
      car: "1",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNyGuPPVXvR2l01C6cMkJduM8tII0hQQC-MA&usqp=CAU",
    },
    {
      car: "2",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_95tBacTlaVkITFBjuqEmae336VCBI_FQ1g&usqp=CAU",
    },
    {
      car: "3",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPahA4uF5cgsy2zS07A5T4EY5JAkth1rmPsg&usqp=CAU",
    },
    {
      car: "4",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFZZhM6Y_lh3LT0sGdqyP7BvdVeI4spIafLA&usqp=CAU",
    },
    {
      car: "5",
      img: "data:image/jpeg;base64,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",
    },
    {
      car: "6",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtbB8boCLKupt8OvwbTKxXLkV0HRee1Pn2Lw&usqp=CAU",
    },

    {
      car: "1",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNyGuPPVXvR2l01C6cMkJduM8tII0hQQC-MA&usqp=CAU",
    },
    {
      car: "2",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_95tBacTlaVkITFBjuqEmae336VCBI_FQ1g&usqp=CAU",
    },
    {
      car: "3",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPahA4uF5cgsy2zS07A5T4EY5JAkth1rmPsg&usqp=CAU",
    },
    {
      car: "4",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFZZhM6Y_lh3LT0sGdqyP7BvdVeI4spIafLA&usqp=CAU",
    },
    {
      car: "5",
      img: "data:image/jpeg;base64,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",
    },
    {
      car: "6",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtbB8boCLKupt8OvwbTKxXLkV0HRee1Pn2Lw&usqp=CAU",
    },
  ];
  

  cardSet.sort(() => 0.5 - Math.random());
  console.log(cardSet);
  let playerChoices = [];
  let choiceIds = [];
  let cardsDone = [];
  let Player1 = true;
  let Player1Score = 0;
  let Player2Score = 0;
  let Player1Results = document.querySelector(".scoreBoard1");
  let Player2Results = document.querySelector(".scoreBoard2");

  //Popup
  const showPopup = (msg) => {
    let popupDisplay = document.querySelector(".popup");
    popupDisplay.innerHTML = msg;
  };
  showPopup();

  //Board Function
  const board = document.querySelector(".board");

  function MyBoard() {
    for (let i = 0; i < cardSet.length; i++) {
      const card = document.createElement("img");
      card.setAttribute(
        "src",
        "https://us.123rf.com/450wm/lkeskinen/lkeskinen1802/lkeskinen180202844/95589838-pick-me-rubber-stamp-grunge-design-with-dust-scratches-effects-can-be-easily-removed-for-a-clean.jpg?ver=6"
      );
      card.setAttribute("data-id", i);
      card.setAttribute("class", "cardsize");
      card.addEventListener("click", showCard);
      card.style.margin = "8px";
      board.appendChild(card);
      showPopup("Lets Begin!");
    }
  }

  setTimeout(MyBoard(), 150);

  // MyBoard();

  //Flip Card Function
  function showCard() {
    console.log("clicked");
    let choice = this.getAttribute("data-id");
    playerChoices.push(cardSet[choice].car);
    choiceIds.push(choice);
    this.setAttribute("src", cardSet[choice].img);
    if (playerChoices.length === 2) {
      setTimeout(matchFunction, 100);
    }
  }

  // on click function
  imgs = document.querySelectorAll("img");
  Array.from(imgs).forEach((img) => img.addEventListener("click", showCard));

  // arrangeCard function using Math.random
  function arrangeCard() {
    cardSet.sort(() => 0.5 - Math.random());
  }

  arrangeCard();

  //Set player score function
    function setPlayerScore(){
    if(Player1){
        // give points to player one
        Player1Score = Player1Score + 1
        Player1Results.innerHTML=Player1Score
    }
    else{
        // give points to player two
        Player2Score =  Player2Score + 1
        Player2Results.innerHTML = Player2Score
    }
  }

  //Timer Function
  //Function same card alert
  function sameCardAlert(cards, Id1, Id2) {
    alert("You have clicked the same image");
    cards[Id1].setAttribute(
      "src",
      "https://us.123rf.com/450wm/lkeskinen/lkeskinen1802/lkeskinen180202844/95589838-pick-me-rubber-stamp-grunge-design-with-dust-scratches-effects-can-be-easily-removed-for-a-clean.jpg?ver=6"
    );
    cards[Id2].setAttribute(
      "src",
      "https://us.123rf.com/450wm/lkeskinen/lkeskinen1802/lkeskinen180202844/95589838-pick-me-rubber-stamp-grunge-design-with-dust-scratches-effects-can-be-easily-removed-for-a-clean.jpg?ver=6"
    );
    }

  //match found
  function matchFound(cards, Id1, Id2) {
    cards[Id1].setAttribute(
      "src",
      "https://www.shutterstock.com/image-vector/abstract-grey-smooth-gradient-background-260nw-1022786422.jpg"
    );
    cards[Id2].setAttribute(
      "src",
      "https://www.shutterstock.com/image-vector/abstract-grey-smooth-gradient-background-260nw-1022786422.jpg"
    );
    cards[Id1].removeEventListener("click", showCard);
    cards[Id2].removeEventListener("click", showCard);
    console.log("PLayer choices", playerChoices.length);
    cardsDone = cardsDone.concat(playerChoices);
    setPlayerScore();

    // call set player score
  }

  // clear out
  function clearOut() {
    playerChoices = [];
    choiceIds = [];
    Player1 = !Player1;
  }

  //no match
  function noMatch(cards, Id1, Id2) {
    cards[Id1].setAttribute(
      "src",
      "https://us.123rf.com/450wm/lkeskinen/lkeskinen1802/lkeskinen180202844/95589838-pick-me-rubber-stamp-grunge-design-with-dust-scratches-effects-can-be-easily-removed-for-a-clean.jpg?ver=6"
    );
    cards[Id2].setAttribute(
      "src",
      "https://us.123rf.com/450wm/lkeskinen/lkeskinen1802/lkeskinen180202844/95589838-pick-me-rubber-stamp-grunge-design-with-dust-scratches-effects-can-be-easily-removed-for-a-clean.jpg?ver=6"
    );
    alert("No Match!");
  }

  // Game Function
  function matchFunction() {
    const cards = document.querySelectorAll("img");
    if (choiceIds[0] == choiceIds[1]) {
      sameCardAlert(cards, choiceIds[0], choiceIds[1]);
    } else if (playerChoices[0] === playerChoices[1]) {
        alert("You have a match"); 
        matchFound(cards, choiceIds[0], choiceIds[1]);
    } else {
      noMatch(cards,choiceIds[0], choiceIds[1]);
    }

    clearOut();

    console.log("Player1", Player1Score);
    console.log("Player2", Player2Score);
    console.log('cardsDone', cardsDone.length)
    console.log('cardSet', cardSet.length)
    if (cardsDone.length === cardSet.length) {
      announceWinner();
      resetBoard(cards);
      clearOut();
    }

  }
  // Announce Winner
function announceWinner () {
if (Player1Score > Player2Score) {
    alert('Player 1 wins! Click ok to restart!')
}else if (Player2Score > Player1Score) {
    alert('Player 2 wins! Click ok to restart!')
}else {alert('Youve Tied! Click ok for rematch!')}

}
  //Remove board function
function resetBoard (cards) { 
    for (let i = 0; i < cards.length; i++) {
        cards[i].remove()
      }
      resetValues();
      MyBoard();
}

//reset values
function resetValues() {
clearOut();
Player1Score = 0
Player2Score = 0
Player1 = true;
Player1Results.innerHTML=0
Player2Results.innerHTML=0
}

});
