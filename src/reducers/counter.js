const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 7;
    case "DECREMENT":
      return state - 12.54;
    default:
      return state;
  }
};
export default counterReducer;
