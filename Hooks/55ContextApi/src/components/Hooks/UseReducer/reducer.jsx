const reducer = (state, action) => {
  switch (action.type) {
    case "INC":
      return state + 1;

    case "DEC":
      let newCount = 0;
      state >= 1 ? (newCount = state - 1) : (newCount = 0);
      return newCount;

    default:
      return state;
  }
};

export default reducer;
