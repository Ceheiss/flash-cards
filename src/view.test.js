const view = require('./view.js');

const mockModel = {
  flashCards: [
    {
      frontMessage: "Kant is a known...?",
      backMessage: "Philosopher. He lectured about morality, and epistemology among other topic.",
    },
    {
      frontMessage: "Tolstoi is a known...?",
      backMessage: "Writer. 'The Death of Ival Ilich is a masterpiece'.",
    }
  ],
  indexOfCurrentCard: 0,
  isCurrentDisplayFront: true
}

test("should generate HTML code based on the provided initial model", () => {
  const expected =  `<div class="cards-section"><div class="box"><h1>Kant is a known...?</h1></div><div class="button-section"><button id="previous-button">Previous</button><button id="next-button">Next</button></div></div><form class="form-section"><label>Front Message</label><input type="text" id="front-input"><label>Back Message</label><input type="text" id="back-input\"><button type="button" id="form-button">add card</button></form>`
  const received = view(mockModel, ()=> {}).innerHTML;
  expect(received).toEqual(expected);
});