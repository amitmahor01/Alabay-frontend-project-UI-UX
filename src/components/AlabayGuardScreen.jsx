import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import bgImage from '../images/AlabayGames/AlabayGuardprevgradient.png';

import Preview1 from '../images/AlabayGames/Alabay Guard/image 1 alabay guard.png'
import Preview2 from '../images/AlabayGames/Alabay Guard/image 2 alabay guard.png'
import Preview3 from '../images/AlabayGames/Alabay Guard/image 3 alabay guard.png'



// Main Component
function AlabayGuardianScreen() {

  
  const scrollContainerRef = useRef(null);

  // Function to handle the right scroll
  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 680, // Scroll width of 3 tiles (200px per tile + 20px space)
        behavior: 'smooth',
      });
    }
  };

  const [scrollPosition, setScrollPosition] = useState(0);
  const navigate = useNavigate();
    const handleExitClick =()=>{
        navigate(-1);}

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY; // Get the scroll position
      console.log('ScrollY:', scrollY); // Log to check scroll position
      setScrollPosition(scrollY); // Update scroll state
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative min-h-screen overflow-y-auto"
    style={{
      backgroundImage: `url(${bgImage})`,
    }}>
      {/* Static Background */}
      <div
        className="absolute top-0 left-0 w-full h-screen bg-cover bg-center bg-fixed"
        
      ></div>

      {/* Overlaying Content */}
      <div className="relative z-10">
        {/* Section 1: Fullscreen title overlay */}
        <div className="w-screen h-screen flex flex-col justify-center items-start mt-40 ml-20">
          <div
            className={`transition-opacity duration-500 flex-1 justify-start ${
              scrollPosition > 200 ? "opacity-0" : "opacity-100"
            }`}
          >
            <div className="">
            <h1 className="text-white text-[70px] font-bold font-Pattaya">ALABAY GUARDIAN</h1>
            <h2 className="text-[#a4a8ff] text-4xl  md:uppercase">Shepherd of the Steppes</h2>
            </div>
            <p className="text-white text-lg mt-3 max-w-3xl">
              Take on the role of the legendary Alabay on a <p>quest to uncover the
              ancient secrets of its </p>ancestors.
            </p>
            <button className="mt-8 bg-purple-600 text-white py-3 px-8 rounded-lg">
              Play
            </button>
          </div>
          <div className="flex justify-between space-x-4 text-[30px] font-bold mt-20">
            <h1 className='md:uppercase text-white'><span className='text-[#a4a8ff]'>Game</span> Previews</h1>
        </div>
  
        {/* Scrollable container */}
        <div className="relative mt-5">
          
          <div
            ref={scrollContainerRef}
            className="flex space-x-4 overflow-x-auto overflow-y-auto scrollbar-hide w-screen h-auto" // Width of 3 tiles (200px each + 20px spacing)
          >
            
            {/* Photo Cards */}
            <div className="w-[250px] h-[250px]  flex items-center justify-center text-xl">
              <img src={Preview1} alt="" className="rounded-3xl border-2 border-white "/>
            </div>
            <div className="w-[250px] h-[250px]  flex items-center justify-center text-xl">
            <img src={Preview2} alt=""  className="rounded-3xl border-2 border-white "/>
            </div>
            <div className="w-[250px] h-[250px]  flex items-center justify-center text-xl">
            <img src={Preview3} alt=""  className="rounded-3xl border-2 border-white "/>
            </div>
            {/* Add more photos as needed */}
          </div>
  
          {/* Scroll Right Button */}
          <button
            className="absolute top-1/2 transform -translate-y-1/2 right-0 bg-black text-white p-2 rounded-full"
            onClick={scrollRight}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        </div>
        


        {/* Section 2: Features overlay (appears after scrolling) */}
        <div
          className={` text-white p-16 transition-all duration-500 ${
            scrollPosition > 200
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-5xl font-bold">FEATURES</h2>
          <p className="mt-6 text-xl">
            Explore a variety of landscapes, including mountains, forests, deserts, and ancient ruins.
          </p>
          <ul className="list-disc list-inside mt-4">
            <li>Use the Alabay's abilities to solve puzzles.</li>
            <li>Discover relics that tell the story of the Alabay's ancestors.</li>
            <li>Unlock new skills and abilities for the Alabay.</li>
          </ul>
          <div className="mt-8 flex space-x-4">
            <button className="bg-gray-800 text-white border-2 border-white h-10 w-28 p-2 rounded-lg">
              Play
            </button>
            <button className="bg-gray-800 text-white border-2 border-white h-10 w-28 p-2 rounded-lg" onClick={handleExitClick}>
              Exit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
  
}

export default AlabayGuardianScreen;
