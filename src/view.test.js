const view = require('./view.js');

const mockModel = {
  flashCards: [
    {
      frontMessage: "Kant is a known...?",
      backMessage: "Philosopher. He lectured about morality, and epistemology among other topic.",
      isCurrentDisplayFront: true
    },
    {
      frontMessage: "Tolstoi is a known...?",
      backMessage: "Writer. 'The Death of Ival Ilich is a masterpiece'.",
      isCurrentDisplayFront: true
    }
  ],
  indexOfCurrentCard: 0,
  frontMessageInput: "",
  backMessageInput: ""
}

test("should generate HTML code based on the provided initial model", () => {
  const expected = 
  `<div class="box"><h1>Kant is a known...?</h1></div><div><button>Previous</button><button>Next</button></div>`
  const received = view(mockModel, ()=> {}).innerHTML;
  expect(received).toEqual(expected);
})