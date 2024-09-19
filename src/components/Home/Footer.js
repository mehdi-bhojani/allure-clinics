import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { SocialIcon } from "react-social-icons";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer pt-24 max-w-full bg-gray-100 py-30">
          <div className="">
            <h1 className="text-2xl md:text-5xl lg:ml-11 text-white px-12 pt-12 max-w-[850px] leading-relaxed">
              Ready for a transformative self-care experience?
            </h1>
          </div>
          {/* Top area: Blocks */}
          <div className="flex p-5 pt-20 md:pt-40 md:mx-auto flex-col md:grid md:grid-cols-12 md:gap-5 cta min-h-[350px] lg:-mt-10">
            {/* 1st block */}
            <div className="flex md:items-end col-span-12 md:col-span-4 lg:col-span-3 md:ml-7 md:mx-auto uppercase font-light  md:p-5 lg:p-12">
              <ul className="text-md">
                <li className="mb-2">
                  <HashLink
                    to="/"
                    className="text-white hover:text-primary hover:tracking-wider transition duration-250 ease-in-out"
                  >
                    Home
                  </HashLink>
                </li>
                <li className="mb-2">
                  <HashLink
                    to="/#About"
                    className="text-white hover:text-primary hover:tracking-wider transition duration-250 ease-in-out"
                  >
                    About Us
                  </HashLink>
                </li>
                <li className="mb-2">
                  <HashLink
                    to="/#services"
                    className="text-white hover:text-primary hover:tracking-wider transition duration-250 ease-in-out"
                  >
                    Services
                  </HashLink>
                </li>
                <li className="mb-2">
                  <HashLink
                    to="/#specialists"
                    className="text-white hover:text-primary hover:tracking-wider transition duration-250 ease-in-out"
                  >
                    Specialists
                  </HashLink>
                </li>
              </ul>
            </div>
            {/* 2nd block */}
            <div className="flex md:items-end col-span-12 md:col-span-4 lg:col-span-3 md:ml-7 md:mx-auto uppercase font-light md:p-5 lg:p-12">
              <ul className="text-md">
                <li className="mb-2">
                  <HashLink
                    to="/#testimonials"
                    className="text-white hover:text-primary hover:tracking-wider transition duration-250 ease-in-out"
                  >
                    Testimonials
                  </HashLink>
                </li>
                <li className="mb-2">
                  <HashLink
                    to="/#book"
                    className="text-white hover:text-primary hover:tracking-wider transition duration-250 ease-in-out"
                  >
                    Appointment
                  </HashLink>
                </li>
                <li className="mb-2">
                  <HashLink
                    to="/#contact"
                    className="text-white hover:text-primary hover:tracking-wider transition duration-250 ease-in-out"
                  >
                    Contacts
                  </HashLink>
                </li>
                <li className="mb-2 hidden md:block">
                  <HashLink
                    to="#"
                    className="text-white hover:text-primary hover:tracking-wider transition duration-250 ease-in-out"
                  >
                    <br />
                  </HashLink>
                </li>
              </ul>
            </div>

            {/* 3rd block */}
            <div className="col-span-12 md:col-span-4 lg:col-span-3 md:mx-automd:p-5 lg:p-12 flex flex-col md:justify-end justify-start">
              <h6 className="text-white font-light mb-4 uppercase">Social</h6>
              <ul className="text-xs flex gap-5">
                <li className="mb-2">
                  <SocialIcon
                    url="https://facebook.com/"
                    bgColor={"transparent"}
                    className="border border-white rounded-lg p-0 "
                  />
                </li>
                <li className="mb-2">
                  <SocialIcon
                    url="https://instagram.com/"
                    bgColor={"transparent"}
                    className="border border-white rounded-lg p-0 "
                  />
                </li>
              </ul>
              <br />
            </div>

            {/* 4th block */}
            <div className="hidden md:block col-span-12 text-center mx-auto lg:col-span-3">
              <div>
                <Link to={"/"}>
                  <img
                    src="/logo.png"
                    alt="logo"
                    className="md:h-[100px] lg:h-[350px] mx-auto"
                  />
                </Link>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center md:justify-between justify-center mx-auto px-4 bg-black">
            <div className="w-full px-8 mx-auto text-center py-2 flex flex-col md:flex-row justify-between">
            <div className="flex justify-start gap-5">
            <div>
              <HashLink to="#" className="text-white uppercase font-light text-[11px] md:text-sm">
                Privacy Policy
              </HashLink>
            </div>
            <div>
              <HashLink to="#" className="text-white uppercase font-light text-[11px] md:text-sm">
                Terms & Condition
              </HashLink>
            </div>
            </div>
            <div>
              <HashLink to="#" className="text-white uppercase font-light text-xs md:text-sm">
              &copy; Copyright Allure clinic
              </HashLink>
            </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
