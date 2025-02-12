import React from "react";
import Msg from "./Msg";
import useGetMessage from "../../Context/usegetMsg";
import Loading from "../Loding";
import { useRef, useEffect } from "react";
import useGetSocketMessage from "../../Context/useGetSocketMessage";

function MsgBox() {
  const { loading, messages } = useGetMessage();
  useGetSocketMessage(); // listing incoming msg
  const lastMsgRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      if (lastMsgRef.current) {
        lastMsgRef.current.scrollIntoView({
          behavior: "smooth",
        });
      }
    }, 100);
  }, [messages]);

  return (
    <div style={{ minHeight: "calc(92vh - 8vh)" }}>
      {loading ? (
        <Loading />
      ) : (
        messages.length > 0 &&
        messages.map((message) => (
          <div key={message._id} ref={lastMsgRef}>
            <Msg message={message} />
          </div>
        ))
      )}

      {!loading && messages.length === 0 && (
        <div>
          <p className="text-center mt-[15%] fixed left-[60%]">
            Say! Hello to start the conversation
          </p>
        </div>
      )}
    </div>
  );
}

export default MsgBox;
