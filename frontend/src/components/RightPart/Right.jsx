import React from "react";
import ChatUser from "./ChatUser";
import MsgBox from "./MsgBox";
import TypeMsg from "./TypeMsg";

function Right() {
  return (
    <>
      <div className="border border-black 2px w-[71%] bg-gray-600">
        <ChatUser />
        <MsgBox />
        <div className="mt-[24%] bg-gray-600">
          <TypeMsg />
        </div>
      </div>
    </>
  );
}

export default Right;
