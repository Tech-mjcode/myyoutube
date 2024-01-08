import React from "react";
import { useParams } from "react-router-dom";

const Test = () => {
  const urlData = useParams();
  console.log(urlData);
  return <div>Test</div>;
};

export default Test;
