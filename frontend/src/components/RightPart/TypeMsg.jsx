import React, { useState, useEffect, useRef } from "react";
import { FaPaperclip, FaSmile, FaMicrophone } from "react-icons/fa";
import { BsImage, BsFile, BsFillCameraVideoFill } from "react-icons/bs";

function TypeMsg() {
  const [showAttachmentOptions, setShowAttachmentOptions] = useState(false);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [message, setMessage] = useState("");

  // Ref to track the outermost div
  const containerRef = useRef(null);

  // Toggle the attachment options
  const toggleAttachmentOptions = () => {
    setShowAttachmentOptions(!showAttachmentOptions);
    setShowEmojiPicker(false); // Ensure only one dropdown is open
  };

  // Toggle the emoji picker
  const toggleEmojiPicker = () => {
    setShowEmojiPicker(!showEmojiPicker);
    setShowAttachmentOptions(false); // Ensure only one dropdown is open
  };

  // Handle clicking outside the component
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setShowAttachmentOptions(false);
        setShowEmojiPicker(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleEmojiClick = (emoji) => {
    setMessage(message + emoji);
    setShowEmojiPicker(false); // Close emoji picker after selection
  };

  const handleChangeMessage = (e) => setMessage(e.target.value);

  return (
    <div
      ref={containerRef}
      className="relative flex items-center bg-gray-600 border border-t-black   p-2"
    >
      {/* Emoji Picker Icon */}
      <button onClick={toggleEmojiPicker} className="text-white mx-2">
        <FaSmile className="text-base" />
      </button>

      {/* Emoji Picker */}
      {showEmojiPicker && (
        <div className="absolute mt-10 bg-white p-2 rounded shadow-lg">
          <div className="grid grid-cols-5 gap-4   ">
            <button onClick={() => handleEmojiClick("😀")}>😀</button>
            <button onClick={() => handleEmojiClick("😂")}>😂</button>
            <button onClick={() => handleEmojiClick("😍")}>😍</button>
            <button onClick={() => handleEmojiClick("😢")}>😢</button>
            <button onClick={() => handleEmojiClick("😎")}>😎</button>
          </div>
        </div>
      )}

      {/* Attachment Icon */}
      <button onClick={toggleAttachmentOptions} className="text-white">
        <FaPaperclip className="text-base" />
      </button>

      {/* Attachment Options */}
      {showAttachmentOptions && (
        <div className="absolute mt-10 bg-white p-3 rounded shadow-lg">
          <div className="flex flex-col gap-3">
            <button className="flex items-center gap-2">
              <BsImage className="text-xl" /> Image
            </button>
            <button className="flex items-center gap-2">
              <BsFile className="text-xl" /> File
            </button>
            <button className="flex items-center gap-2">
              <BsFillCameraVideoFill className="text-xl" /> Video
            </button>
          </div>
        </div>
      )}

      {/* Input Box for Typing Message */}
      <input
        onClick={toggleEmojiPicker}
        type="text"
        value={message}
        onChange={handleChangeMessage}
        placeholder="Type your message..."
        className="w-full px-4 py-2 rounded-l-lg border-none focus:outline-none bg-gray-600"
      />

      {/* Recording Icon */}
      <button className="text-white ">
        <FaMicrophone className="text-xl " />
      </button>
    </div>
  );
}

export default TypeMsg;
