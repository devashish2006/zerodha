import React from "react";
import Navbar from "../Navbar";
import Hero from "./Hero";
import Leftsection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";
import Fotter from "../Fotter";

function ProductPage() {
  return (
    <>
      <Hero />
      <Leftsection
        title={"Kite"}
        image={"Assets/kite (1).png"}
        description={
          "Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        }
        link1={"Try Demo"}
        link2={"Learn More"}
      />
       <RightSection 
      title={"Console"}
      description={"The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."}
      link={"Lean More"}
      image={"Assets/console (1).png"}
      />

      <Leftsection
        title={"Coin"}
        image={"Assets/coin (1).png"}
        description={
          "Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        }
        link1={"Try Demo"}
        link2={"Learn More"}
      />

      <RightSection 
      title={"Kite Connect Api"}
      description={"Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."}
      link={"Lean More"}
      image={"Assets/kiteconnect.png"}
      />

      <Leftsection
        title={"Varsity mobile"}
        image={"Assets/varsity (1).png"}
        description={
          "An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        }
        link1={"Try Demo"}
        link2={"Learn More"}
      />

      <p className="text-center mt-5 mb-5">Want to know more about our technology stack? Check out the Zerodha.tech
      blog.</p>
      
      <Universe />
    </>
  );
}

export default ProductPage;
