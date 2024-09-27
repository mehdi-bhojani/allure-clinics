import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

const SheduleAppointment = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_8rrpypa",
        "template_fe9n29p",
        form.current,
        "coPPva6G8gGC1FAU6"
      )
      .then(
        (result) => {
          // console.log(result.text);
          toast.success("Request sent successfully!");
          form.current.reset();
        },
        (error) => {
          // console.log(error.text);
          toast.error("Failed to send request");
        }
      );
  };

  return (
    <div className="p-5 md:p-24 z-10" id="book">
      <div className=" w-full">
        <h2 className="text-4xl text-primary mb-8 text-center md:text-left">
          Schedule an Appointment
        </h2>
        <div className="flex max-h-[500px] justify-between gap-5 items-stretch h-full">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="h-auto w-full md:w-1/2 flex flex-col justify-between"
          >
            {/* Use a flex container with 'space-y-4' for consistent spacing */}
            <div className="flex flex-1 flex-col justify-between h-full space-y-4">
              <div className="flex flex-grow">
                <input
                  type="text"
                  name="name"
                  placeholder="NAME"
                  className="w-full p-3 bg-[#231F20] text-white font-light focus:outline-none text-xs h-full"
                  required
                />
              </div>
              <div className="flex flex-grow">
                <input
                  type="email"
                  name="email"
                  placeholder="EMAIL ADDRESS"
                  className="w-full p-3 bg-[#231F20] text-white font-light focus:outline-none text-xs h-full"
                  required
                />
              </div>
              <div className="flex flex-grow">
                <input
                  type="tel"
                  name="phone"
                  placeholder="PHONE NUMBER"
                  className="w-full p-3 bg-[#231F20] text-white font-light focus:outline-none text-xs h-full"
                  required
                />
              </div>
              <div className="flex flex-grow">
                <input
                  type="date"
                  name="date"
                  placeholder="DATE"
                  className="w-full p-3 bg-[#231F20] text-white font-light focus:outline-none text-xs h-full"
                  required
                />
              </div>
              <div className="flex flex-grow">
                <textarea
                  name="message"
                  placeholder="MESSAGE"
                  className="w-full p-3 bg-[#231F20] text-white font-light focus:outline-none text-sm resize-none h-40"
                  required
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-primary text-black p-3 font-light rounded-md shadow-md hover:opacity-80 transition"
                >
                  Book an Appointment
                </button>
              </div>
            </div>
          </form>
          <div className="w-1/2 flex-1 max-h-[500px] overflow-hidden hidden md:block">
            <img
              src="/appointment.png"
              alt="appointment"
              className="object-cover object-center min-h-screen md:min-h-fit"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SheduleAppointment;
