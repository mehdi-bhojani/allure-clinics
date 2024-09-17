import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({ title, description, price, image }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <Link to={`/service-detail/${title}`}>
        <img className="w-full" src={image} alt={title} />
      </Link>
      <div className="px-6 py-4">
        <Link to={`/service-detail/${title}`}>
          <div className="font-bold text-xl mb-2">{title}</div>
        </Link>
        <p className="text-gray-700 text-base wrap break-all line-clamp-2">
          {description}
        </p>
      </div>
      <div className="px-6 pt-4 pb-4">
        <span className="inline-block bg-primary text-white font-semibold rounded-sm px-3 py-1 text-sm">
          {price}
        </span>
      </div>
    </div>
  );
};

export default ServiceCard;
