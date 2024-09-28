import React, { useEffect, useState } from "react";
import HeroSection from "../components/HeroSection";
import Section2 from "../components/Section2";
import ImageLoading from "../components/loading/imageLoading";

  const Home = () => {
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      // Simulate a short loading time
      const timer = setTimeout(() => {
        setLoading(false);
        console.log("Home page content loaded");
      }, 1000);
  
      // Clean up the timer
      return () => clearTimeout(timer);
    }, []);

  return (
    <div style={{ transition: 'opacity 0.5s ease', opacity: loading ? 0.5 : 1 }}>
      {loading ? (
        <ImageLoading />
      ) : (
        <>
          <HeroSection />
          <Section2 />
        </>
      )}
    </div>
  );
};

export default Home;
