import React, { useEffect } from "react";
import { FaRegUserCircle } from "react-icons/fa";

const LiveComment = ({ data }) => {
  return (
    <div className="flex m-2 bg-white p-2 rounded-md">
      <FaRegUserCircle className="text-2xl" />
      <span className="px-2 font-bold">{data.name} :</span>
      <span>{data.message}</span>
    </div>
  );
};

export default LiveComment;
