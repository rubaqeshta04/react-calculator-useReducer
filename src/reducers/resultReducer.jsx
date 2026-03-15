export default function resultReducer(state, action) {
  const { firstNumber, secondNumber } = action.payload || {};

  switch (action.type) {
    case "added":
      return +firstNumber + +secondNumber;

    case "subtracted":
      return +firstNumber - +secondNumber;

    case "multiply":
      return +firstNumber * +secondNumber;

    case "divide":
      return +firstNumber / +secondNumber;

    default:
      return state;
  }
}
