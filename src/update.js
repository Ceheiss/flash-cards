const toggleCard = (flashCard) => {
  if (flashCard.isCurrentDisplayFront === true) {
    return {...flashCard, isCurrentDisplayFront: false};
  } else if (flashCard.isCurrentDisplayFront === false) {
    return {...flashCard, isCurrentDisplayFront: true};
  } 
}

const update = (model, message, e) => {
  switch (message) {
    case "toggle card":
      const cardId = parseInt(e.target.closest("div").getAttribute("data-id"));
      const flashCards = [...model.flashCards];
      const newFlashCards = flashCards.map(flashCard => {
        if (flashCard.id === cardId){
          debugger;
          return toggleCard(flashCard);
        } else {
          return flashCard;
        }
      })
      return {...model, flashCards: newFlashCards}
    default:
      return model;
  }
};

module.exports = {
  toggleCard,
  update
}