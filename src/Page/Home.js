import React from "react";
import Navber from "../Components/Navbar/Navbar";
import HomeComponents from "../Components/Home/HomeComponents";
import Branding from "../Components/Home/Branding";
import Footer from "../Components/Footer/Footer";

const Home = () => {
  return (
    <div className="w-full h-full bg-[#fff] [@media(min-width:420px)]:pt-[5rem] pt-[4.5rem]">
      <Navber />
      <HomeComponents />
      <Branding />
      <Footer />
    </div>
  );
};

export default Home;
