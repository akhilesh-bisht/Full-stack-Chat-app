import React from "react";
import ChatUser from "./ChatUser";
import MsgBox from "./MsgBox";
import TypeMsg from "./TypeMsg";

function Right() {
  return (
    <>
      <div
        className="border border-black 2px w-[71%] "
        style={{ backgroundColor: "rgb(25 25 25)" }}
      >
        <ChatUser />
        <div
          className="  flex-1 overflow-y-auto scrollbar-hide"
          style={{ maxHeight: "calc(92vh - 14.5vh)" }}
        >
          <MsgBox />
        </div>
        <div className="bg-gray-600">
          <TypeMsg />
        </div>
      </div>
    </>
  );
}

export default Right;
