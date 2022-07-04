import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Digit from "./components/Digit";
import Operation from "./components/Operation";
import { useReducer } from "react";

//types of actions we can take in the app
//remember to export and import
export const ACTIONS = {
  ADD_DIGIT: "digit",
  CHOOSE_OPERATION: "operation",
  EVALUATE: "evaluate",
  CLEAR: "clear",
  DELETE_DIGIT: "delete",
};

const initialState = {
  currOperation: null,
  prevOperation: null,
  operation: "",
  overwrite: false,
};

//state represents the  accumulator or prev value of state
//action{type,payload}
//global variable ACTIONS supplies the type in the switch statements.
function reducer(prev, action) {
  switch (action.type) {
    case ACTIONS.ADD_DIGIT:
      if (prev.overwrite)
        return {
          ...prev,
          currOperation: action.payload.digit,
          overwrite: false,
        };
      if (action.payload.digit === "0" && prev.currOperation === "0")
        return prev;
      if (action.payload.digit === "." && prev.currOperation.includes("."))
        return prev;
      if (prev.currOperation === null)
        return {
          ...prev,
          currOperation: action.payload.digit,
        };
      return {
        //the action on the initial state
        ...prev, //prevstate but adds the new digit to the current operation displayed
        currOperation: `${prev.currOperation}${action.payload.digit}`,

        //key-to-change: value
      };

    case ACTIONS.CHOOSE_OPERATION:
      if (prev.prevOperation === null && prev.currOperation === null)
        return prev;

      if (prev.prevOperation === null)
        return {
          ...prev,
          prevOperation: prev.currOperation,
          operation: action.payload.operation,
          currOperation: null,
        };
      if (prev.currOperation === null)
        return {
          ...prev,
          operation: action.payload.operation,
        };
      return {
        ...prev,
        prevOperation: evaluate(prev),
        operation: action.payload.operation,
        currOperation: null,
      };

    case ACTIONS.CLEAR:
      return initialState;

    case ACTIONS.EVALUATE:
      if (
        prev.currOperation === null ||
        prev.prevOperation === null ||
        prev.operation === ""
      )
        return prev;
      return {
        ...prev,
        overwrite: true,
        prevOperation: null,
        currOperation: evaluate(prev),
        operation: null,
      };

    case ACTIONS.DELETE_DIGIT:
      if (prev.overwrite)
        return {
          ...prev,
          currOperation: null,
        };
      if (prev.currOperation === null) return prev;
      if (prev.currOperation.length === 1)
        return {
          ...prev,
          currOperation: null,
        };
      return {
        ...prev,
        currOperation: prev.currOperation.slice(0, -1),
      };

    default:
      break;
  }
}

function evaluate({ currOperation, prevOperation, operation }) {
  const prevOp = Number(prevOperation); //  console.log(typeof parseFloat(currOperation));
  const currOp = parseFloat(currOperation);
  if (isNaN(prevOp) || isNaN(currOp)) return null; //check input
  let computation = ""; //let because we are re-assigning values
  switch (operation) {
    case "+":
      computation = prevOp + currOp;
      break;
    case "-":
      computation = prevOp - currOp;
      break;
    case "*":
      computation = prevOp * currOp;
      break;
    case "/":
      computation = prevOp / currOp;
      break;
    default:
  }
  return computation.toString();
}

const INT_FORMATTER = new Intl.NumberFormat("en-uk", {
  maximumFractionDigits: 0,
});

function formatOperand(operand) {
  if (operand == null) return;
  const [integer, decimal] = operand.split(".");
  if (decimal == null) return INT_FORMATTER.format(integer);
  return `${INT_FORMATTER.format(integer)}.${decimal}`;
}

/*
=============== 
APP
===============
*/

export default function App() {
  //state parameter is given variables for the different ops
  const [state, dispatch] = useReducer(reducer, initialState);
  const { currOperation, prevOperation, operation } = state;

  //dispatch function takes in the type of action and the digit value

  //reducer contains a state and an action(given two variables)
  //action is given variables of type and payload
  //type - the type of action
  //payload - the parameters passed by the actions
  //switch statements for the various actions

  //functions

  return (
    <div className="calculator_grid">
      <nav>
        <div className="prev_operation">
          {formatOperand(prevOperation)} {operation}
        </div>
        <div className="curr_operation">{formatOperand(currOperation)}</div>
      </nav>

      <main>
        <button
          onClick={() => dispatch({ type: ACTIONS.CLEAR })}
          className="span_2"
        >
          AC
        </button>
        <button
          onClick={() => dispatch({ type: ACTIONS.DELETE_DIGIT })}
          className=""
        >
          DEL
        </button>

        <Operation operation="/" dispatch={dispatch} />

        <Digit digit="1" dispatch={dispatch} />
        <Digit digit="2" dispatch={dispatch} />
        <Digit digit="3" dispatch={dispatch} />

        <Operation operation="*" dispatch={dispatch} />

        <Digit digit="4" dispatch={dispatch} />
        <Digit digit="5" dispatch={dispatch} />
        <Digit digit="6" dispatch={dispatch} />

        <Operation operation="+" dispatch={dispatch} />

        <Digit digit="7" dispatch={dispatch} />
        <Digit digit="8" dispatch={dispatch} />
        <Digit digit="9" dispatch={dispatch} />

        <Operation operation="-" dispatch={dispatch} />

        <Digit digit="0" dispatch={dispatch} />
        <Digit digit="." dispatch={dispatch} />

        <button
          onClick={() => dispatch({ type: ACTIONS.EVALUATE })}
          className="span_2"
        >
          =
        </button>
      </main>
    </div>
  );
}
