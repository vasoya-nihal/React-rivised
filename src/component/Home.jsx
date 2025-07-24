import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const Navigate = useNavigate();
  const handleclick = () => {
    Navigate("/about");
  };
  return (
    <div>
      Home Page
      <button onClick={handleclick}>Move to About Page</button>
    </div>
  );
};

export default Home;
