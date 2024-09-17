import React from 'react';
import ServiceDetail from '../components/Services/ServiceDetail';
import NavBar from '../components/Navbar/NavBar';
// import Footer from '../components/Footer';

const ServicePage = () => {
  const serviceData = {
    title: "Face PRP",
    price: "PKR 10,000.00",
    description:
      "Face PRP, also known as the 'vampire facial,' involves using the patient’s own blood to extract platelet-rich plasma.",
    imageUrl:
      "/PHOTO-2024-07-13-11-35-34.jpg", // Replace with actual image URL
  };

  const testimonials = [
    {
      name: "Muhammad Asif",
      testimonial:
        "I have just had a hair transplant done at this clinic in Mid Jan 2023. Very hServicePagey with the results so far. I have found Dr. Saqib to be a very competent and professional surgeon. Charges are very reasonable and a good level of hygiene standards maintained.",
      avatar: "/placeholder-men.png", // Placeholder avatar URL
    },
    {
      name: "Ayesha Khan",
      testimonial:
        "The clinic was amazing! The staff was friendly, and the service was top-notch. I got exactly what I wanted and more. Highly recommended.",
      avatar: "/placeholder-women.png", // Placeholder avatar URL
    },
    {
      name: "Ali Raza",
      testimonial:
        "Dr. Saqib and his team are the best. The procedure was smooth, and I couldn’t be hServicePageier with the results. My skin looks and feels amazing.",
      avatar: "/placeholder-men.png", // Placeholder avatar URL
    },
  ];

  return (
    <dic className={'w-full'}>
      <NavBar />
      <ServiceDetail service={serviceData} testimonials={testimonials} />
    </dic>
  );
};

export default ServicePage;
