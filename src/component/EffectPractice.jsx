import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const EffectPractice = () => {
  const [count, setCount] = React.useState(0);
  const [effectCount, setEffectCount] = React.useState(0);
  const [total, SetTotal] = useState(0);

  //   useEffect(() => {
  //     alert(`Count has changed to: ${count}
  //         i will run on each render`);
  //   });

  //   useEffect(() => {
  //     alert(`Count has changed to: ${count}
  //         i will run on first render`);
  //   }, []);

  //   useEffect(() => {
  //     alert(`Count has changed to: ${count}
  //         i will run on count update`);
  //   }, [count]);

  //   useEffect(() => {
  //     alert(
  //       `Count has changed to: ${count} and total is ${total}. I will run on count/total update.`
  //     );
  //   }, [count, total]);

  useEffect(() => {
    alert(`Count has changed to: ${count}. I will run on count update.`);

    return () => {
      alert("Cleanup on unmount or before next effect");
    };
  }, [count]);

  function handleClick() {
    setCount(count + 1);
  }

  function handleTotal() {
    SetTotal(total + 1);
  }

  return (
    <div>
      <h1>Effect Practice Component</h1>
      <p>Click this button to increment the count: {count}</p>
      <button onClick={handleClick}>Click me</button>

      <br />
      <p>Click this button to increment the total: {total}</p>

      <button onClick={handleTotal}>Click me</button>
    </div>
  );
};

export default EffectPractice;
