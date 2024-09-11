import React from "react";
import dollarBag from "../assets/investment-calculator-logo.png";


const Header = () => {
  return (
    <header id="header">
      <img src={dollarBag} alt="dollar-bag-logo" />
      <h1>Investment Calculator</h1>
    </header>
  );
};

export default Header;
