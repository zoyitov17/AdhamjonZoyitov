import React from 'react'
import Portfolioimg from "../assets/images/example-poertfolio.png";

const Portfolio = () => {
  return (
    <div className="w-[100%] flex items-center justify-center h-[1000px] bg-[rgba(2,6,23,1)]">
      <div className="w-[80%] h-[850px] ">
        <ul className="w-[23%] h-[50px] flex items-center justify-between text-[42px] mx-auto">
          <li className="text-[rgba(243,244,246,1)]">My</li>
          <li className="text-[rgba(234,179,8,1)]">Portfolio</li>
        </ul>
        <div className='w-[100%] h-[565px] mt-[130px]'>
          <img src={Portfolioimg} alt="" className='w-[100%] h-[100%]' />
        </div>
      </div>
    </div>
  );
}

export default Portfolio