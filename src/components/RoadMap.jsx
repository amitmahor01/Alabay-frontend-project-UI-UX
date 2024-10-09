import React from "react";
import RoadMapImg from '../images/roadMap.png';

function RoadMap() {
  return (
    <div className="h-auto w-screen bg-gradient-to-bl from-[#FFC700] to-white via-white">
      <div className="w-full text-[#ffa800] font-CheeseBurga font-extrabold text-[100px] ml-28 p-12">
        <h1>Road Map</h1>
      </div>

      {/* Flex container to align text and image in the same row */}
      <div className="flex justify-between items-start mt-12 px-20">
        {/* Text content */}
        <div className="w-[400px] text-gray-800 text-2xl font-bold">
          <p>
            Our journey is just beginning. Explore our roadmap to see the exciting
            milestones and future plans we have in store.
          </p>
          <p className="text-orange-500 mt-4">
            Join us as we grow and achieve new heights.
          </p>
        </div>

        {/* Image content */}
        <div className="w-[600px]">
          <img src={RoadMapImg} alt="Road Map" className="-mt-48 -ml-28 p-12"/>
        </div>
      </div>
    </div>
  );
}

export default RoadMap;
