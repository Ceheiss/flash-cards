const { toggleCard, update } = require("./update.js");

const mockModel = {
  flashCards:  [{
    frontMessage: "Front 1",
    backMessage: "Back 1",
  },{
    frontMessage: "Front 2",
    backMessage: "Back 2"
  }],
  indexOfCurrentCard: 0,
  isCurrentDisplayFront: true
}

test('should change "isCurrentDisplayFront" property of model with each click', () => {
  const sampleModel = { isCurrentDisplayFront: true };
  const received = toggleCard(sampleModel);
  const expected = { isCurrentDisplayFront: false };
  expect(received).toEqual(expected);
});

test("should return an updated model with 'isCurrentDisplayFront' value toggled", () => {
  const received = update(mockModel, {type: "TOGGLE_CARD"});
  const expected = {
    flashCards:  [{
      frontMessage: "Front 1",
      backMessage: "Back 1",
    },{
      frontMessage: "Front 2",
      backMessage: "Back 2",
    }],
    indexOfCurrentCard: 0,
    isCurrentDisplayFront: false
  }
  expect(received).toEqual(expected);
})

test("should return an updated model with increased 'indexOfCurrentCard' value", () => {
  const received = update(mockModel, {type: "NEXT_CARD"});
  const expected = {
    flashCards:  [{
      frontMessage: "Front 1",
      backMessage: "Back 1"
    },{
      frontMessage: "Front 2",
      backMessage: "Back 2"
    }],
    indexOfCurrentCard: 1,
    isCurrentDisplayFront: true
  }
  expect(received).toEqual(expected);
})

test("should return an updated model with decreased 'indexOfCurrentCard' value", () => {
  const received = update({...mockModel, indexOfCurrentCard: 1}, {type: "PREVIOUS_CARD"});
  const expected = {
    flashCards:  [{
      frontMessage: "Front 1",
      backMessage: "Back 1"
    },{
      frontMessage: "Front 2",
      backMessage: "Back 2"
    }],
    indexOfCurrentCard: 0,
    isCurrentDisplayFront: true
  }
  expect(received).toEqual(expected);
})