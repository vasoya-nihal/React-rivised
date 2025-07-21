import React from "react";

const counter = () => {
  const [count, setCount] = React.useState(0);
  return (
    <div id="counter">
      <h1>Counter Component</h1>
      <p>click this button to increment the counter {count}</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        click me
      </button>
    </div>
  );
};

export default counter;
