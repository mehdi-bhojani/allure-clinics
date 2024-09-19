import React from 'react';
import ServiceDetail from '../components/Services/ServiceDetail';
import NavBar from '../components/Navbar/NavBar';
import { useParams } from 'react-router-dom';
import theServices from '../shared/SkinServices.json';
// import Footer from '../components/Footer';

const ServicePage = () => {
  const {serviceType} = useParams();
  console.log(serviceType);
  function findSubServiceByLink(link) {
    // Loop through each service
    for (const service of theServices) {
      // Loop through each sub-service
      for (const subService of service.subServices) {
        if (subService.link.includes(link)) {
          return subService; // Return the matched sub-service
        }
      }
    }
    return null; // Return null if no sub-service is found
  }
  
  // Example usage:
  const serviceData = findSubServiceByLink("root-canal-treatment");
  console.log(serviceData);

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
