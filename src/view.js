const h = require("hyperscript");
const hh = require("hyperscript-helpers");
const { MSGS } = require("./update.js");

const { div, h1, h3, button, input } = hh(h);

function buildButtons(dispatch) {
  return {
    nextButton: button({ onclick: () => dispatch(MSGS.NEXT_CARD) }, "Next"),
    previousButton: button(
      { onclick: () => dispatch(MSGS.PREVIOUS_CARD) },
      "Previous"
    )
  };
}


// function generateForm(dispatch) {
//   return div([
//     input({type: "text", id: "front-message-input"}),
//     input({type: "text", id: "back-message-input"}),
//     input({type: "submit", onsubmit: () => dispatch("post information")})
//   ])
// }

const view = (model, dispatch) => {
  const { nextButton, previousButton } = buildButtons(dispatch);
  const buttons = div([previousButton, nextButton]);
  const flashCard = model.flashCards[model.indexOfCurrentCard];
  const frontCardDisplay = div(
    { className: "box", onclick: () => dispatch(MSGS.TOGGLE_CARD) },
    [h1({}, flashCard.frontMessage)]
  );
  const backCardDisplay = div(
    { className: "box", onclick: () => dispatch(MSGS.TOGGLE_CARD) },
    [h3({}, flashCard.backMessage)]
  );

  return flashCard.isCurrentDisplayFront
    ? div([frontCardDisplay, buttons])
    : div([backCardDisplay, button]);
};

module.exports = view;
