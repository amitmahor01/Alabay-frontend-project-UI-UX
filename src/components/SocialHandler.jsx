import React from "react";
import SocialHandlerImg from "../images/socialHandlerImg.png";
import SocialBG from "../images/SocialBG.png";
import TwitterLogo from "../images/twitter logo 1.png";
import TelegramLogo from "../images/Mask group.png";

function SocialHandler() {
  return (
    <div className="h-auto w-screen bg-[#FFFFFF]">
      <div className="w-full font-extrabold text-[100px] text-[#FFA800] ml-44 p-12">
        <h1 className="md-uppercase font-CheeseBurga">
          social media <p>links</p>
        </h1>
      </div>

      {/* Flex container to align text and image in the same row */}
      <div className="flex justify-between items-start mt-12 px-20">
        {/* Text content */}
        <div
          className="w-[300px] h-[400px] p-2 ml-32 bg-cover bg-center content-center text-white font-extrabold "
          style={{ backgroundImage: `url(${SocialBG})` }}
        >
          <div className="ml-5 flex items-center space-x-4">
          <img src={TwitterLogo}  className="bg-gray-800 rounded-full p-2" alt="" /><a href="" >
               Twitter Link
            </a>
          </div>
          <div className="ml-5 mt-6 flex items-center space-x-4">
            {" "}
            <img src={TelegramLogo} className="bg-gray-800 rounded-full p-2" alt="" /><a href="">
              
              Telegram Link
            </a>
          </div>
        </div>

        {/* Image content */}
        <div className="w-[600px]">
          <img src={SocialHandlerImg} alt="" className="-mt-32 -ml-28 p-8" />
        </div>
      </div>
    </div>
  );
}

export default SocialHandler;
