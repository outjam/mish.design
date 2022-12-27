import React from "react";

function ButtonMore(props) {
  return (
    <div className="buttonMore">
      <button className="buttonOutline">{props.name}</button>
    </div>
  );
}

export default ButtonMore;
