const initialState = {
  flashCards: [
    {
      id: 1,
      frontMessage: "Kant is a known...?",
      backMessage: "Philosopher. He lectured about morality, and epistemology among other topic.",
      isCurrentDisplayFront: true
    },
    {
      id: 2,
      frontMessage: "KantUNA is a known...?",
      backMessage: "Philosopher. He lectured about morality, and epistemology among other topic.",
      isCurrentDisplayFront: true
    }
  ],
  showForm: false
}

/* 
initialState {
  flashCards = [{...}, {...}],
  showForm: false
}
*/
module.exports = initialState;