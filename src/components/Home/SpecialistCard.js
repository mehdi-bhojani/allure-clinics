import React from "react";
import { Link } from "react-router-dom"; // Make sure to import Link from your routing library
import { SocialIcon } from "react-social-icons";

const specialists = [
  {
    image: "/specialist1.jpg", // Replace with the actual image URL
    qualifications: [
      "MBA, put any qualification here",
      "MBA, put any qualification here",
      "MBA, put any qualification here",
      "MBA, put any qualification here",
    ],
    socialProfiles: [
      { platform: "facebook", link: "https://facebook.com/example" }, // Update with actual links
      { platform: "instagram", link: "https://instagram.com/example" },
    ],
  },
  {
    image: "/specialist2.jpg",
    qualifications: [
      "MBA, put any qualification here",
      "MBA, put any qualification here",
      "MBA, put any qualification here",
      "MBA, put any qualification here",
    ],
    socialProfiles: [
      { platform: "facebook", link: "https://facebook.com/example" }, // Update with actual links
      { platform: "instagram", link: "https://instagram.com/example" },
    ],
  },
  {
    image: "/specialist3.jpg",
    qualifications: [
      "MBA, put any qualification here",
      "MBA, put any qualification here",
      "MBA, put any qualification here",
      "MBA, put any qualification here",
    ],
    socialProfiles: [
      { platform: "facebook", link: "https://facebook.com/example" }, // Update with actual links
      { platform: "instagram", link: "https://instagram.com/example" },
    ],
  },
];

const SpecialistCard = () => {
  return (
    <div className="text-center py-12 ">
      <h2 className="text-4xl text-[#E3B25A] mb-8">Our Specialist</h2>
      <div className="flex justify-center space-x-6">
        {specialists.map((specialist, index) => (
          <div
            key={index}
            className="bg-[#231F20] rounded-lg p-4 shadow-lg w-72 bg-opacity-[58%]"
          >
            <div className="w-full flex justify-center mb-4">
              <img
                src={specialist.image}
                alt="Specialist"
                className="w-24 h-24 rounded-full object-cover object-top"
              />
            </div>
            <ul className="text-left text-sm mb-4 space-y-2">
              {specialist.qualifications.map((qualification, i) => (
                <li key={i} className="flex items-center space-x-2">
                  <span className="text-primary">✔️</span>
                  <span className="text-white">{qualification}</span>
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
                  className="border border-white rounded-lg p-0" // Background color (transparent for no background)
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpecialistCard;
