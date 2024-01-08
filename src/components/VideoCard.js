import React from "react";

const VideoCard = ({ data }) => {
  const snippet = data?.snippet;
  // console.log(snippet);
  const statistics = data?.statistics;

  return (
    <div className="w-96 m-2 px-3 shadow-lg rounded-lg">
      <img
        className="rounded-lg"
        src={snippet?.thumbnails?.high?.url}
        alt="img"
      />
      <h3 className="font-bold">{snippet?.title}</h3>
      <h2 className="mt-1 font-extrabold">{snippet?.channelTitle}</h2>
      <h4 className="m">{statistics?.viewCount} views</h4>
    </div>
  );
};

export default VideoCard;
