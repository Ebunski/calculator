//types of actions we can take in the app
//remember to export and import
export const ACTIONS = {
  ADD_DIGIT: "digit",
  CHOOSE_OPERATION: "operation",
  EVALUATE: "evaluate",
  CLEAR: "clear",
  DELETE_DIGIT: "delete",
};

export const initialState = {
  currOperation: null,
  prevOperation: null,
  operation: "",
  overwrite: false,
};

//reducer contains a state and an action(given two variables)
//action is given variables of type and payload
//type - the type of action
//payload - the parameters passed by the actions
//switch statements for the various actions

//functions
//state represents the  accumulator or prev value of state
//action{type,payload}
//global variable ACTIONS supplies the type in the switch statements.
export function reducer(prev, action) {
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

export function formatOperand(operand) {
  if (operand == null) return;
  const [integer, decimal] = operand.split(".");
  if (decimal == null) return INT_FORMATTER.format(integer);
  return `${INT_FORMATTER.format(integer)}.${decimal}`;
}
