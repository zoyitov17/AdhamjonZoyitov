import React, { useState } from "react";

const Contact = () => {
  return (
    <div className="w-[100%] h-[740px] flex items-center justify-center bg-[rgba(17,24,39,1)]">
      <div className="w-[80%] h-[80%]">
        <ul className="w-[22%] h-[50px] flex items-center justify-between text-[42px] mx-auto">
          <li className="text-[rgba(243,244,246,1)]">Contact</li>
          <li className="text-[rgba(234,179,8,1)]">Me</li>
        </ul>

        <p className="text-[16px] text-[rgba(156,163,175,1)] text-center mt-[34px]">
          Contact me and let me know how I can help you
        </p>

        <div className="w-[80%] h-[342px] flex items-center justify-between mt-[76px] mx-auto">
          <div className="w-[40%] h-[100%]">
            <ul className="mt-[75px] flex w-[100%] h-[50px]">
              <li className="mr-[7px] text-[rgba(234,179,8,1)] text-[16px]">
                <a
                  href="https://www.google.com/maps/@41.3203335,69.246709,353m/data=!3m1!1e3?entry=ttu"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Address_
                </a>
              </li>
              <li className="text-[rgba(243,244,246,1)] text-[16px] cursor-pointer">
                <a
                  href="https://www.google.com/maps/@41.3203335,69.246709,353m/data=!3m1!1e3?entry=ttu"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  House Gardens 65, Khahdra St, Tashkent, Oʻzbekiston
                </a>
              </li>
            </ul>
            <ul className="mt-[12px] flex items-center w-[100%] h-[40px]">
              <li className="mr-[7px] text-[rgba(234,179,8,1)] text-[16px]">
                <a
                  href="tel:+998931907232"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Phone_
                </a>
              </li>
              <li className="text-[rgba(243,244,246,1)] text-[16px]">
                <a
                  href="tel:+998931907232"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  +998(93)1907232
                </a>
              </li>
            </ul>
            <ul className="mt-[12px] flex items-center w-[100%] h-[40px]">
              <li className="mr-[7px] text-[rgba(234,179,8,1)] text-[16px]">
                <a
                  href="https://www.google.com/gmail/about/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Email_
                </a>
              </li>
              <li className="text-[rgba(243,244,246,1)] text-[16px]">
                <a
                  href="https://www.google.com/gmail/about/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  adhamjonzokhidov@gmail.com
                </a>
              </li>
            </ul>
            <ul className="mt-[12px] flex items-center w-[100%] h-[40px]">
              <li className="mr-[7px] text-[rgba(234,179,8,1)] text-[16px]">
                Website_
              </li>
              <li className="text-[rgba(243,244,246,1)] text-[16px]">
                Not Found
              </li>
            </ul>
          </div>

          <div className="w-[50%] h-[100%]">
            <div>
              <input
                type="text"
                placeholder="Name"
                className="w-[60%] border-none outline-none pl-4 pr-18 h-[53px] bg-[rgba(31,41,55,1)] placeholder-opacity-50 text-[rgba(243,244,246,1)] text-[16px]"
              />
              <textarea
                placeholder="Message"
                className="w-full text-[18px] h-[155px] mt-[32px] pl-4 pt-[10px] border-none outline-none bg-[rgba(31,41,55,1)] placeholder-opacity-50 text-[rgba(243,244,246,1)] resize-none"
              ></textarea>
              <button
                type="submit"
                className="cursor-pointer text-black mt-[32px] w-[123px] h-[59px] bg-yellow-500 text-[16px] rounded-[4px] placeholder-black placeholder-opacity-100"
              >
                Contact us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;