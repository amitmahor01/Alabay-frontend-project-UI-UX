import React from 'react'
import TokeNomicsImg from '../images/TokeNomicsImg.png'

function TokeNomics() {
  return (
    <div className="h-auto w-screen bg-gradient-to-tr from-[#FFC700] to-white via-white">
  <div className="w-full text-[#ffa800] font-CheeseBurga font-extrabold text-[100px] ml-28 p-12">
    <h1>TOKENOMICS</h1>
  </div>

  {/* Flex container to align text and image in the same row */}
  <div className="flex justify-between items-start mt-12 px-20">
    {/* Text content */}
    <div className="w-[400px] text-gray-800 text-[30px] font-bold p-5">
  <button
    type="submit"
    className="md:uppercase w-[350px] h-24 rounded-2xl bg-[#353535] text-left pl-5 text-white flex flex-col justify-center"
  >
    <span className="text-[20px] leading-tight">Liquidity</span>
    <p className="text-[45px] font-extrabold text-[#FFE458] leading-none">Locked</p>
  </button>
  <button
    type="submit"
    className="md:uppercase w-[350px] h-24 rounded-2xl bg-[#353535] text-left mt-7 pl-5 text-white flex flex-col justify-center"
  >
    <span className="text-[20px] leading-tight">Contract</span>
    <p className="text-[45px] font-extrabold text-[#FFE458] leading-none">Renounced</p>
  </button>
  <button
    type="submit"
    className="md:uppercase w-[350px] h-24 rounded-2xl bg-[#353535] text-left mt-7 pl-5 text-white flex flex-col justify-center"
  >
    <span className="text-[20px] leading-tight">Taxes</span>
    <p className="text-[45px] font-extrabold text-[#FFE458] leading-none">0%</p>
  </button>
</div>


    {/* Image content */}
    <div className="w-[600px]">
      <img src={TokeNomicsImg} alt="" className="-mt-32 -ml-28 p-8"/>
    </div>
  </div>
</div>

  )
}

export default TokeNomics