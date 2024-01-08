import React from "react";
import Comment from "./Comment";

const CommentList = ({ commentData }) => {
  return (
    <div className="px-2">
      {commentData.map((c) => {
        return (
          <div>
            <Comment data={c} />
            <div className="border-l-2 border-gray-400 mx-8">
              <CommentList commentData={c.replies} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CommentList;
