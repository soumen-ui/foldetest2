import React from "react";
import Navbar from "./Navbar";
import ban2 from "./images/abt.jpg";
const About = () => {
  return (
    <>
      <Navbar />
      <img src={ban2} className="res_img" alt="sl1" />
      <h1 className="text-center">About Us </h1>
    </>
  );
};

export default About;
