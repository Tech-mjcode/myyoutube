import React from "react";

import { commentData } from "../utils/commentData";
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

const CommentList = ({ commentData }) => {
  return commentData.map((c, index) => (
    <div key={index}>
      <Comment data={c} />
      <div className="border-l-2 border-gray-400 ml-8">
        <CommentList key={index} commentData={c.replies} />
      </div>
    </div>
  ));
};
const CommentContainer = () => {
  return (
    <div className="mt-3 w-8/12 ">
      <h1 className="font-bold text-2xl">Comments</h1>
      <CommentList commentData={commentData} />
    </div>
  );
};

export default CommentContainer;
