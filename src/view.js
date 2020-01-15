const h = require("hyperscript");
const hh = require("hyperscript-helpers");
const { frontInputMessage, backInputMessage, MSGS } = require("./update.js");

const { div, h1, h3, button, input } = hh(h);

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

function generateForm(dispatch) {
  return div([
    input({type: "text", oninput: e => dispatch(frontInputMessage(e.target.value))}),
    input({type: "text", oninput: e => dispatch(backInputMessage(e.target.value))}),
    input({type: "submit", onclick: () => alert("holaa")})
  ])
}

const view = (model, dispatch) => {
  const { nextButton, previousButton } = buildButtons(dispatch);
  const buttons = div([previousButton, nextButton]);
  const flashCard = model.flashCards[model.indexOfCurrentCard];
  const frontCardDisplay = div(
    { className: "box", onclick: () => dispatch({type: MSGS.TOGGLE_CARD}) },
    [h1({}, flashCard.frontMessage)]
  );
  const backCardDisplay = div(
    { className: "box", onclick: () => dispatch({type: MSGS.TOGGLE_CARD}) },
    [h3({}, flashCard.backMessage)]
  );
  const form =  generateForm(dispatch);

  return flashCard.isCurrentDisplayFront
    ? div([frontCardDisplay, buttons])
    : div([backCardDisplay, buttons]);
};

module.exports = view;
