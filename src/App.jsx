import React from "react";
import UseRefPractice from "./component/UseRefPractice";
import "./component/counter.css";
import "../src/UserCss.css";
import EffectPractice from "./component/EffectPractice";
import Counter from "./component/counter";
import StopWatchRef from "./component/StopWatchRef";
import UserCard from "./component/UserCard";
import first from "../src/images/first.webp";
import second from "../src/images/second.webp";
import third from "../src/images/third.webp";
import ParentToChildFun from "./component/ParentToChildFun";
import { useState } from "react";
import StateLifting from "./component/StateLifting";

function App() {
  // const [count, setCount] = useState(0);

  // function handleClick() {
  //   setCount(count + 1);
  // }

  const [name, setName] = useState("");

  return (
    <>
      {/* <Counter />
      <EffectPractice /> */}
      {/* <UseRefPractice /> */}
      {/* <StopWatchRef /> */}
      {/* <UserCard
        name={"first"}
        desc={"This is first componnet usign props"}
        image={first}
        style={{ "border-radius": "25%", border: "2px solid black" }}
      /> */}

      {/* <UserCard
        name={"second"}
        desc={"This is second componnet usign props"}
        image={second}
        style={{ "border-radius": "25%", border: "2px solid black" }}
      /> */}
      {/* 
      <UserCard
        name={"third"}
        desc={"This is third componnet usign props"}
        image={third}
        style={{ "border-radius": "25%", border: "2px solid black" }}
      /> */}

      {/* <ParentToChildFun handleClick={handleClick} text="click me" />
      <h1>Count: {count}</h1> */}
      <div>
        <StateLifting title="card1" name={name} setName={setName} />
        <StateLifting title="card2" name={name} setName={setName} />

        {/* <p>I am inside Parent component and value of a nmae is {name}</p> */}
      </div>
    </>
  );
}

export default App;
