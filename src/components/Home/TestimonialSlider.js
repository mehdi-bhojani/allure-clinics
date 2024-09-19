import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import { Carousel } from "react-responsive-carousel";

// Dummy data array
const testimonialsData = [
  {
    id: 1,
    name: "William Smith",
    quote:
      "I've also tried their HydraFacial and it was incredible. My skin felt so cleansed and rejuvenated afterwards. ",
  },
  {
    id: 2,
    name: "Jane Doe",
    quote:
      "Absolutely wonderful experience. The staff was so professional and friendly, and the services are top-notch!",
  },
  {
    id: 3,
    name: "John Carter",
    quote:
      "A perfect place to relax and get pampered. The facial treatment was soothing, and the ambiance was excellent.",
  },
  {
    id: 4,
    name: "Sarah Johnson",
    quote:
      "Amazing service! My skin has never felt better, and the team was so friendly. Will definitely return!",
  },
];

const Testimonials = () => {
  return (
    <div className="py-12 relative testimonial" id={'testimonials'}>
      <h2 className="text-primary text-4xl text-center mb-8">Testimonials</h2>
      <div
        className="px-6 min-h-[300px] flex flex-col pt-5 items-center "
        style={{
          background: `url('/Vector 7.png')`,
          backgroundSize: "100% 100%",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div>
          <img
            src="/Ice crystals-01.png"
            alt="Quote"
            className="w-8 h-8 mx-auto mb-4"
          />
        </div>
        <Carousel
          showThumbs={false}
          showStatus={false}
          showArrows={false}
          showIndicators={false}
          // autoPlay={true}
          infiniteLoop={true}
          interval={5000}
        >
          {testimonialsData.map((testimonial) => (
            <div
              key={testimonial.id}
              className="flex flex-col items-center justify-center text-center w-full"
            >
              <p className="text-xl text-white font-medium mb-1">
                "{testimonial.quote}"
              </p>
              <h3 className="text-white text-sm font-light">
                {testimonial.name}
              </h3>
            </div>
          ))}
        </Carousel>
      </div>
      <div>
          <img src="/Vector.png" alt="Quote" className="w-20 h-20 float-right absolute -bottom-5 right-10" />
      </div>
    </div>
  );
};

export default Testimonials;
