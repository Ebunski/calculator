import React from "react";
import { useGlobalContext } from "../context";

export default function Display(props) {
  const { formatOperand, prevOperation, currOperation, operation } =
    useGlobalContext();
  return (
    <nav>
      <div className="prev_operation">
        {formatOperand(prevOperation)} {operation}
      </div>
      <div className="curr_operation">{formatOperand(currOperation)}</div>
    </nav>
  );
}
