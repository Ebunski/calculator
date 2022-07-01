import React from "react";
import { ACTIONS } from "../App";

export default function Digit({ dispatch, digit }) {
  return (
    <>
      <button
        className=""
        onClick={() =>
          dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } })
        }
      >
        {digit}
      </button>
    </>
  );
}
