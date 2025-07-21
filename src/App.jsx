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

function App() {
  return (
    <>
      {/* <Counter />
      <EffectPractice /> */}
      {/* <UseRefPractice /> */}
      {/* <StopWatchRef /> */}
      <UserCard
        name={"first"}
        desc={"This is first componnet usign props"}
        image={first}
        style={{ "border-radius": "25%", border: "2px solid black" }}
      />

      <UserCard
        name={"second"}
        desc={"This is second componnet usign props"}
        image={second}
        style={{ "border-radius": "25%", border: "2px solid black" }}
      />

      <UserCard
        name={"third"}
        desc={"This is third componnet usign props"}
        image={third}
        style={{ "border-radius": "25%", border: "2px solid black" }}
      />
    </>
  );
}

export default App;
