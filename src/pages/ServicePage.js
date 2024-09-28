import React, { useState, useEffect } from 'react';
import ServiceDetail from '../components/Services/ServiceDetail';
import NavBar from '../components/Navbar/NavBar';
import { useParams } from 'react-router-dom';
import theServices from '../shared/SkinServices.json';
import ImageLoading from '../components/loading/imageLoading';
// import Footer from '../components/Footer';

const ServicePage = () => {
  const { serviceType } = useParams();
  const [serviceData, setServiceData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const findSubServiceByLink = (link) => {
      for (const service of theServices) {
        for (const subService of service.subServices) {
          if (subService.link.includes(link)) {
            return subService;
          }
        }
      }
      return null;
    };

    const fetchServiceData = () => {
      setLoading(true);
      try {
        const data = findSubServiceByLink(serviceType);
        if (data) {
          setServiceData(data);
        } else {
          setError('Service not found');
        }
      } catch (err) {
        setError('An error occurred while fetching service data');
      } finally {
        setLoading(false);
      }
    };

    fetchServiceData();
  }, [serviceType]);

  if (loading) {
    return (
      <div className="w-full">
        <div><ImageLoading /> </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full">
        <NavBar />
        <div>Error: {error}</div>
      </div>
    );
  }

  return (
    <div className="w-full">
      <NavBar />
      {serviceData ? (
        <ServiceDetail service={serviceData} />
      ) : (
        <div>No service data available</div>
      )}
    </div>
  );
};

export default ServicePage;