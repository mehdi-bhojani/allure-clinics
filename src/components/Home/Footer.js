import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { SocialIcon } from "react-social-icons";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer pt-24 max-w-full bg-gray-100 py-30">
          <div>
            <h1 className="text-5xl lg:ml-11 text-white px-12 pt-12 max-w-[850px] leading-relaxed">
              Ready for a transformative self-care experience?
            </h1>
          </div>
          {/* Top area: Blocks */}
          <div className="grid sm:grid-cols-12 gap-5 cta min-h-[350px] -mt-10">
            {/* 1st block */}
            <div className="flex items-end col-span-6 md:col-span-6 lg:col-span-3 ml-7 mx-auto uppercase font-light  py-8 md:py-12  p-12">
              <ul className="text-md">
                <li className="mb-2">
                  <HashLink
                    to="#"
                    className="text-white hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out"
                  >
                    Home
                  </HashLink>
                </li>
                <li className="mb-2">
                  <HashLink
                    to="#"
                    className="text-white hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out"
                  >
                    About Us
                  </HashLink>
                </li>
                <li className="mb-2">
                  <HashLink
                    to="#"
                    className="text-white hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out"
                  >
                    Services
                  </HashLink>
                </li>
                <li className="mb-2">
                  <HashLink
                    to="#"
                    className="text-white hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out"
                  >
                    Specialists
                  </HashLink>
                </li>
              </ul>
            </div>
            {/* 2nd block */}
            <div className="flex items-end col-span-6 md:col-span-6 lg:col-span-3 ml-7 mx-auto uppercase font-light  py-8 md:py-12  p-12">
              <ul className="text-md">
                <li className="mb-2">
                  <HashLink
                    to="#"
                    className="text-white hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out"
                  >
                    Testimonials
                  </HashLink>
                </li>
                <li className="mb-2">
                  <HashLink
                    to="#"
                    className="text-white hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out"
                  >
                    Appointment
                  </HashLink>
                </li>
                <li className="mb-2">
                  <HashLink
                    to="#"
                    className="text-white hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out"
                  >
                    Contacts
                  </HashLink>
                </li>
                <li className="mb-2">
                  <HashLink
                    to="#"
                    className="text-white hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out"
                  >
                    <br />
                  </HashLink>
                </li>
              </ul>
            </div>

            {/* 3rd block */}
            <div className="col-span-6 md:col-span-6 lg:col-span-3 mx-auto py-8 md:py-12 p-12 flex flex-col justify-end">
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
            <div className="col-span-12 text-center mx-auto lg:col-span-3">
              <div>
                <Link to={"/"}>
                  <img
                    src="/logo.png"
                    alt="logo"
                    className="h-[350px] mx-auto"
                  />
                </Link>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center md:justify-between justify-center mx-auto px-4 bg-black">
            <div className="w-full px-8 mx-auto text-center py-2 flex justify-between">
            <div className="flex justify-start gap-5">
            <div>
              <HashLink to="#" className="text-white uppercase font-light text-sm">
                Privacy Policy
              </HashLink>
            </div>
            <div>
              <HashLink to="#" className="text-white uppercase font-light text-sm">
                Terms & Condition
              </HashLink>
            </div>
            </div>
            <div>
              <HashLink to="#" className="text-white uppercase font-light text-sm">
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
