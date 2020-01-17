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
  const expected = 
  `<div class="box"><h1>Kant is a known...?</h1></div><div><button>Previous</button><button>Next</button></div><form><input type="text" id="front-input"><input type="text" id="back-input"><button type="button">add card</button></form>`
  const received = view(mockModel, ()=> {}).innerHTML;
  expect(received).toEqual(expected);
});