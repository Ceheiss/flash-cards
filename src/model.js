const sampledata = [{
  frontMessage: "Kant is a known...?",
  backMessage: "Philosopher. He lectured about morality, and epistemology among other topic."
},{
  frontMessage: "Tolstoi is a known...?",
  backMessage: "Writer. 'The Death of Ival Ilich is a masterpiece'."
}]

const initialState = {
  flashCards: sampledata,
  indexOfCurrentCard: 0,
  isCurrentDisplayFront: true
}

module.exports = initialState;