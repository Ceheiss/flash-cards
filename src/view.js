const h = require('hyperscript');
const hh = require('hyperscript-helpers');

const { div, h1, h3 } = hh(h);

const view = (model, dispatch) => {
  let flashCards = model.flashCards;
  console.log(flashCards)
  const returnedElements = [];
  flashCards.forEach(flashCard => {
    if (flashCard.isCurrentDisplayFront){
      returnedElements.push(div({"data-id": flashCard.id, className: "box", onclick: (e) => dispatch("toggle card", e)},[
        h1({}, flashCard.frontMessage)
      ]));
    } else {
      returnedElements.push(div({className: "box", onclick: (e) => dispatch("toggle card", e)}, [
        h3({}, flashCard.backMessage)
      ]));
    }
  })
  return div({}, returnedElements);
}

module.exports = view;