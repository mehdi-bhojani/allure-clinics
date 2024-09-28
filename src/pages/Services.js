import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import ServiceCard from "../components/Services/ServiceCard";
import theServices from "../shared/SkinServices.json";
import NavBar from "../components/Navbar/NavBar";
import Footer from "../components/Home/Footer";
import ImageLoading from "../components/loading/imageLoading";

const Services = () => {
  const { category } = useParams();
  const [selectedService, setSelectedService] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  useEffect(() => {
    window.scrollTo(0, 0);
    const findServices = () => {
      const selectedService = theServices.find(
        (service) => service.type === category
      );
      setLoading(false);
      return selectedService;
    }
    setSelectedService(findServices());
  }, [category]);
  // If no category matches, return a message or redirect
  if (loading) {
    return (
      <>
        <div >
          <ImageLoading />
        </div>
      </>
    );
  }
    
  const { subServices } = selectedService;
  return (
    <>
      <NavBar />
      <div>
        <img src={selectedService.hero} alt={selectedService.type} className="w-full lg:h-screen"/>
      </div>
      <div className="p-5 md:p-12  max-w-7xl mx-auto">
      <div className="p-5 my-8">
        <h2 className="text-2xl md:text-4xl font-bold text-center text-primary uppercase">our Services</h2>
      </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {subServices.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              link={service.link}
              description={service.description}
              price={service.price}
              image={service.img}
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Services;
