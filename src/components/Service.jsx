import React from 'react'
import Img1 from '../assets/images/1img.svg'
import Img2 from "../assets/images/2img.svg";
import Img3 from "../assets/images/3img.svg";

const Service = () => {
  return (
    <div className="w-[100%] flex items-center justify-center h-[660px] bg-[rgba(17,24,39,1)]">
      <div className="w-[80%] h-[80%] ">
        <ul className="w-[20%] h-[60px] flex justify-between items-center text-[42px]">
          <li className="text-[rgba(243,244,246,1)]">My</li>
          <li className="text-[rgba(234,179,8,1)]">Service</li>
        </ul>
        <div className="w-[100%] h-[278px] flex items-center justify-between mt-[92px]">
          <div className="w-[30%] h-[100%] bg-[rgba(2,6,23,1)] rounded-[14px]">
            <div className="w-[100%] h-[40px] mx-auto mt-[32px]">
              <img src={Img1} alt="" className="w-[100%] h-[100%] " />
            </div>
            <div className="w-[100%] h-[80px] flex items-center justify-center mt-[26px]">
              <h2 className="text-[28px] text-[rgba(243,244,246,1)] w-[50%] h-[100%] text-center">
                Digital Marketing
              </h2>
            </div>
            <div className="w-[100%] h-[100px] mx-auto">
              <p className="w-[90%] h-[100%] text-[rgba(107,114,128,1)] text-[16px] text-center mt-[18px] mx-auto">
                Promote the brand and connect with customers through social
                media.
              </p>
            </div>
          </div>

          <div className="w-[30%] h-[100%] bg-[rgba(2,6,23,1)] rounded-[14px]">
            <div className="w-[100%] h-[40px] mx-auto mt-[32px]">
              <img src={Img2} alt="" className="w-[100%] h-[100%] " />
            </div>
            <div className="w-[100%] h-[80px] flex items-center justify-center mt-[26px]">
              <h2 className="text-[28px] text-[rgba(243,244,246,1)] w-[50%] h-[100%] text-center">
                Web Development
              </h2>
            </div>
            <div className="w-[100%] h-[100px] mx-auto">
              <p className="w-[93%] h-[100%] text-[rgba(107,114,128,1)] text-[16px] text-center mt-[18px] mx-auto">
                HTML, CSS, JavaScript, Sass, React, TypeScript, BootsTrap
              </p>
            </div>
          </div>

          <div className="w-[30%] h-[100%] bg-[rgba(2,6,23,1)] rounded-[14px]">
            <div className="w-[100%] h-[40px] mx-auto mt-[32px]">
              <img src={Img3} alt="" className="w-[100%] h-[100%] " />
            </div>
            <div className="w-[100%] h-[80px] flex items-center justify-center mt-[26px]">
              <h2 className="text-[28px] text-[rgba(243,244,246,1)] w-[70%] h-[100%] text-center">
                Create Graphic Design
              </h2>
            </div>
            <div className="w-[100%] h-[100px] mx-auto">
              <p className="w-[70%] h-[100%] text-[rgba(107,114,128,1)] text-[16px] text-center mt-[18px] mx-auto">
                We bring creative ideas into visual form
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service