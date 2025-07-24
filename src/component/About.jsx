import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const Navigate = useNavigate();
  const handleClick = () => {
    Navigate("/dashboard");
  };
  return (
    <div>
      About Page
      <button onClick={handleClick}>Move to Dashboard Page</button>
    </div>
  );
};

export default About;
