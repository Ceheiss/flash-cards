const h = require("hyperscript");
const hh = require("hyperscript-helpers");

const { div, h1, h3, button } = hh(h);

const view = (model, dispatch) => {
  const nextButton = button(
    {
      onclick: () => dispatch("next card")
    },
    "Next"
  );
  const previousButton = button(
    {
      onclick: () => dispatch("previous card")
    },
    "Previous"
  );
  const buttons = div([previousButton, nextButton]);
  const flashCard = model.flashCards[model.indexOfCurrentCard];
  const frontCardDisplay = div(
    { className: "box", onclick: () => dispatch("toggle card") },
    [h1({}, flashCard.frontMessage)]
  );
  const backCardDisplay = div(
    { className: "box", onclick: () => dispatch("toggle card") },
    [h3({}, flashCard.backMessage)]
  );

  return flashCard.isCurrentDisplayFront
    ? div([frontCardDisplay, buttons])
    : div([backCardDisplay, buttons]);
};

module.exports = view;
