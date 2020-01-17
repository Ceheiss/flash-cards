const MSGS = {
  TOGGLE_CARD: "TOGGLE_CARD",
  NEXT_CARD: "NEXT_CARD",
  PREVIOUS_CARD: "PREVIOUS_CARD",
  FRONT_MESSAGE_INPUT: "FRONT_MESSAGE_INPUT",
  BACK_MESSAGE_INPUT: "BACK_MESSAGE_INPUT",
  ADD_NEW_CARD: "ADD_NEW_CARD"
};

const toggleCard = model => {
  if (model.isCurrentDisplayFront) {
    return { ...model, isCurrentDisplayFront: false };
  } else {
    return { ...model, isCurrentDisplayFront: true };
  }
};

const update = (model, message) => {
  switch (message.type) {
    case MSGS.TOGGLE_CARD:
      const updatedModel = toggleCard(model);
      return updatedModel;
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
      return { ...model, flashCards: arrayWithNewCard }
  }
};

module.exports = {
  toggleCard,
  update,
  MSGS
};
