import React from 'react';

function JourneyCard(props) {
  return (
    <div className="relative w-full mx-auto max-w-6xl rounded-xl overflow-hidden shadow-lg">
      {/* Background Image */}
      <div
        className="absolute w-full h-full inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${props.img})`, // Correct path without /public
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent "></div>
      </div>

      {/* Content */}
      <div className="relative p-12 min-h-[350px] flex flex-col gap-5">
        <h2 className="text-6xl font-bold text-primary">{props.title}</h2>
        <div>
        <p className="mt-4 text-white w-1/2 float-right">
        {props.description}
       </p>
        </div>
      </div>
    </div>
  );
}

export default JourneyCard;
