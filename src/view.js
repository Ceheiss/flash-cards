const h = require('hyperscript');
const hh = require('hyperscript-helpers');

const { div, h1, h3 } = hh(h);

const view = (model, dispatch) => {
  let currentModel = model;
  if (currentModel.isCurrentDisplayFront){
    return div({className: "box", onclick: () => dispatch("toggle card")},[
      h1({}, currentModel.frontMessage)
    ])
  } else {
    return div({className: "box", onclick: () => dispatch("toggle card")}, [
      h3({}, currentModel.backMessage)
    ])
  }
}

module.exports = view;