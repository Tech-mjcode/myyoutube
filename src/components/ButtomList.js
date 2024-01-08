import React from "react";
import Button from "./Button";

const buttomList = [
  "All",
  "Music",
  "T-Series",
  "Live",
  "Gaming",
  "Dramedy",
  "CSS",
  "Sports",
  "Java",
  "Js",
];
const ButtomList = () => {
  return (
    <div className="flex ml-5">
      {buttomList.map((b, i) => (
        <Button key={i} name={b} />
      ))}
    </div>
  );
};

export default ButtomList;
