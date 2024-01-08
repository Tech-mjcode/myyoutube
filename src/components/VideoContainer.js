import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_API } from "../utils/constrants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [video, setVideo] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API);
    const jsonData = await data.json();
    setVideo(jsonData.items);
  };

  return (
    <div className="m-2 flex flex-wrap justify-center">
      {video.map((v) => (
        <Link key={v.id} to={"/watch?v=" + v.id}>
          <VideoCard data={v} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
