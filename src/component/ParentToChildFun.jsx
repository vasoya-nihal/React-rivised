import React from "react";

const ParentToChildFun = (props) => {
  return (
    <div>
      <button onClick={props.handleClick}>{props.text}</button>
    </div>
  );
};

export default ParentToChildFun;
