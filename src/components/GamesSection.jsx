import React,{useState,useEffect} from "react";
import AlabayGuardGame from '../images/AlabayGames/alabay guard prev 2 1.png'
import AlabayHeritageGame from '../images/AlabayGames/alabay lost heritage prev 1.png'
import { useNavigate } from "react-router-dom";

const items = [
    {
      backgroundImageUrl: AlabayGuardGame, 
      altText: 'Alabay Guard',
      route: '/AlabayGuardScreen'
    },
    {
      backgroundImageUrl: AlabayHeritageGame,
      altText: 'Alabay The lost heritage',
      route: '/AlabayLostHeritageScreen'
    }
  ];


function GamesSection() {

    const [currentIndex, setCurrentIndex]= useState(0);
    const [IsTransitioning, setIsTransitioning] = useState(false);
    const navigate = useNavigate();
    const handleDiscoverClick =()=>{
      const currentGame = items[currentIndex]; // Get the current game based on the index
      navigate(currentGame.route);
    }
    //auto changing the background image 
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
    <div className="bg-[radial-gradient(42.38%_44.19%_at_50.14%_67.33%,_#FFF280_0%,_#FFC700_100%)] flex-col justify-center text-center">
      <div className="w-screen h-auto">
        <p className="text-[150px] text-[#ffffff] font-CheeseBurga font-extrabold">Games</p>
        <p className="text-[50px] text-[#353535] font-extrabold -mt-14">
          Stay tuned for upcoming games!{" "}
        </p>
      </div>
      <div
          className={`w-[90vw] h-auto p-9 ml-16   flex justify-center items-center relative transition-all duration-500`}
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
            src={items[currentIndex].backgroundImageUrl}
            alt={items[currentIndex].altText}
            className={`w-auto h-auto transition-opacity rounded-3xl border-8 border-white duration-500 ease-in-out ${
              IsTransitioning? "opacity-0" : "opacity-100"
            }`}
          ></img>

          {/* Right Arrow */}
          <button
            className="absolute right-5 bg-white rounded-full p-2"
            onClick={handleNext}
          >
            →
          </button>

          {/* Text Overlay */}
          <div className="absolute bottom-10 text-center text-white">
            <button className="bg-[#843AFC] text-[30px] text-white h-[60px] w-[250px]  rounded-[40px] mb-20 font-bold">
              <p className="-mt-2" onClick={handleDiscoverClick }>Discover</p>
            </button>
          </div>
        </div>

      </div>
  );
}

export default GamesSection;
