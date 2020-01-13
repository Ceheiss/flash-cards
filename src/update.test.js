const { toggleCard } = require("./update.js");

test('should change "isCurrentDisplayFront" property of model with each click', () => {
  const sampleModel = { isCurrentDisplayFront: true };
  const received = toggleCard(sampleModel);
  const expected = { isCurrentDisplayFront: false };
  expect(received).toEqual(expected);
});
