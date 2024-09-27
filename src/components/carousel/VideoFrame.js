import React, { useState } from "react";
import ReactPlayer from "react-player";
import "./VideoFrame.css";

const VideoFrame = ({ url }) => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleReady = () => {
    setLoading(false);
  };

  const handleError = (err) => {
    setError(err.toString());
  };

  return (
    <div className="video-frame-container">
      <div className="video-frame">
        {loading && (
          <div className="spinner-error-container">
            <img src="/logo.svg" alt="Banner"  />
          </div>
        )}
        {error && (
          <div className="spinner-error-container">
          <p className="error-message">Error: {error}</p>
          </div>
        )}
        <ReactPlayer
          url={url}
          playing={true}  // Autoplay enabled
          controls={false} // Show video controls
          muted={true}    // Mute the video to allow autoplay
          width="100%"    // Set video width
          height="100%"   // Set video height
          loop={true}     // Loop video
          onError={handleError}
          onReady={handleReady}
        />
      </div>
    </div>
  );
};

export default VideoFrame;
