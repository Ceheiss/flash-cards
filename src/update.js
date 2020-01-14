const toggleCard = (flashCard) => {
  console.log("heelo", flashCard)
  if (flashCard.isCurrentDisplayFront === true) {
    return {...flashCard, isCurrentDisplayFront: false};
  } else if (flashCard.isCurrentDisplayFront === false) {
    return {...flashCard, isCurrentDisplayFront: true};
  } 
}

const update = (model, message) => {
  const flashCard = model.flashCards[model.indexOfCurrentCard];
  switch (message) {
    case "toggle card":
      const returnedArray = [...model.flashCards];
      returnedArray[model.indexOfCurrentCard] = toggleCard(flashCard);
      console.log("Lo que se retorna", {...model, flashCards: returnedArray})
      return {...model, flashCards: returnedArray};
    case "next card":
      let nextCard = model.indexOfCurrentCard + 1;
      if (nextCard === model.flashCards.length) nextCard = 0;
      console.log("From next", {...model, indexOfCurrentCard: nextCard})
      return {...model, indexOfCurrentCard: nextCard};
    case "previous card":
      let previousCard = model.indexOfCurrentCard - 1;
      if (previousCard < 0) previousCard = 0; 
      console.log("from previous", {...model, indexOfCurrentCard: previousCard})
      return {...model, indexOfCurrentCard: previousCard};
  }
};

module.exports = {
  toggleCard,
  update
}