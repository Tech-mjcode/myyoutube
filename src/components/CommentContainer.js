import React from "react";
import CommentList from "./CommentList";
import { commentData } from "../utils/commentData";
const CommentContainer = () => {
  return (
    <div className="mt-3 w-8/12 ">
      <h1 className="font-bold text-2xl">Comments</h1>
      <CommentList commentData={commentData} />
    </div>
  );
};

export default CommentContainer;
