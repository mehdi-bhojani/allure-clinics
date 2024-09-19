import React from "react";
import NavBar from "./Navbar/NavBar";
import VideoFrame from "./carousel/VideoFrame";

function HeroSection() {
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <VideoFrame url={'/Allure.mp4'} />
      </div>
    );
  }
  
  export default HeroSection;
  
  // <img src="/PHOTO-2024-07-13-12-49-22.jpg" alt="placeholder" className="w-full max-h-[600px] object-cover" />      