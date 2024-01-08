import React from "react";

const Button = ({ name }) => {
  return (
    <div>
      <button className="bg-gray-400 px-4 py-1 rounded-lg m-2 ">{name}</button>
    </div>
  );
};

export default Button;
