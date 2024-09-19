import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({ title, description, link, image }) => {
  return (
    <div className="w-full rounded overflow-hidden shadow-lg">
      <Link to={`/service-detail/${title}`}>
        <img className="w-full h-[300px] object-cover object-center" src={image} alt={title} />
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
      <Link to={`/service-detail/${title}`}>
        <span className="inline-block bg-primary text-white font-semibold rounded-sm px-3 py-1 text-sm">
          Learn More
        </span>
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
