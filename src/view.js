const h = require("hyperscript");
const hh = require("hyperscript-helpers");
const { MSGS } = require("./update.js");

const { div, h1, h3, button } = hh(h);

function buildButtons(dispatch) {
  return {
    nextButton: button(
      { onclick: () => dispatch({ type: MSGS.NEXT_CARD }) },
      "Next"
    ),
    previousButton: button(
      { onclick: () => dispatch({ type: MSGS.PREVIOUS_CARD }) },
      "Previous"
    )
  };
}

const view = (model, dispatch) => {
  const { nextButton, previousButton } = buildButtons(dispatch);
  const buttons = div([previousButton, nextButton]);
  const flashCard = model.flashCards[model.indexOfCurrentCard];
  const frontCardDisplay = div(
    { className: "box", onclick: () => dispatch({ type: MSGS.TOGGLE_CARD }) },
    [h1({}, flashCard.frontMessage)]
  );
  const backCardDisplay = div(
    { className: "box", onclick: () => dispatch({ type: MSGS.TOGGLE_CARD }) },
    [h3({}, flashCard.backMessage)]
  );
  console.log(model);
  return flashCard.isCurrentDisplayFront
    ? div([frontCardDisplay, buttons])
    : div([backCardDisplay, buttons]);
};

module.exports = view;