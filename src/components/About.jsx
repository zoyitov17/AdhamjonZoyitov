import React from 'react'
import AboutImg from '../assets/images/adhamjon3.jpg'

const About = () => {
  return (
    <div className="w-[100%] flex items-center justify-center h-[620px] bg-[rgba(2,6,23,1)]">
      <div className="w-[80%] flex justify-between items-center h-[75%]">
        <div className="w-[45%] h-[95%] relative">
          <ul>
            <li className="rounded-3xl w-[400px] h-[438px] border-[20px] border-[rgb(234,179,8)]"></li>
            <li className="absolute top-[-5%] left-[12%]">
              <img
                src={AboutImg}
                alt="Me"
                className="rounded-3xl w-[395px] h-[420px]"
              />
            </li>
          </ul>
        </div>
        <div className="w-[45%] h-[55%]">
          <div className="w-[100%] h-[100%]">
            <ul className="flex text-[38px] w-[38%] justify-between h-[50px] items-center ">
              <li className="text-[rgba(243,244,246,1)]">About</li>
              <li className="text-[rgba(234,179,8,1)] ">Me</li>
            </ul>
            <p className="text-[rgba(107,114,128,1)] mt-[7px] w-[98%]">
              Hello, I am Adhamjon and I am from Samarkand. I studied "FrontEnd
              ReactJS" at Najot Education in Tashkent. I am interested in
              Programming since June 2023. I speak English and Arabic, I have
              IELTS level 7 in English and Arabic at C1 level. In addition, I
              like to travel and conquer new places.
            </p>
            <button className="bg-[rgba(234,179,8,1)] mt-[28px] w-[124px] h-[49px] rounded text-[black] text-[16px]">
              <a href="#contact">Contact us</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About