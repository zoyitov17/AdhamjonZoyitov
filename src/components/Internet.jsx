import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Internet = () => {
  return (
    <div className="w-[100%] h-[220px] flex justify-center items-center bg-[rgba(2,6,23,1)]">
      <div className="w-[80%] h-[85%]">
        <ul className="w-[14.4%] h-[50px] flex items-center justify-between text-[42px] mx-auto">
          <li className="text-[rgba(243,244,246,1)]">Inter</li>
          <li className="text-yellow-500">net</li>
        </ul>
        <div className="w-[100%] h-[54px] mt-[22px] flex items-center justify-center ">
          <p className="text-[rgba(156,163,175,1)] text-[16px]">
            I am a young frontend developer with strong passion for Programming.
          </p>
        </div>
        <div className="w-[100%] h-[24px] flex items-center justify-center">
          <ul className="w-[20%] h-full flex justify-between items-center mt-[24px]">
            <li className="w-[24px] h-[24px] text-[28px] text-[rgba(31,41,55,1)] transition-colors duration-1800s hover:text-[rgba(234,179,8,1)]">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook />
              </a>
            </li>
            <li className="w-[24px] h-[24px] text-[28px] text-[rgba(31,41,55,1)] transition-colors duration-1800s hover:text-[rgba(234,179,8,1)]">
              <a
                href="https://x.com/zoyitov17"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter />
              </a>
            </li>
            <li className="w-[24px] h-[24px] text-[28px] text-[rgba(31,41,55,1)] transition-colors duration-1800s hover:text-[rgba(234,179,8,1)]">
              <a
                href="https://www.instagram.com/zoy1tov17/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
            </li>
            <li className="w-[24px] h-[24px] text-[28px] text-[rgba(31,41,55,1)] transition-colors duration-1800s hover:text-[rgba(234,179,8,1)]">
              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Internet;
