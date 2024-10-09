import React, { useState, useEffect } from "react";
import bgImageBlcHoodie from '../images/AlabayMerch/blackhoodiebck.png';
import ImageBlcHoodie from '../images/AlabayMerch/blackhoodie.png';
import blueCapBck from '../images/AlabayMerch/bluecapbck.png';
import blueCap from '../images/AlabayMerch/capmockup.png';
import pinkTee from '../images/AlabayMerch/pinktshirt.png';
import pinkTeeBck from '../images/AlabayMerch/pinkteebck.png';
import yellowTeeBck from '../images/AlabayMerch/yellowteebck.png';
import yelloTee from '../images/AlabayMerch/yellowtshirt.png';


// Dummy image and background data
const items = [
  {
    backgroundImageUrl: bgImageBlcHoodie, // Replace with your background image path
    imageUrl: ImageBlcHoodie, // Replace with your overlay image path
    altText: 'T-shirt Design 1',
  },
  {
    backgroundImageUrl: blueCapBck, // Replace with your background image path
    imageUrl: blueCap, // Replace with your overlay image path
    altText: 'T-shirt Design 2',
  },
  {
    backgroundImageUrl: pinkTeeBck, // Replace with your background image path
    imageUrl: pinkTee, // Replace with your overlay image path
    altText: 'T-shirt Design 3',
  },
  {
    backgroundImageUrl: yellowTeeBck, // Replace with your background image path
    imageUrl: yelloTee, // Replace with your overlay image path
    altText: 'T-shirt Design 4',
  }
];

function Merchandise() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    // Auto-change background and image every 5 seconds
    useEffect(() => {
      const interval = setInterval(() => {
        handleNext();
      }, 5000);
      return () => clearInterval(interval); // Cleanup interval on component unmount
    }, []);

    // Function to handle right arrow click
    const handleNext = () => {
      setIsTransitioning(true);  // Start transition
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
        setIsTransitioning(false);  // End transition after image changes
      }, 300); // Adjust delay to match the duration of the CSS transition
    };

    // Function to handle left arrow click
    const handlePrevious = () => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
        setIsTransitioning(false);
      }, 300);
    };

    return (
      <div className="h-auto w-screen bg-gradient-to-tl from-[#FFC700] to-yellow-400 via-white flex-col items-center">
        <div className="merchandise-title w-full text-[#ffa800] font-CheeseBurga font-extrabold text-[120px] p-12 leading-tight  text-center">
          <h1>Merchandise</h1>
        </div>

        {/* Container for the merchandise with transitions */}
        <div
          className={`md:w-[70vw] md:h-[500px] flex justify-center items-center relative md:ml-48 rounded-xl transition-all duration-500`}
          style={{
            backgroundImage: `url(${items[currentIndex].backgroundImageUrl})`, // Dynamically setting the background image
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Left Arrow */}
          <button
            className="absolute left-5 bg-white rounded-full p-2"
            onClick={handlePrevious}
          >
            ←
          </button>

          {/* Main Image with fade transition */}
          <img
            src={items[currentIndex].imageUrl}
            alt={items[currentIndex].altText}
            className={`md:w-auto md:h-auto md:p-44 transition-opacity duration-500 ease-in-out ${
              isTransitioning ? "opacity-0" : "opacity-100"
            }`}
          />

          {/* Right Arrow */}
          <button
            className="absolute right-5 bg-white rounded-full p-2"
            onClick={handleNext}
          >
            →
          </button>

          {/* Text Overlay */}
          <div className="absolute bottom-10 text-center text-white">
            <button className="merchandise-button bg-gray-900 text-white h-8 w-36 p-3 rounded-[40px] mt-5">
              <p className="md:-mt-2">Discover</p>
            </button>
          </div>
        </div>
      </div>
    );
  }

  export default Merchandise;
