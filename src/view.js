const h = require("hyperscript");
const hh = require("hyperscript-helpers");
const { MSGS } = require("./update.js");

const { div, h1, h3, button, input, form, label } = hh(h);

function buildButtons(dispatch) {
  return {
    nextButton: button(
      { id="next-button", onclick: () => dispatch({ type: MSGS.NEXT_CARD }) },
      "Next"
    ),
    previousButton: button(
      { id="previous-button", onclick: () => dispatch({ type: MSGS.PREVIOUS_CARD }) },
      "Previous"
    )
  };
}

function buildForm(dispatch) {
  return form({ className: "form-section" }, [
    label("Front Message"),
    input({ type: "text", id: "front-input" }),
    label("Back Message"),
    input({ type: "text", id: "back-input" }),
    button(
      {
        type: "button",
        onclick: () =>
          dispatch({
            type: MSGS.ADD_NEW_CARD,
            messages: {
              front: document.getElementById("front-input").value,
              back: document.getElementById("back-input").value
            }
          })
      },
      "add card"
    )
  ]);
}

const view = (model, dispatch) => {
  const { nextButton, previousButton } = buildButtons(dispatch);
  const buttons = div({className: "button-section"}, [previousButton, nextButton]);
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
    ? div({className: "container"}, [
        div({ className: "cards-section" }, [frontCardDisplay, buttons]),
        buildForm(dispatch)
      ])
    : div({className: "container"}, [
        div({ className: "cards-section" }, [backCardDisplay, buttons]),
        buildForm(dispatch)
      ]);
};

module.exports = view;
