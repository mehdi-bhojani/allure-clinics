import React from "react";
import JourneyCard from "./Home/JourneyCard";
import WhatWeOffer from "./Home/WhatWeOffer";
import SheduleAppointment from "./Home/SheduleAppointment";
import SpecialistCard from "./Home/SpecialistCard";
import TestimonialSlider from "./Home/TestimonialSlider";
import Footer from "./Home/Footer";
import { MapPin, Share2 } from "lucide-react";
import { SocialIcon } from "react-social-icons";
import FAQAccordion from "./Home/FAQAccordion";

function Section2() {
  const cardsData = [
    {
      id: 1,
      img: "/Journey.jpeg",
      title: "Our Journey",
      getId: "About",
      description: (
        <p className="text-white md:mb-6 md:leading-loose">
          At Allure Clinic, we pride ourselves on delivering exceptional beauty
          and wellness services. Our team of highly skilled and experienced
          doctors is dedicated to helping you look and feel your best. With
          cutting-edge techniques and personalized care, we ensure that each
          patient receives the highest standard of treatment in a comfortable,
          welcoming environment. At Allure Clinic, your beauty is our passion.
        </p>
      ),
    },
    {
      id: 2,
      img: "/Goal.jpeg",
      title: "Our Goals",
      getId: "",
      description: (
        <p className="text-white md:mb-6 md:leading-loose">
          At Allure Clinic, we have one clear goal that guides everything we do:
          to help our clients embrace their true beauty, both inside and out.
          Our journey started with a simple idea—to create a space where
          advanced beauty treatments meet personalized care, ensuring that every
          individual feels valued and confident.
          <br /> Our goal is to constantly push the boundaries of aesthetic
          excellence, combining the latest technology with the artistry of our
          expert doctors. We strive to make beauty accessible, sustainable, and
          above all, a transformative experience. At Allure Clinic, our aim is
          to help you reveal the best version of yourself, every single day.
        </p>
      ),
    },
    {
      id: 3,
      img: "/contact.jpg",
      title: "Contact Us",
      getId: "contact",
      description: (
        <>
          <div
            className="text-white md:mb-6 md:leading-loose flex flex-col gap-2"
            id="contact"
          >
            <span className="flex gap-1 items-center">
              {" "}
              <MapPin />{" "}
              <h3 className="uppercase font-bold md:text-xl">Address :</h3>
            </span>{" "}
            <div>
              <iframe
                className="md:min-h-[300px]"
                title="Allure Clinics Location"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d20393.028519554056!2d67.068159!3d24.7929359!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd32f01550903e53%3A0x7d6fc369002fc9ab!2sAllure%20Clinics!5e1!3m2!1sen!2s!4v1727430759907!5m2!1sen!2s"
                style={{ border: 0, width: "-webkit-fill-available" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            1st Floor, Ittehad Tower 1-C, Main Khayaban-e-Ittehad road, Corner
            of Bukhari Commercial Lane 05, DHA Phase 6 Karachi.
          </div>
          <span className="mt-8 flex gap-1 items-center text-white">
            {" "}
            <Share2 />
            <h3 className="  uppercase font-bold md:text-xl">Connect Us :</h3>
          </span>
          <div className=" mx-auto py-4 flex flex-col justify-end">
            <ul className="text-xs flex gap-5">
              <li className="mb-2">
                <SocialIcon
                  url="https://www.facebook.com/theallureclinics"
                  target="_blank"
                  bgColor={"transparent"}
                  className=" border border-primary bg-primary hover:opacity-70  hover:text-white rounded-lg p-0 "
                />
              </li>
              <li className="mb-2">
                <SocialIcon
                  url="https://www.instagram.com/allureclinics_?igsh=bG1lbjQ0cDVudHVj"
                  target="_blank"
                  bgColor={"transparent"}
                  className=" border border-primary bg-primary hover:opacity-70  hover:text-white rounded-lg p-0 "
                />
              </li>
            </ul>
            <br />
          </div>
        </>
      ),
    },
  ];

  return (
    <div
      className="w-full bg-[#9E8E86] relative min-h-screen"
      style={{
        backgroundImage: `url('/Leaves.png')`,
        backgroundSize: "contain",
        backgroundPosition: "center",
      }}
    >
      <div
        className="flex flex-col pt-12 gap-6 p-5 md:pt-24 md:gap-12 md:p-12"
        id="about"
      >
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
        <FAQAccordion />
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
