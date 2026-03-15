import { useState, useReducer } from "react";
import resultReducer from "../reducers/resultReducer";

export default function Calculator() {
  const [firstNumberInput, setFirstNumberInput] = useState("");
  const [secondNumberInput, setSecondNumberInput] = useState("");
  const [result2, dispatch] = useReducer(resultReducer, 0);

  function handleSum() {
    dispatch({
      type: "added",
      payload: {
        firstNumber: firstNumberInput,
        secondNumber: secondNumberInput,
      },
    });
  }

  function handleSubtract() {
    dispatch({
      type: "subtracted",
      payload: {
        firstNumber: firstNumberInput,
        secondNumber: secondNumberInput,
      },
    });
  }
  function handleMultiply() {
    dispatch({
      type: "multiply",
      payload: {
        firstNumber: firstNumberInput,
        secondNumber: secondNumberInput,
      },
    });
  }
  function handleDivide() {
    dispatch({
      type: "divide",
      payload: {
        firstNumber: firstNumberInput,
        secondNumber: secondNumberInput,
      },
    });
  }
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md text-center">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">
          Simple Calculator
        </h1>

        <div className="mb-4 text-left">
          <label className="block font-semibold text-gray-700 mb-1">
            First Number
          </label>
          <input
            type="number"
            value={firstNumberInput}
            onChange={(e) => setFirstNumberInput(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="mb-6 text-left">
          <label className="block font-semibold text-gray-700 mb-1">
            Second Number
          </label>
          <input
            type="number"
            value={secondNumberInput}
            onChange={(e) => setSecondNumberInput(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="flex justify-between mb-6">
          <button
            onClick={handleSum}
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-semibold transition"
          >
            Sum
          </button>
          <button
            onClick={handleSubtract}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-semibold transition"
          >
            Subtract
          </button>
          <button
            onClick={handleMultiply}
            className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg font-semibold transition"
          >
            Multiply
          </button>
          <button
            onClick={handleDivide}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold transition"
          >
            Divide
          </button>
        </div>
        <h2 className="text-3xl font-bold text-gray-800 mt-5">
          {result2 !== null ? `Result: ${result2}` : "Result"}
        </h2>
      </div>
    </div>
  );
}
