const initialState = require('./model');

test('should have property frontMessage', () => {
  const expected = true;
  const received = initialState.flashCards[0].hasOwnProperty('frontMessage');
  expect(received).toBe(expected);
});

test('should have property backMessage', () => {
  const expected = true;
  const received = initialState.flashCards[0].hasOwnProperty('backMessage');
  expect(received).toBe(expected);
});

test('should have property isCurrentDisplayFront', () => {
  const expected = true;
  const received = initialState.flashCards[0].hasOwnProperty('isCurrentDisplayFront');
  expect(received).toBe(expected);
});