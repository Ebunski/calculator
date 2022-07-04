import React from "react";
import { useGlobalContext } from "../context";

export default function Operation({ operation }) {
  const { dispatch, ACTIONS } = useGlobalContext();
  return (
    <>
      <button
        className=""
        onClick={() =>
          dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { operation } })
        }
      >
        {operation}
      </button>
    </>
  );
}
