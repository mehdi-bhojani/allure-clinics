import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import "react-lazy-load-image-component/src/effects/blur.css";

function HorizontalCard(props) {
  const [loading, setLoading] = React.useState(true);

  const handleLoadComplete = () => {
    // console.log("Image has been loaded successfully!");
    setLoading(false);
  };

  return (
    <div>
      <div className="max-w-sm bg-[#AE9D95] rounded-lg shadow-lg w-full md:w-72 bg-opacity-[58%] md:mx-4 md:h-[100%]">
        <Link to={props.link}>
        <div className="h-[300px] bg-gray-300 animate-pulse relative">
          {loading && (
              <img src="/logo.svg" alt="Loading placeholder" className="h-full w-full object-cover absolute" />
              )}
              <LazyLoadImage
              className={`rounded-t-lg h-[300px] object-cover ${loading ? "hidden" : "block"}`}
              src={props.img}
              alt={props.title}
              onLoad={handleLoadComplete}
              delayTime={500}
              effect="blur"
              afterLoad={handleLoadComplete} // Another prop you can try
              />
              </div>
        </Link>
        <div className="p-5">
          <Link to={props.link}>
            <h5 className="mb-2 text-xl font-light tracking-tight text-white text-center ">
              {props.title}
            </h5>
          </Link>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {props.description}
          </p>
          <Link
            to={props.link}
            className="inline-flex justify-center px-3 py-2 text-sm font-medium text-center text-black bg-primary rounded-lg hover:bg-primary focus:outline-none w-full"
          >
            Find Out More
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HorizontalCard;
