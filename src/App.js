import React from "react";
import Display from "./components/Display";
import Body from "./components/Body";

/*
=============== 
APP
===============
*/

export default function App() {
  return (
    <div className="calculator_grid">
      <Display />
      <Body />
    </div>
  );
}
