import React from "react";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const isOpen = useSelector((state) => state.app.isMenuOpen);
  if (!isOpen) return null;
  return (
    <div className="col-span-1 p-4 shadow-lg">
      <ul className="mt-3">
        <li>Home</li>
        <li>Shorts</li>
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
