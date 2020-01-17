const MSGS = {
  TOGGLE_CARD: "TOGGLE_CARD",
  NEXT_CARD: "NEXT_CARD",
  PREVIOUS_CARD: "PREVIOUS_CARD",
  FRONT_MESSAGE_INPUT: "FRONT_MESSAGE_INPUT",
  BACK_MESSAGE_INPUT: "BACK_MESSAGE_INPUT",
  ADD_NEW_CARD: "ADD_NEW_CARD"
};

const toggleCard = flashCard => {
  if (flashCard.isCurrentDisplayFront) {
    return { ...flashCard, isCurrentDisplayFront: false };
  } else {
    return { ...flashCard, isCurrentDisplayFront: true };
  }
};

const inputMessage = (cardSide, inputMessage) => {
  return cardSide === "front"
    ? {
        type: MSGS.FRONT_MESSAGE_INPUT,
        frontMessageInput: inputMessage
      }
    : {
        type: MSGS.BACK_MESSAGE_INPUT,
        backMessageInput: inputMessage
      };
};

const update = (model, message) => {
  const flashCard = model.flashCards[model.indexOfCurrentCard];
  switch (message.type) {
    case MSGS.TOGGLE_CARD:
      const returnedArray = [...model.flashCards];
      returnedArray[model.indexOfCurrentCard] = toggleCard(flashCard);
      return { ...model, flashCards: returnedArray };
    case MSGS.NEXT_CARD:
      let nextCard = model.indexOfCurrentCard + 1;
      if (nextCard === model.flashCards.length) nextCard = 0;
      return { ...model, indexOfCurrentCard: nextCard };
    case MSGS.PREVIOUS_CARD:
      let previousCard = model.indexOfCurrentCard - 1;
      if (previousCard < 0) previousCard = 0;
      return { ...model, indexOfCurrentCard: previousCard };
    case MSGS.ADD_NEW_CARD:
      const { front, back } = message.messages;
      const arrayWithNewCard = [
        ...model.flashCards,
        { frontMessage: front, backMessage: back, isCurrentDisplayFront: true }
      ];
      console.log(arrayWithNewCard);
      return { ...model, flashCards: arrayWithNewCard };
      ``;
  }
};

module.exports = {
  toggleCard,
  update,
  inputMessage,
  MSGS
};
