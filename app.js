//Car Card matching game
//Instructions: Two player matching card game
// During round one there will be 3 seconds to view the back of each card for memorization
//Each player will take turns clicking on two cards each turn to find the matching set
//Second round will increase in difficulty with less time to view cards, less time to match cards and more cards will be added
//The player with the most matched sets in the alloted time wins.
// window.alert("Instructions: Two player matching card game. During round one there will be 3 seconds to view the back of each card for memorization. Each player will take turns clicking on two cards each turn to find the matching set.The player with the most matched sets in the alloted time wins. ");
// window.alert(
//   "Welcome to the Pokemon Card Match Game! Heres the only rule of the game: Have Fun!"
// );
console.log("hi");
const startPage = () => {
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
      img: "https://raw.githubusercontent.com/jherr/fower-pokemon-vue/master/public/pokemon/charmander.jpg",
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
      img: "https://raw.githubusercontent.com/jherr/fower-pokemon-vue/master/public/pokemon/charmander.jpg",
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
      card.setAttribute("src", "./images/pokemon.png");
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
  function setPlayerScore() {
    if (Player1) {
      // give points to player one
      Player1Score = Player1Score + 1;
      Player1Results.innerHTML = Player1Score;
    } else {
      // give points to player two
      Player2Score = Player2Score + 1;
      Player2Results.innerHTML = Player2Score;
    }
  }

  //Timer Function
  //Function same card alert
  function sameCardAlert(cards, Id1, Id2) {
    alert("You have clicked the same image");
    cards[Id1].setAttribute("src", "./images/pokemon.png");
    cards[Id2].setAttribute("src", "./images/pokemon.png");
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
    cards[Id1].setAttribute("src", "./images/pokemon.png");
    cards[Id2].setAttribute("src", "./images/pokemon.png");
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
      noMatch(cards, choiceIds[0], choiceIds[1]);
    }

    clearOut();

    console.log("Player1", Player1Score);
    console.log("Player2", Player2Score);
    console.log("cardsDone", cardsDone.length);
    console.log("cardSet", cardSet.length);
    if (cardsDone.length === cardSet.length) {
      announceWinner();
      resetBoard(cards);
      clearOut();
    }
  }
  // Announce Winner
  function announceWinner() {
    if (Player1Score > Player2Score) {
      alert("Player 1 wins! Click ok to restart!");
    } else if (Player2Score > Player1Score) {
      alert("Player 2 wins! Click ok to restart!");
    } else {
      alert("Youve Tied! Click ok for rematch!");
    }
  }
  //Remove board function
  function resetBoard(cards) {
    for (let i = 0; i < cards.length; i++) {
      cards[i].remove();
    }
    resetValues();
    MyBoard();
  }

  //reset values
  function resetValues() {
    clearOut();
    Player1Score = 0;
    Player2Score = 0;
    Player1 = true;
    Player1Results.innerHTML = 0;
    Player2Results.innerHTML = 0;
  }
};
setTimeout(() => {
  startPage();
}, 500);
