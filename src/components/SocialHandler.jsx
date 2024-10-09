import React from "react";
import SocialHandlerImg from "../images/socialHandlerImg.png";
import SocialBG from "../images/SocialBG.png";
import TwitterLogo from "../images/twitter logo 1.png";
import TelegramLogo from "../images/Mask group.png";

function SocialHandler() {
  return (
    <div className="h-auto w-screen bg-[#FFFFFF]">
      <div className="social-media-text md:w-full font-extrabold text-[100px] text-[#FFA800] md:ml-44 md:p-12">
        <h1 className="md-uppercase font-CheeseBurga">
          social media <p>links</p>
        </h1>
      </div>

      {/* Flex container to align text and image in the same row */}
      <div className="flex justify-between items-start mt-12 px-20">
        {/* Text content */}
        <div
          className=" social-media-logo w-[300px] h-[400px] md:p-2 md:ml-32 bg-cover bg-center content-center text-white font-extrabold "
          style={{ backgroundImage: `url(${SocialBG})` }}
        >
          <div className="md:ml-5 flex items-center space-x-4">
          <img src={TwitterLogo}  className="bg-gray-800 rounded-full p-2" alt="" /><a href="" >
               Twitter Link
            </a>
          </div>
          <div className="md:ml-5 mt-6 flex items-center space-x-4">
            {" "}
            <img src={TelegramLogo} className="bg-gray-800 rounded-full md:p-2" alt="" /><a href="">
              
              Telegram Link
            </a>
          </div>
        </div>

        {/* Image content */}
        <div className="md:w-[600px] social-media-dog-img">
          <img src={SocialHandlerImg} alt="" className="md:-mt-32 md:-ml-28 md:p-8" />
        </div>
      </div>
    </div>
  );
}

export default SocialHandler;
