import { useRef } from 'react';

function PhotoGallery() {
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
    <div className="p-5 content-center bg-slate-200">
      {/* Tabs for filtering content */}
      <div className="flex justify-center space-x-4 text-lg font-semibold">
        <button className="hover:text-orange-500 focus:text-orange-500">ALL</button>
        <button className="text-orange-500">PHOTOS</button>
        <button className="hover:text-orange-500 focus:text-orange-500">VIDEOS</button>
      </div>

      {/* Scrollable container */}
      <div className="relative mt-5">
        
        <div
          ref={scrollContainerRef}
          className="flex space-x-4 overflow-x-auto scrollbar-hide w-stretch" // Width of 3 tiles (200px each + 20px spacing)
        >
          
          {/* Photo Cards */}
          <div className="min-w-80 bg-gray-300 h-40 rounded-lg flex items-center justify-center text-xl">
            PHOTO 1
          </div>
          <div className="min-w-80 bg-gray-300 h-40 rounded-lg flex items-center justify-center text-xl">
            PHOTO 2
          </div>
          <div className="min-w-80 bg-gray-300 h-40 rounded-lg flex items-center justify-center text-xl">
            PHOTO 3
          </div>
          <div className="min-w-80 bg-gray-300 h-40 rounded-lg flex items-center justify-center text-xl">
            PHOTO 4
          </div>
          <div className="min-w-80 bg-gray-300 h-40 rounded-lg flex items-center justify-center text-xl">
            PHOTO 5
          </div>
          <div className="min-w-80 bg-gray-300 h-40 rounded-lg flex items-center justify-center text-xl">
            PHOTO 6
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

export default PhotoGallery;
