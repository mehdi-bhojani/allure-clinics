import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import Testimonials from "../Home/TestimonialSlider";
import Footer from "../Home/Footer";
import { Link } from "react-router-dom";
// import SkinService from '../../shared/SkinServices.json'

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
      <div className="flex flex-col md:flex-row items-start md:items-center space-y-6 md:space-y-0 md:space-x-10 md:px-12 md:py-24 ">
        {/* Service Image */}
        <img
          src={service.img}
          alt={service.title}
          className="w-full md:w-1/2 rounded-lg shadow-md my-6"
        />

        {/* Service Details */}
        <div className="space-y-1 p-5 flex flex-col gap-4 items-center justify-center md:items-start">
          <h1 className="text-4xl font-bold">{service.title}</h1>
          <p className="text-gray-700 break-words">{service.description}</p>
          <Link to={"/#book"} className="text-white my-5">
            <button className="bg-primary p-3 rounded-xl">
              Book an Appointment Now
            </button>
          </Link>
        </div>
      </div>

      {/* Testimonials Section with Carousel */}
      <Testimonials />
      <Footer />
    </div>
  );
};

export default ServiceDetail;
