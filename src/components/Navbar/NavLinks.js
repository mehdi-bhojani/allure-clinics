import React from 'react';
import { HashLink } from 'react-router-hash-link';

const NavLinks = () => {
    return (
        <>
            <HashLink className="px-4  text-primary" smooth to="/#about">
                Home
            </HashLink>
            <HashLink className="px-4  text-primary" smooth to="/#services">
                About
            </HashLink>
            <HashLink className="px-4  text-primary" to="/">
                Services
            </HashLink>
            <HashLink className="px-4  text-primary" to="/contact#contact">
                FAQ
            </HashLink>
            <HashLink className="px-4  text-primary" to="/contact#contact">
                Contact Us
            </HashLink>
            <HashLink className="text-black bg-primary hover:bg-primary inline-flex items-center justify-center w-auto px-8 py-2 shadow-xl rounded-full" smooth to="/get-demo#demo">
                Book Now
            </HashLink>
        </>
    )
}

export default NavLinks;
