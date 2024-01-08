import React from "react";
import { FaRegUserCircle } from "react-icons/fa";

const Comment = ({ data }) => {
  return (
    <div className="flex items-center mt-3  px-2 mx-2 bg-gray-300 rounded-md ">
      <FaRegUserCircle className="text-3xl w-9" />
      <div className="px-4">
        <h1 className="font-bold">{data.name}</h1>
        <h1 className="font-medium">{data.text}</h1>
      </div>
    </div>
  );
};

export default Comment;
