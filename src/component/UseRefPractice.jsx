import React from "react";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";

const UseRefPractice = () => {
  const [count, setCount] = useState(0);

  let btnRef = useRef();

  function handleIncrement() {
    setCount(count + 1);
  }

  function changeColor() {
    btnRef.current.style.backgroundColor = "blue";
  }
  return (
    <div>
      <h1>UseRef Practice Component</h1>

      <div>
        <button ref={btnRef} onClick={handleIncrement}>
          Increment
        </button>
        <br />

        <button onClick={changeColor}>change color of 1st button</button>
        <div>
          <p>Current Count: {count}</p>
        </div>
      </div>
    </div>
  );
};

export default UseRefPractice;
