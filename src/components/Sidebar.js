import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
import { TbBrandYoutubeKids } from "react-icons/tb";
const Sidebar = () => {
  const isOpen = useSelector((state) => state.app.isMenuOpen);
  if (!isOpen) return null;
  return (
    <div className="col-span-1 p-4 place-content-center ">
      <ul className="mt-3">
        <Link>
          <li className="font-semibold flex items-center">
            <IoHomeOutline className="size-7" />
            <h1 className="p-2">Home</h1>
          </li>
        </Link>
        <Link>
          <li className="font-semibold flex items-center">
            <TbBrandYoutubeKids className="size-7" />
            <h1 className="p-2">Shorts</h1>
          </li>
        </Link>
        <li>Subscription</li>
      </ul>

      <h1 className="mt-3">You</h1>
      <ul>
        <li>Your channel</li>
        <li>History</li>
        <li>Your videos</li>
        <li>Watch Later</li>
      </ul>
      <h1 className="mt-3">Explore</h1>
      <ul>
        <li>Trending</li>
        <li>Shopping</li>
        <li>Music</li>
        <li>Movies</li>
        <li>Live</li>
        <li>Gaming</li>
        <li>News</li>
      </ul>
    </div>
  );
};

export default Sidebar;
