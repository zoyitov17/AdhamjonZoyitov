import React from "react";

const Nav = () => {
  return (
    <div className="w-[100%] h-[62px] bg-[rgba(2,6,23,1)] fixed top-0 left-0 flex items-center justify-center z-50">
      <div className="w-[80%] h-[35px] flex justify-between items-center">
        <ul className="flex items-center text-2xl w-[10%]">
          <li className="text-[rgba(234,179,8,1)]"><a href="#hero">Z</a></li>
          <li className="text-white"><a href="#hero">oyitov.</a></li>
        </ul>
        <ul className="flex items-center justify-between w-[55%] text-[16px] text-base h-[100%] font-regular">
          <li className="text-gray-500 hover:text-white transition duration-1500 cursor-pointer">
            <a href="#hero">HOME</a>
          </li>
          <li className="text-gray-500 hover:text-white transition duration-1500 cursor-pointer">
            <a href="#about">ABOUT</a>
          </li>
          <li className="text-gray-500 hover:text-white transition duration-1500 cursor-pointer">
            <a href="#service">SERVICE</a>
          </li>
          <li className="text-gray-500 hover:text-white transition duration-1500 cursor-pointer">
            <a href="#portfolio">PORTFOLIO</a>
          </li>
          <li className="text-gray-500 hover:text-white transition duration-1500 cursor-pointer">
            <a href="#contact">CONTACT</a>
          </li>
          <li className="text-gray-500 hover:text-white transition duration-1500 cursor-pointer">
            <a href="#internet">INTERNET</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
