import React from "react";
import Sidebar from "./Sidebar";
import MainContainer from "./MainContainer";
import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <div className="grid grid-flow-col">
      <Sidebar />
      {/* according to the url this compoent change for this use outlet*/}
      <Outlet />
    </div>
  );
};

export default Body;
