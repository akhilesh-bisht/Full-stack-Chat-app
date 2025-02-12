import React, { useState, useEffect, useRef, useCallback } from "react";
import { FaPaperclip, FaSmile, FaMicrophone } from "react-icons/fa";
import { BsImage, BsFile, BsFillCameraVideoFill } from "react-icons/bs";
import { IoSend } from "react-icons/io5";
import useSendMessage from "../../Context/useSendMsg";

// Extended emoji list
const emojiList = [
  "😀", "😂", "😍", "😢", "😎", "👍", "❤️", "🙌", 
  "🎉", "🔥", "😊", "🤔", "👋", "✨", "🎸"
];

function TypeMsg() {
  const [dropdown, setDropdown] = useState({ emoji: false, attachment: false });
  const [message, setMessage] = useState("");
  const { sendMessages, loading } = useSendMessage();
  const containerRef = useRef(null);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (message.trim() === "") return;
    await sendMessages(message);
    setMessage("");
    setDropdown({ emoji: false, attachment: false }); // Close dropdowns after sending
  };

  const handleEmojiClick = useCallback((emoji) => {
    setMessage((prev) => prev + emoji);
    // Don't close emoji picker after selection
    setDropdown(prev => ({ ...prev, attachment: false }));
  }, []);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setDropdown({ emoji: false, attachment: false });
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <form onSubmit={handleSendMessage}>
      <div
        ref={containerRef}
        className="relative flex items-center h-[8vh] border border-t-black p-2"
        style={{ backgroundColor: "rgb(25 25 25)" }}
      >
        {/* Emoji Button */}
        <button
          type="button" // Prevent form submission
          onClick={() => setDropdown(prev => ({ 
            ...prev, 
            emoji: !prev.emoji 
          }))}
          className="text-white mx-2 hover:text-gray-300 transition-colors"
        >
          <FaSmile className="text-xl" />
        </button>

        {/* Emoji Picker Dropdown */}
        {dropdown.emoji && (
          <div className="absolute bottom-16 left-0 bg-gray-800 p-3 rounded-lg shadow-xl z-50">
            <div className="grid grid-cols-5 gap-2 max-h-[200px] overflow-y-auto">
              {emojiList.map((emoji) => (
                <button
                  key={emoji}
                  type="button"
                  onClick={() => handleEmojiClick(emoji)}
                  className="hover:bg-gray-700 p-2 rounded-lg transition-colors text-xl"
                >
                  {emoji}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Message Input */}
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message..."
          className="w-full px-4 py-2 rounded-xl border-none focus:outline-none text-white"
          style={{ backgroundColor: "rgb(25 25 25)" }}
        />

        {/* Send/Mic Button */}
        <button
          type="submit"
          disabled={loading}
          className="text-white mx-2 hover:text-gray-300 transition-colors"
        >
          {message.trim().length > 0 ? (
            <IoSend className="text-xl" />
          ) : (
            <FaMicrophone className="text-xl" />
          )}
        </button>
      </div>
    </form>
  );
}

export default TypeMsg;