const toggleCard = (model) => {
  if (model.isCurrentDisplayFront === true) {
    return {...model, isCurrentDisplayFront: false};
  } else if (model.isCurrentDisplayFront === false) {
    return {...model, isCurrentDisplayFront: true};
  } 
}

const update = (model, message) => {
  switch (message) {
    case "toggle card":
      return toggleCard(model);
    default:
      return model;
  }
};


module.exports = {
  toggleCard,
  update
}