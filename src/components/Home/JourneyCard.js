import React from 'react';

function JourneyCard(props) {
  return (
    <div className="relative w-full mx-auto max-w-6xl rounded-xl overflow-hidden shadow-lg" id={props.title==="Our Journey"?"About":"contact"}>
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
      <div className="relative p-5 md:p-12 md:min-h-[350px] flex flex-col gap-5">
        <h2 className="text-3xl text-center md:text-left md:text-6xl font-bold text-primary">{props.title}</h2>
        <div>
        <div className='text-center md:text-left' >
        {props.description}
        </div>
       </div>
        </div>
      </div>
    
  );
}

export default JourneyCard;
