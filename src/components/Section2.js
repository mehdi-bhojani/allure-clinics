import React from "react";
import JourneyCard from "./Home/JourneyCard";
import WhatWeOffer from "./Home/WhatWeOffer";
import SheduleAppointment from "./Home/SheduleAppointment";
import SpecialistCard from "./Home/SpecialistCard";
import TestimonialSlider from "./Home/TestimonialSlider";
import Footer from "./Home/Footer";

function Section2() {
  const cardsData = [
    {
      id: 1,
      img: "/portrait-youth-with-freckles-beauty-marks_23-2151703773.png",
      title: "Our Journey",
      description:
        "This is a description of our first journey. It was an amazing experience full of challenges and growth.",
    },
    {
      id: 2,
      img: "/standing-top-mountain-peak-success-achieved-generated-by-ai_188544-33348.png",
      title: "Our Goals",
      description:
        "This journey took us to new heights and introduced us to new perspectives. A truly transformative experience.",
    },
    {
      id: 3,
      img: "/portrait-youth-with-freckles-beauty-marks_23-2151703773.png",
      title: "Contact Us",
      description:
        "An unforgettable journey with lots of fun and learning. We explored new territories and made lasting memories.",
    },
  ];

  return (
    <div className="w-full bg-[#9E8E86] relative min-h-screen"
    style={{
      backgroundImage: `url('/Leaves.png')`,
      backgroundSize: "contain",
      backgroundPosition: "center",
    }}>
    <div className="flex flex-col pt-24 gap-12 p-12">
    {cardsData.map((item) => {
          return (
            <JourneyCard
              key={item.id}
              title={item.title}
              img={item.img}
              description={item.description}
            />
          );
        })}
      </div>
      <div>
        <WhatWeOffer />
      </div>
      <div>
        <SheduleAppointment />
      </div>
      <div>
        <SpecialistCard />
      </div>
      <div>
        <TestimonialSlider />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Section2;

          // <div
          //   className="absolute w-full h-full inset-0 bg-cover bg-center z-10"
          //   style={{
          //     backgroundImage: `url('/Leaves.png')`,
          //     backgroundSize: "contain",
          //     backgroundPosition: "center",
          //   }}
          // ></div>