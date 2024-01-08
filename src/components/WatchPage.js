import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { menuClose } from "../utils/appSlice";

const WatchPage = () => {
  const [param] = useSearchParams();
  console.log(param.get("v"));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(menuClose());
  }, []);
  return (
    <div className="col-span-11 p-5 ml-8">
      <iframe
        width="700"
        height="370"
        src={"https://www.youtube.com/embed/" + param.get("v")}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default WatchPage;
