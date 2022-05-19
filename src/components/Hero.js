import React from "react";
import "./Hero.css";


const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        <div className="left">
          <p>Buy & Sell Crypto 24/7 using your retirement account</p>
          <h1>Invest in Cryptocurreny with Your IRA</h1>
          <p>Buy, Sell, and store hundreds of cryptocurrencies</p>
          <div className="input-container">
            <input type="email" placeholder="Enter your email" />
            <button className="btn">Learn More</button>
          </div>
        </div>

        <div className="right">
          <div className="img-container">
            <img src='https://www.kindpng.com/picc/m/404-4047562_crypto-coin-png-cryptocurrency-logos-transparent-png-download.png' alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
