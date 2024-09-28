import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import "react-lazy-load-image-component/src/effects/blur.css";
const ServiceCard = ({ title, description, link, image }) => {
  return (
    <div className="w-full rounded overflow-hidden shadow-lg">
      <Link to={`/service-detail${link}`}>
        <LazyLoadImage
          effect="blur"
          className="w-[-webkit-fill-available] h-[300px] object-cover object-center "
          src={image}
          alt={title}
          width={'100%'}
        />
      </Link>
      <div className="px-6 py-4">
        <Link to={`/service-detail${link}`}>
          <div className="font-bold text-xl mb-2">{title}</div>
        </Link>
        <p className="text-gray-700 text-base wrap break-all line-clamp-2">
          {description}
        </p>
      </div>
      <div className="px-6 pt-4 pb-4">
        <Link to={`/service-detail${link}`}>
          <span className="inline-block bg-primary text-white font-semibold rounded-sm px-3 py-1 text-sm">
            Learn More
          </span>
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
