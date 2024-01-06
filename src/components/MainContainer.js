import React from "react";
import ButtomList from "./ButtomList";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
  return (
    <div className="col-span-10">
      <ButtomList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
