import React from "react";
import Digit from "./Digit";
import Operation from "./Operation";
import { useGlobalContext } from "../context";

export default function Body(props) {
  const { dispatch, ACTIONS } = useGlobalContext();
  return (
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

      <Operation operation="/" />

      <Digit digit="1" />
      <Digit digit="2" />
      <Digit digit="3" />

      <Operation operation="*" />

      <Digit digit="4" />
      <Digit digit="5" />
      <Digit digit="6" />

      <Operation operation="+" />

      <Digit digit="7" />
      <Digit digit="8" />
      <Digit digit="9" />

      <Operation operation="-" />

      <Digit digit="0" />
      <Digit digit="." />

      <button
        onClick={() => dispatch({ type: ACTIONS.EVALUATE })}
        className="span_2"
      >
        =
      </button>
    </main>
  );
}
