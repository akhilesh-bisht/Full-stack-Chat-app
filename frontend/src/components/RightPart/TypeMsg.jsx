import React, { useState, useEffect, useRef, useCallback } from "react";
import { FaPaperclip, FaSmile, FaMicrophone } from "react-icons/fa";
import { BsImage, BsFile, BsFillCameraVideoFill } from "react-icons/bs";

const emojiList = ["😀", "😂", "😍", "😢", "😎"];
const attachmentOptions = [
  { label: "Image", icon: BsImage },
  { label: "File", icon: BsFile },
  { label: "Video", icon: BsFillCameraVideoFill },
];

function TypeMsg() {
  const [dropdown, setDropdown] = useState({ emoji: false, attachment: false });
  const [message, setMessage] = useState("");
  const containerRef = useRef(null);

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
    <div
      ref={containerRef}
      className="relative flex items-center bg-gray-600 border border-t-black p-2"
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
        className="w-full px-4 py-2 rounded-l-lg border-none focus:outline-none bg-gray-600"
      />

      {/* Microphone Icon */}
      <button className="text-white">
        <FaMicrophone className="text-xl" />
      </button>
    </div>
  );
}

export default TypeMsg;
