import React, { useEffect, useState } from "react";
import { SocialIcon } from "react-social-icons";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import { ChevronLeft, ChevronRight } from "lucide-react";

const specialists = [
  {
    image: "/specialist1.jpg", // Replace with the actual image URL
    names: "Dr Azam Virk",
    specialization: "Aesthetic & Dermatology Consultant",
    qualifications: [
      "MBBS (DUHS), MSPH (JSMU)",
      "Professional Diploma in Facial Aesthetic & Medicine from Canadian Academy of Aesthetic Medicine",
    ],
    socialProfiles: [
      { platform: "facebook", link: "https://facebook.com/example" }, // Update with actual links
      { platform: "instagram", link: "https://instagram.com/example" },
    ],
  },
  {
    image: "/specialist2.jpg",
    names: "Dr Madiha Shams",
    specialization: "Consultant Aesthetic Physician ",
    qualifications: [
      "BDS (DUHS), Certified Facial Aesthetics CPD (UK), Professional Diploma in Facial Aesthetics AACME",
    ],
    socialProfiles: [
      { platform: "facebook", link: "https://facebook.com/example" }, // Update with actual links
      { platform: "instagram", link: "https://instagram.com/example" },
    ],
  },
  {
    image: "/specialist3.jpg",
    names: "Dr Anam Iqbal",
    specialization: "Cosmetic Dentist & Prosthodontist",
    qualifications: ["BDS, MDS (Prostho) DUHS, C-Ortho, C-Implant"],
    socialProfiles: [
      { platform: "facebook", link: "https://facebook.com/example" }, // Update with actual links
      { platform: "instagram", link: "https://instagram.com/example" },
    ],
  },
  {
    image: "/specialist4.jpg",
    names: "Dr Gulam Shabbir",
    specialization: "Plastic Surgeon",
    qualifications: [
      "Consultant Professor MD, MRCPS (Glasgow), FCPS (Plastic Surgery)",
    ],
    socialProfiles: [
      { platform: "facebook", link: "https://facebook.com/example" }, // Update with actual links
      { platform: "instagram", link: "https://instagram.com/example" },
    ],
  },
  {
    image: "/specialist5.jpg",
    names: "Dr Ijaz Ahmed",
    specialization: "Skin Specialist",
    qualifications: [
      "MBBS, MCPS, FCPS (Dermatology)",
      "Professor & Incharge Dept. of Dermatology, Ziauddin University Karachi.",
    ],
    socialProfiles: [
      { platform: "facebook", link: "https://facebook.com/example" }, // Update with actual links
      { platform: "instagram", link: "https://instagram.com/example" },
    ],
  },
  // Add more specialists as needed
];

const SpecialistCard = () => {
  // Adjust slide width based on screen size
  const [slidePercentage, setSlidePercentage] = useState(33.33); // Default for desktop
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
    <div className="text-center p-5 md:p-12 relative specialists" id={'specialists'}>
      <h2 className="text-4xl text-[#E3B25A] mb-8">Our Specialist</h2>
      <div className="max-w-5xl mx-auto">
        <Carousel
          showArrows={true}
          infiniteLoop={true}
          centerMode={true}
          centerSlidePercentage={slidePercentage} // Show 3 items per slide
          showThumbs={false}
          showStatus={false}
          showIndicators={false}
          swipeable={true}
          emulateTouch={true}
          renderArrowPrev={(onClickHandler, hasPrev, label) =>
            hasPrev && (
              <button
                type="button"
                onClick={onClickHandler}
                title={label}
                style={{ left: 15 }}
                className="absolute top-[13rem] -left-10 md:left-0 z-10 p-2 bg-[#E3B25A] rounded-full hover:bg-[#c89f45] focus:outline-none "
              >
                <ChevronLeft className="text-white text-xl" />
              </button>
            )
          }
          // Custom arrow for next slide
          renderArrowNext={(onClickHandler, hasNext, label) =>
            hasNext && (
              <button
                type="button"
                onClick={onClickHandler}
                title={label}
                style={{ right: 15 }}
                className="absolute top-[13rem] -right-10 md:right-0 z-10 p-2 bg-[#E3B25A] rounded-full hover:bg-[#c89f45] focus:outline-none "
              >
                <ChevronRight className="text-white text-xl" />
              </button>
            )
          }
        >
          {specialists.map((specialist, index) => (
            <div
              key={index}
              className="bg-[#231F20] rounded-lg p-4 shadow-lg w-full md:w-72 bg-opacity-[58%] md:mx-4 h-[100%] flex flex-col justify-around"
            >
              <div className="specialists-img flex justify-center mb-4">
                <img
                  src={specialist.image}
                  alt={`Specialist ${index + 1}`}
                  width={500}
                  height={500}
                  className="object-cover object-top rounded-full"
                />
              </div>
              <h3 className="text-xl text-[#E3B25A] font-bold mb-2">
                {specialist.names}
              </h3>
              <p className="text-lg text-white mb-2">
                {specialist.specialization}
              </p>
              <ul className="text-center text-sm mb-4 space-y-2">
                {specialist.qualifications.map((qualification, i) => (
                  <li key={i} className="flex items-center justify-center">
                    <p className="text-white text-center text-sm">
                      {qualification}
                    </p>
                  </li>
                ))}
              </ul>
              <div className="border-t border-[#E3B25A] py-4 flex justify-center space-x-4">
                {specialist.socialProfiles.map((profile, i) => (
                  <SocialIcon
                    key={i}
                    url={profile.link}
                    style={{ height: 30, width: 30 }} // Customize the icon size
                    fgColor="#ffffff" // Icon color
                    bgColor="transparent"
                    className="border border-white rounded-lg p-0"
                  />
                ))}
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default SpecialistCard;
