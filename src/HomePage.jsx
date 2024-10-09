import React from "react";
import Introduction from "./components/introduction";
import AlabayHistory from "./components/history";
import PhotoGallery from "./components/PhotoGallery";
import ProjectVision from "./components/ProjectVision";
import RoadMap from "./components/RoadMap";
import TokeNomics from "./components/TokeNomics";
import Merchandise from "./components/Merchandise";
import SocialHandler from "./components/SocialHandler";
import GamesPreview from "./components/GamesPreview";
import GamesSection from "./components/GamesSection";
import Community from "./components/Community";

function HomePage() {
  return (
    <div className=" bg-[url('./images/alabay-bg.png')] w-screen h-screen bg-cover">
      <Introduction />

      <AlabayHistory />
      <PhotoGallery />
      <ProjectVision />
      <RoadMap />
      <Community/>
      <TokeNomics />
      <Merchandise />
      <GamesSection />
      <GamesPreview />
      <SocialHandler />
    </div>
  );
}

export default HomePage;
