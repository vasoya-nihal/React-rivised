import React from "react";
import LogOutBtn from "./LogOutBtn";
import LoginBtn from "./LoginBtn";
import { useState } from "react";

const ConditionalRendering = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  if (!isLoggedIn) {
    return <LoginBtn />;
  }
  return (
    <div>
      <h1>
        aGAR LOG IN HAI TO LOGOUT KA BUTTON DEKHAYRGA AGR CONDIOTN TRUE HOGI
        TOHI YAHA PE AND LOGICAL OPERATOR USE HUA HAI
      </h1>
      <div>{isLoggedIn && <LogOutBtn />}</div>
    </div>
  );

  //   return <div>{isLoggedIn ? <LogOutBtn /> : <LoginBtn />}</div>;

  //   if (isLoggedIn) {
  //     return <LoginBtn />;
  //   } else {
  //     return <LogOutBtn />;
  //   }
};
export default ConditionalRendering;
