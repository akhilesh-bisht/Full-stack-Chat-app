import React, { useState, useEffect, useRef, useCallback } from "react";
import { FaPaperclip, FaSmile, FaMicrophone } from "react-icons/fa";
import { BsImage, BsFile, BsFillCameraVideoFill } from "react-icons/bs";
import { IoSend } from "react-icons/io5";
import useSendMessage from "../../Context/useSendMsg";

const emojiList = ["😀", "😂", "😍", "😢", "😎"];
const attachmentOptions = [
  { label: "Image", icon: BsImage },
  { label: "File", icon: BsFile },
  { label: "Video", icon: BsFillCameraVideoFill },
];

function TypeMsg() {
  const [dropdown, setDropdown] = useState({ emoji: false, attachment: false });
  const [message, setMessage] = useState("");
  const { sendMessages, loading } = useSendMessage();

  const containerRef = useRef(null);

  //  handle send messge

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (message.trim() === "") return;
    await sendMessages(message);
    setMessage("");
  };

  // Toggle dropdowns
  const toggleDropdown = useCallback((type) => {
    setDropdown((prev) => ({
      emoji: type === "emoji" ? !prev.emoji : false,
      attachment: type === "attachment" ? !prev.attachment : false,
    }));
  }, []);

  // Handle outside clicks to close dropdowns
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setDropdown({ emoji: false, attachment: false });
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Handle emoji click
  const handleEmojiClick = useCallback((emoji) => {
    setMessage((prev) => prev + emoji);
    setDropdown({ emoji: false, attachment: false });
  }, []);

  return (
    <form onSubmit={handleSendMessage}>
      <div
        style={{ backgroundColor: "rgb(25 25 25)" }}
        ref={containerRef}
        className="relative flex items-center h-[8vh] border border-t-black p-2"
      >
        {/* Emoji Picker Icon */}
        <button
          onClick={() => toggleDropdown("emoji")}
          className="text-white mx-2"
        >
          <FaSmile className="text-base" />
        </button>

        {/* Emoji Picker Dropdown */}
        {dropdown.emoji && (
          <div className="absolute mt-10 bg-white p-2 rounded shadow-lg">
            <div className="grid grid-cols-5 gap-4">
              {emojiList.map((emoji) => (
                <button
                  key={emoji}
                  onClick={() => handleEmojiClick(emoji)}
                  className="hover:bg-gray-200 p-1 rounded"
                >
                  {emoji}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Attachment Icon */}
        <button
          onClick={() => toggleDropdown("attachment")}
          className="text-white"
        >
          <FaPaperclip className="text-base" />
        </button>

        {/* Attachment Options Dropdown */}
        {dropdown.attachment && (
          <div className="absolute mt-10 bg-white p-3 rounded shadow-lg">
            <div className="flex flex-col gap-3">
              {attachmentOptions.map(({ label, icon: Icon }) => (
                <button
                  key={label}
                  className="flex items-center gap-2 hover:bg-gray-200 p-2 rounded"
                >
                  <Icon className="text-xl" /> {label}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Input for Message */}

        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message..."
          className="w-full px-4 py-2 rounded-xl border-none focus:outline-none "
          style={{ backgroundColor: "rgb(25 25 25)" }}
        />

        {/* Microphone Icon */}

        {message.length > 0 ? (
          <button className="text-white">
            <IoSend className="text-xl" />
          </button>
        ) : (
          <button className="text-white">
            <FaMicrophone className="text-xl" />
          </button>
        )}
      </div>
    </form>
  );
}

export default TypeMsg;
