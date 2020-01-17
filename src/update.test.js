const { toggleCard, update } = require("./update.js");

const mockModel = {
  flashCards:  [{
    frontMessage: "Front 1",
    backMessage: "Back 1",
    isCurrentDisplayFront: true
  },{
    frontMessage: "Front 2",
    backMessage: "Back 2",
    isCurrentDisplayFront: true
  }],
  indexOfCurrentCard: 0,
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
      isCurrentDisplayFront: false
    },{
      frontMessage: "Front 2",
      backMessage: "Back 2",
      isCurrentDisplayFront: true
    }],
    indexOfCurrentCard: 0,
  }
  expect(received).toEqual(expected);
})

test("should return an updated model with increased 'indexOfCurrentCard' value", () => {
  const received = update(mockModel, {type: "NEXT_CARD"});
  const expected = {
    flashCards:  [{
      frontMessage: "Front 1",
      backMessage: "Back 1",
      isCurrentDisplayFront: true
    },{
      frontMessage: "Front 2",
      backMessage: "Back 2",
      isCurrentDisplayFront: true
    }],
    indexOfCurrentCard: 1,
  }
  expect(received).toEqual(expected);
})

test("should return an updated model with decreased 'indexOfCurrentCard' value", () => {
  const received = update({...mockModel, indexOfCurrentCard: 1}, {type: "PREVIOUS_CARD"});
  const expected = {
    flashCards:  [{
      frontMessage: "Front 1",
      backMessage: "Back 1",
      isCurrentDisplayFront: true
    },{
      frontMessage: "Front 2",
      backMessage: "Back 2",
      isCurrentDisplayFront: true
    }],
    indexOfCurrentCard: 0,
  }
  expect(received).toEqual(expected);
})