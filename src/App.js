import React, { useEffect } from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";
import './index.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
// All pages
import Home from './pages/Home';
import Contact from './pages/Contact';
import DemoProduct from './pages/DemoProduct';

import {useDocTitle} from './components/CustomHook';
import ScrollToTop from './components/ScrollToTop';
import Services from './pages/Services';
import ServicePage from './pages/ServicePage';
import { Toaster } from 'react-hot-toast';

function App() {
  useEffect(() => {
    const aos_init = () => {
      AOS.init({
        once: true,
        duration: 1000,
        easing: 'ease-out-cubic',
      });
    }

    window.addEventListener('load', () => {
      aos_init();
    });
  }, []);

  useDocTitle("Allure Clinics");

  return (
    <>
      <Toaster />
      <Router>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/get-demo" element={<DemoProduct />} /> 
            <Route path="/services/:category" element={<Services/>} /> {/* Dynamic route for services */}
            <Route path="/service-detail/:serviceType" element={<ServicePage/>} /> {/* Dynamic route for services */}
          </Routes>
        </ScrollToTop>
      </Router>
      <script src="../path/to/flowbite/dist/flowbite.min.js"></script>
    </>
  );
}


export default App;
