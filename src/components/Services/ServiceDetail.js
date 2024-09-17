import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import Testimonials from "../Home/TestimonialSlider";
import Footer from "../Home/Footer";

const ServiceDetail = ({ service, testimonials }) => {
  return (
    <div
      className="pt-12 bg-[#9E8E86] w-full"
      style={{
        backgroundImage: "url('/Leaves.png')",
        backgroundSize: "contain",
      }}
    >
      {/* Service Info Section */}
      <div className="flex flex-col md:flex-row items-start md:items-center space-y-6 md:space-y-0 md:space-x-10 px-12 py-24 ">
        {/* Service Image */}
        <img
          src={service.imageUrl}
          alt={service.title}
          className="w-full md:w-1/2 rounded-lg shadow-md my-6"
        />

        {/* Service Details */}
        <div className="space-y-5">
          <h1 className="text-4xl font-bold">{service.title}</h1>
          <p className="text-white my-5 text-xl">
            <span className="bg-primary p-3 rounded-lg">{service.price}</span>
          </p>
          <p className="text-gray-700">{service.description}</p>
        </div>
      </div>

      {/* Testimonials Section with Carousel */}
      <Testimonials />
      <Footer />
    </div>
  );
};

export default ServiceDetail;
