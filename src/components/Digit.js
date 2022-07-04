import React from "react";
import { useGlobalContext } from "../context";

export default function Digit({ digit }) {
  const { dispatch, ACTIONS } = useGlobalContext();
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
