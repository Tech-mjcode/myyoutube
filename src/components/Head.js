import React, { useEffect, useState } from "react";
import { FaAlignJustify } from "react-icons/fa6";
import { FaRegUserCircle } from "react-icons/fa";

import { useDispatch, useSelector } from "react-redux";
import { toggleSide } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constrants";
import { setCache } from "../utils/searchSlice";
import { Link } from "react-router-dom";

const Head = () => {
  const [searchText, setSearchText] = useState("");
  const [searchSuggestion, setSearchSuggestion] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);
  const cacheSearchData = useSelector((store) => store.searchCache);
  const dispatch = useDispatch();
  useEffect(() => {
    const timer = setTimeout(() => {
      if (cacheSearchData[searchText]) {
        setSearchSuggestion(cacheSearchData[searchText]);
      } else {
        getSearchSuggestion();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchText]);

  const getSearchSuggestion = async () => {
    const res = await fetch(YOUTUBE_SEARCH_API + searchText);
    const jsonData = await res.json();
    // console.log(jsonData[1]);
    dispatch(
      setCache({
        [searchText]: jsonData[1],
      })
    );
    setSearchSuggestion(jsonData[1]);
  };

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

        <a href="/">
          <img
            className="h-5 ml-2 hover:cursor-pointer"
            src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
            alt="logo"
          />
        </a>
      </div>
      <div className="col-span-10 p-4 ml-5">
        <div>
          <input
            className="w-1/2  border-2 border-black rounded-l-full px-2 py-1"
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            onFocus={() => setShowSuggestion(true)}
            onBlur={() => setShowSuggestion(false)}
          />
          <button className=" border-2 border-black rounded-r-full px-2 py-1">
            Search
          </button>
        </div>
        {showSuggestion && (
          <div className="bg-gray-100 w-4/12 m-2 rounded-lg px-2 absolute">
            <ul>
              {searchSuggestion.map((s) => (
                <li
                  key={s}
                  className="px-3 py-2 hover:bg-gray-400 cursor-pointer rounded-md"
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="col-span-1 p-4">
        <FaRegUserCircle className="text-3xl" />
      </div>
    </div>
  );
};

export default Head;
