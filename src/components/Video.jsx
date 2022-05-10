import React from "react";

const Video = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold">A GLANCE AT OUR PROJECT</h1>
      <br/>
      <br/>
      <iframe style={{borderRadius: "80px"}}
        width="960"
        height="500"
        src="https://www.youtube.com/embed/EzMfsPcdJ7w"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Video;
