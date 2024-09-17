import React from "react";
import HorizontalCard from "./HorizontalCard";

function WhatWeOffer() {
  const dummyData = [
    {
      link: "/services/skin",
      img: "/PHOTO-2024-07-13-12-49-36.jpg",
      title: "Skin Care",
      description: "",
    },
    {
      link: "/services/skin",
      img: "/PHOTO-2024-07-13-11-35-34.jpg",
      title: "Dental",
      description: "",
    },
    {
      link: "/services/skin",
      img: "/PHOTO-2024-07-15-15-49-27.jpg",
      title: "Laser",
      description: "",
    },
  ];
  return (
    <div className="relative px-12 pt-12 pb-24"
      style={{
        backgroundImage: `url('/Vector 8.png')`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "0px -90px",
      }}
    >
      <div className="">
      <h1 className="text-4xl text-center text-primary uppercase">
        What We Offer
      </h1>
      <div className="flex justify-between gap-5 my-5">
        {dummyData.map((data, index) => (
          <HorizontalCard
            key={index}
            link={data.link}
            img={data.img}
            title={data.title}
            description={data.description}
          />
        ))}
      </div>
      </div>
    </div>
  );
}

export default WhatWeOffer;
