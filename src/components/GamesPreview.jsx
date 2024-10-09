import React,{useRef} from 'react'
import Preview1 from '../images/AlabayGames/GamePreview1.png' 
import Preview2 from '../images/AlabayGames/GamePreview2.png'
import Preview3 from '../images/AlabayGames/GamePreview3.png'

function GamesPreview() {

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
  
    return (
      <div className="p-5 content-center bg-[#ffffff] h-auto">
        {/* Tabs for filtering content */}
        <div className="flex justify-between space-x-4 text-[40px] ml-10 font-extrabold">
            <h1 className='md:uppercase'><span className='text-[#FFA800]'>Game</span> Previews</h1>
        </div>
  
        {/* Scrollable container */}
        <div className="relative mt-5">
          
          <div
            ref={scrollContainerRef}
            className="flex space-x-4 bg-[#ffffff] overflow-x-auto scrollbar-hide w-stretch h-auto" // Width of 3 tiles (200px each + 20px spacing)
          >
            
            {/* Photo Cards */}
            <div className="w-[400px] h-[400px] p-6  rounded-lg flex items-center justify-center text-xl">
              <img src={Preview1} alt="" />
            </div>
            <div className="w-[400px] h-[400px] p-6  rounded-lg flex items-center justify-center text-xl">
            <img src={Preview2} alt="" />
            </div>
            <div className="w-[400px] h-[400px] p-6  rounded-lg flex items-center justify-center text-xl">
            <img src={Preview3} alt="" />
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
    );
  }

export default GamesPreview