import React from "react";
import historyImage from '../images/dall.e.history.png'

function AlabayHistory() {
  return (
    

<div className="contain-content bg-[radial-gradient(42.38%_44.19%_at_50.14%_67.33%,_#FFF280_0%,_#FFC700_100%)] w-screen h-[700px]">
  <div className="flex items-center justify-between h-full p-5 w-[60%] ">
    <img src={historyImage} alt="Alabay Dog" className="max-w-full h-auto mt-40 "></img>
    <div className="flex-1 ml-28 text-right tracking-wider history-title">
      <h1 className="text-[60px] font-extrabold font-Montserrat text-orange-500 ">History Of</h1>
      <h2 className="text-[120px] font-CheeseBurga font-bold text-[#ffffff] -mt-4 "><span className="tracking-wide history-subtitle">ALABAY</span></h2>
      <p className="text-lg text-[#353535] font-extrabold max-w-xl mt-4 font-Montserrat" >
        The Central Asian Shepherd Dog, also known as Alabay, has been a guardian of livestock and property for centuries. Originating from Central Asia, these dogs are renowned for their courage, strength, and loyalty.
      </p>
    </div>
  </div>
</div>

    
  );
}

export default AlabayHistory;
