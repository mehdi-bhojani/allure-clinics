import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import HorizontalCard from "./HorizontalCard";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SkinServices from "../../shared/SkinServices.json"

function WhatWeOffer() {
  const [slidePercentage, setSlidePercentage] = useState(33.33); // Default for desktop

  // Adjust slide width based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSlidePercentage(100); // Mobile: full width
      } else if(window.innerWidth < 1024){
        setSlidePercentage(50); // Tablet: 1/2 of the width
      } 
       else {
        setSlidePercentage(33.33); // Desktop: 1/3 of the width
      }
    };

    // Initial check
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className="relative p-5 md:px-12 pt-12 pb-24 specialists"
      id="services"
      style={{
        backgroundImage: `url('/Vector 8.png')`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "0px -110px",
      }}
    >
      <h1 className="text-4xl text-center text-primary mb-8">What We Offer</h1>
      <div className="max-w-5xl mx-auto">
        <Carousel
          showArrows={true}
          infiniteLoop={true}
          centerMode={true}
          centerSlidePercentage={slidePercentage} // Dynamic percentage based on screen size
          showThumbs={false}
          showStatus={false}
          showIndicators={false}
          swipeable={true}
          autoPlay={true}
          emulateTouch={true}
          renderArrowPrev={(onClickHandler, hasPrev, label) =>
            hasPrev && (
              <button
                type="button"
                onClick={onClickHandler}
                title={label}
                aria-label="Previous slide"
                style={{ left: 15 }}
                className="absolute top-[50%] left-0 z-10 p-2 bg-[#E3B25A] rounded-full hover:bg-[#c89f45] focus:outline-none"
              >
                <ChevronLeft className="text-white text-xl" />
              </button>
            )
          }
          renderArrowNext={(onClickHandler, hasNext, label) =>
            hasNext && (
              <button
                type="button"
                onClick={onClickHandler}
                title={label}
                aria-label="Next slide"
                style={{ right: 15 }}
                className="absolute top-[50%] right-0 z-10 p-2 bg-[#E3B25A] rounded-full hover:bg-[#c89f45] focus:outline-none"
              >
                <ChevronRight className="text-white text-xl" />
              </button>
            )
          }
        >
          {SkinServices.map((data, index) => (
            <HorizontalCard
              key={index}
              link={data.link}
              img={data.img}
              title={data.serviceType}
              description={""}
            />
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default WhatWeOffer;
