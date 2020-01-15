const sampledata = [{
  frontMessage: "Kant is a known...?",
  backMessage: "Philosopher. He lectured about morality, and epistemology among other topic.",
  isCurrentDisplayFront: true
},{
  frontMessage: "Tolstoi is a known...?",
  backMessage: "Writer. 'The Death of Ival Ilich is a masterpiece'.",
  isCurrentDisplayFront: true
}]

const initialState = {
  flashCards: sampledata,
  indexOfCurrentCard: 0,
  // frontMessageInput: "",
  // backMessageInput: "",
  // showForm: false
}

module.exports = initialState;