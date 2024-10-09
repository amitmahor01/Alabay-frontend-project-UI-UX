import React from 'react';
import TokeNomicsImg from '../images/TokeNomicsImg.png';

function TokeNomics() {
  return (
    <div className="h-auto w-screen bg-gradient-to-tr from-[#FFC700] to-white via-white">
      <div className=" w-full text-[#ffa800] font-CheeseBurga font-extrabold text-[100px] ml-28 p-12">
        <h1 className='tokenomics-title'>TOKENOMICS</h1>
      </div>

      {/* Flex container to align text and image in the same row */}
      <div className="flex justify-between items-start mt-12 px-20">
        {/* Text content */}
        <div className="tokenomics-text-main w-[400px] text-gray-800 text-[20px] font-bold p-5">
          <button
            type="submit"
            className="md:uppercase md:w-[350px] md:h-24 rounded-2xl bg-[#353535] text-left md:pl-5 text-white flex flex-col justify-center"
          >
            <span className=" leading-tight tokenomics-text-sub">Liquidity</span>
            <p className="tokenmics-button-font text-[45px] font-extrabold text-[#FFE458] leading-none">Locked</p>
          </button>
          <button
            type="submit"
            className="md:uppercase md:w-[350px] md:h-24 rounded-2xl bg-[#353535] text-left mt-7 md:pl-5 text-white flex flex-col justify-center"
          >
            <span className=" leading-tight tokenomics-text-sub">Contract</span>
            <p className="tokenmics-button-font text-[45px] font-extrabold text-[#FFE458] leading-none">Renounced</p>
          </button>
          <button
            type="submit"
            className="md:uppercase md:w-[350px] md:h-24 rounded-2xl bg-[#353535] text-left mt-7 md:pl-5 text-white flex flex-col justify-center"
          >
            <span className=" leading-tight tokenomics-text-sub">Taxes</span>
            <p className=" tokenmics-button-font text-[45px] font-extrabold text-[#FFE458] leading-none">0%</p>
          </button>
        </div>

        {/* Image content */}
        <div className="md:w-[600px] tokenomics-img">
          <img src={TokeNomicsImg} alt="Tokenomics" className="md:-mt-32 - md:p-8"/>
        </div>
      </div>
    </div>
  );
}

export default TokeNomics;
