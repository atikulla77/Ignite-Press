import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-[#1b1b1b] GeologicaFont">
      <div className="xl:w-[1230px] w-[96%] mx-auto py-4 px-5 flex flex-wrap flex-col md:flex-row items-center">
        <span className="inline-flex md:hidden md:ml-auto mt-[-2px] justify-center md:justify-start z-10 sm:pb-[10px] pb-[7px] sm:text-[15px]  [@media(min-width:430px)]:text-[14px] text-[13px]"> 
          <Link to="" className="text-white cursor-pointer">
            Terms & Condition
          </Link>
          <Link to="" className="text-white ml-[10px] cursor-pointer">
            Privacy Policy
          </Link>
        </span>

        <p className="text-[#ffffffe5] sm:text-[14px] text-[13px] text-center md:text-left">
          <span className="font-bold text-primary">Ignite Press </span>
          <span className="font-[400]">
           - Copyright © 2024 All rights reserved.
          </span>
        </p>
        <span className="sm:text-[14px] text-[13px] md:inline-flex hidden md:ml-auto mt-[-2px] justify-center md:justify-start z-10">
          <Link to="" className="text-white cursor-pointer">
            Terms & Condition
          </Link>
          <Link to="" className="text-white ml-[45px] cursor-pointer">
            Privacy Policy
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Footer;
