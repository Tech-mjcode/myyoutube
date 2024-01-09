import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { menuClose } from "../utils/appSlice";
import CommentContainer from "./CommentContainer";
import LiveChat from "./LiveChat";
import { addMessage } from "../utils/liveCommentSlice";

const WatchPage = () => {
  const [param] = useSearchParams();
  console.log(param.get("v"));
  const dispatch = useDispatch();
  const [liveMes, setLiveMes] = useState("");
  useEffect(() => {
    dispatch(menuClose());
  }, []);
  return (
    <div className="col-span-11 ml-2">
      <div className="flex justify-between">
        <iframe
          className="ml-5"
          width="800"
          height="400"
          src={"https://www.youtube.com/embed/" + param.get("v")}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>

        <div>
          <LiveChat />
          <form
            className="p-2 mx-2 flex justify-between bg-gray-400 rounded-lg"
            onSubmit={(e) => {
              e.preventDefault();
              dispatch(
                addMessage({
                  name: "Manash",
                  message: liveMes,
                })
              );
              setLiveMes("");
            }}
          >
            <input
              type="text"
              className="w-8/12 ml-3 rounded-lg p-1"
              value={liveMes}
              onChange={(e) => {
                setLiveMes(e.target.value);
              }}
            />
            <button
              type="submit"
              className="px-5 bg-gray-700 rounded-lg text-yellow-100 py-1"
            >
              Send
            </button>
          </form>
        </div>
      </div>

      <CommentContainer />
    </div>
  );
};

export default WatchPage;
