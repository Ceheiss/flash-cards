const h = require("hyperscript");
const hh = require("hyperscript-helpers");
const { MSGS } = require("./update.js");

const { div, h1, h3, button, input, form } = hh(h);

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

function buildForm(dispatch) {
  return form([
    input({ type: "text", id: "front-input" }),
    input({ type: "text", id: "back-input" }),
    button({
      type: "button",
      onclick: () =>
        dispatch({
          type: MSGS.ADD_NEW_CARD,
          messages: {
            front: document.getElementById("front-input").value,
            back: document.getElementById("back-input").value
          }
        })
    }, "add card")
  ]);
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
  return model.isCurrentDisplayFront
    ? div([frontCardDisplay, buttons, buildForm(dispatch)])
    : div([backCardDisplay, buttons, buildForm(dispatch)]);
};

module.exports = view;
