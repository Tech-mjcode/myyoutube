import React, { useEffect } from "react";
import LiveComment from "./LiveComment";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/liveCommentSlice";
import { generateRandomMessage, generateRandomName } from "../utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();
  const liveMessage = useSelector((store) => store.liveChat.messages);
  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: generateRandomMessage(20),
        })
      );
    }, 1500);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div className="bg-gray-300 w-full p-2 mx-2 overflow-y-scroll h-[400px] flex flex-col-reverse">
      {liveMessage.map((m) => (
        <LiveComment data={m} />
      ))}
    </div>
  );
};

export default LiveChat;
