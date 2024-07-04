import React from 'react'
import MyImg from '../assets/images/adhamjon3.jpg'

const Hero = () => {
  return (
    <div className="w-[100%] flex justify-center items-center h-[620px] bg-[rgba(17,24,39,1)] ">
      <div className="w-[80%] h-[75%] flex justify-between items-center">
        <div className="w-[40%] h-[70%]">
          <h4 className="mt-[40px] text-[20px] text-[rgba(234,179,8,1)] mb-[20px] font-[33px]">
            Hello, Welcome
          </h4>
          <h1 className="mb-[5px] w-[100%] text-[38px] text-[rgba(243,244,246,1)] font-[44  px] ">
            I'm Adhamjon Zoyitov from Uzbekistan Samarkand 
          </h1>
        </div>
        <div className='w-[33%] h-[70%] '>
          <img src={MyImg} alt="" className='w-[100%] h-[100%] rounded-3xl' />
        </div>
      </div>
    </div>
  );
}

export default Hero