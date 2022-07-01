import React from "react";

export default function Header(props) {
  return (
    <nav>
      {" "}
      <div className="prev_operation">
        {props.prev} {props.op}
      </div>
      <div className="curr_operation">{props.curr}</div>
    </nav>
  );
}
