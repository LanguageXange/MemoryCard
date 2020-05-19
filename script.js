document.addEventListener("DOMContentLoaded", () => {
  const cardArr = [
    {
      name: "JS",
      img: "images/js.png",
    },
    {
      name: "JS",
      img: "images/js.png",
    },
    {
      name: "HTML",
      img: "images/html.png",
    },
    {
      name: "HTML",
      img: "images/html.png",
    },
    {
      name: "CSS",
      img: "images/css.png",
    },
    {
      name: "CSS",
      img: "images/css.png",
    },
    {
      name: "React",
      img: "images/react.png",
    },
    {
      name: "React",
      img: "images/react.png",
    },
    {
      name: "Poker",
      img: "images/poker.png",
    },
    {
      name: "Poker",
      img: "images/poker.png",
    },
    {
      name: "Python",
      img: "images/py.png",
    },
    {
      name: "Python",
      img: "images/py.png",
    },
  ];

  //sort the card randomly
  cardArr.sort(() => 0.5 - Math.random());

  const grid = document.querySelector(".grid");
  const resultDisplay = document.getElementById("result");
  var cardChosen = [];
  var cardChosenID = [];
  var cardsWon = [];

  // master myBoard function
  function myBoard() {
    for (let i = 0; i < cardArr.length; i++) {
      var card = document.createElement("img");
      card.setAttribute("src", "images/question.png");
      card.setAttribute("data-id", i);
      card.addEventListener("click", flipCard);

      grid.appendChild(card);
    }
  }

  //checkforMatch function

  function checkForMatch() {
    var cards = document.querySelectorAll("img");
    const optionOneId = cardChosenID[0];
    const optionTwoId = cardChosenID[1];
    if (cardChosen[0] === cardChosen[1]) {
      alert("Correct!");
      cards[optionOneId].setAttribute("src", "images/smile.png");
      cards[optionTwoId].setAttribute("src", "images/smile.png");
      // removeClick event so that users can't flip the card again and add cursor to not allow
      cards[optionOneId].style.cursor = "not-allowed";
      cards[optionTwoId].style.cursor = "not-allowed";
      cards[optionOneId].removeEventListener("click", flipCard);
      cards[optionTwoId].removeEventListener("click", flipCard);
      cardsWon.push(cardChosen);
    } else {
      cards[optionOneId].setAttribute("src", "images/question.png");
      cards[optionTwoId].setAttribute("src", "images/question.png");
      alert("Try again!");
    }

    //reset cardchosen to empty array
    cardChosen = [];
    cardChosenID = [];
    resultDisplay.textContent = cardsWon.length;
    if (cardsWon.length == cardArr.length / 2) {
      resultDisplay.textContent = "Congrats! You Won!";
    }
  }

  //flipCard function
  function flipCard() {
    var cardId = this.getAttribute("data-id");
    var cardName = cardArr[cardId].name;
    cardChosen.push(cardName);
    cardChosenID.push(cardId);
    this.setAttribute("src", cardArr[cardId].img);

    if (cardChosen.length == 2) {
      setTimeout(checkForMatch, 100);
    }
  }

  myBoard();
});
