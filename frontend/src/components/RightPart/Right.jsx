import React from "react";
import ChatUser from "./ChatUser";
import MsgBox from "./MsgBox";

function Right() {
  return (
    <>
      <div className="border border-black 2px w-[71%] bg-gray-600">
        <ChatUser />
        <MsgBox />
      </div>
    </>
  );
}

export default Right;
