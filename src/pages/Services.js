import React from "react";
import { useParams } from "react-router-dom";
import ServiceCard from "../components/Services/ServiceCard";
import theServices from "../shared/SkinServices.json";
import NavBar from "../components/Navbar/NavBar";
import Footer from "../components/Home/Footer";

const Services = () => {
  const { category } = useParams();
  // const router = use
  console.log(category);
  const selectedService = theServices.find(
    (service) => service.type === category
  );
  // If no category matches, return a message or redirect
  if (!selectedService) {
    return (
      <>
        <NavBar />
        <div className="p-12 mt-20 text-center">
          <h2>No services found for the selected category.</h2>
        </div>
      </>
    );
  }
  const { subServices } = selectedService;
  return (
    <>
      <NavBar />
      <div>
        <img src={selectedService.hero} alt={selectedService.type} className="w-full lg:h-screen"/>
      </div>
      <div className="p-5 md:p-12  max-w-7xl mx-auto">
      <div className="p-5 my-8">
        <h2 className="text-2xl md:text-4xl font-bold text-center text-primary uppercase">our Services</h2>
      </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {subServices.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              link={service.link}
              description={service.description}
              price={service.price}
              image={service.img}
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Services;
