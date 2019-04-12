import React from "react";
import ReactPlayer from "react-player";

const Video = () => (
  <div className="player-wrapper">
    <ReactPlayer
      className="react-player"
      url="https://youtu.be/ao2x3sLdXOs"
      width="100%"
      height="100%"
    />
  </div>
);

export default Video;
