import React from "react";
// import { useParams } from "react-router-dom";
import ServiceCard from "../components/Services/ServiceCard";
import SkinServices from "../shared/SkinServices.json";
import NavBar from "../components/Navbar/NavBar";

const Services = () => {
  // const { category } = useParams();
  // const router = use
  return (
    <>
    <NavBar />
    <div className="p-12 mt-20">
      <div className="flex flex-wrap justify-center gap-4">
        {SkinServices.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            price={service.price}
            image={service.image}
          />
        ))}
      </div>
    </div>
    </>
  );
};

export default Services;
