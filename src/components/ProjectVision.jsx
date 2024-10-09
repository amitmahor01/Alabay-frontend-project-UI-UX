import React from "react";
import ProjectVisionImage from "../images/ProjectVisionImage.png";

function ProjectVision() {
  return (
    <>
      <div className="h-auto w-screen flex-col bg-slate-200 content-center bg-gradient-to-tr from-[#FFC700] to-yellow-400 via-white bg-gradient-to-tl from-[#FFC700] to-white via-white">
        <div>
          <h1 className="text-[#ffa800] text-[150px] font-CheeseBurga align-center font-bold ml-40">
            PROJECT VISION
          </h1>
        </div>
        <div>
          <img src={ProjectVisionImage} alt="" srcset=""  />
        </div>
        <div>
          <h2 className="text-gray-800 text-center text-2xl font-bold">
            <p>
              Our mission is to honor the heritage of the Alabay by creating a{" "}
            </p>
            <p>
              vibrant, loyal, and powerful community. Just as the Alabay
              protects its{" "}
            </p>
            <p>flock, we aim to build a pack that stands strong together.</p>
          </h2>
        </div>
      </div>
    </>
  );
}

export default ProjectVision;
