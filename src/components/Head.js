import React from "react";
import { FaAlignJustify } from "react-icons/fa6";
import { FaRegUserCircle } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { toggleSide } from "../utils/appSlice";
const Head = () => {
  const dispatch = useDispatch();
  const handleToggle = () => {
    dispatch(toggleSide());
  };
  return (
    <div className="grid grid-flow-col shadow-lg">
      <div className="col-span-1 flex p-4 items-center">
        <FaAlignJustify
          className="hover:cursor-pointer"
          onClick={() => handleToggle()}
        />
        <img
          className="h-5 ml-2"
          src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
          alt="logo"
        ></img>
      </div>
      <div className="col-span-10 p-4 ml-5">
        <input
          className="w-1/2  border-2 border-black rounded-l-full px-2 py-1"
          type="text"
        />
        <button className=" border-2 border-black rounded-r-full px-2 py-1">
          Search
        </button>
      </div>
      <div className="col-span-1 p-4">
        <FaRegUserCircle />
      </div>
    </div>
  );
};

export default Head;
