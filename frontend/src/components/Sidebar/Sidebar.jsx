import React, { useState } from "react";
import { FaBars, FaComments, FaPhone, FaCog } from "react-icons/fa";

function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  return (
    <div
      className={`${
        isExpanded ? "w-[10%]" : "w-[4%]"
      } bg-black text-white flex flex-col items-center border border-black h-[calc(100vh-45px)] transition-all duration-300 z-10`}
    >
      {/* Toggle Button */}
      <div className="mt-4">
        <button
          className="text-gray-400 hover:text-white"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <FaBars size={20} />
        </button>
      </div>

      {/* Chat Box */}
      <div className="mt-6 flex items-center gap-2">
        <button className="text-gray-400 hover:text-white">
          <FaComments size={20} />
        </button>
        {isExpanded && <span className="text-sm">Chats</span>}
      </div>

      {/* Call Icon */}
      <div className="mt-6 flex items-center gap-2">
        <button className="text-gray-400 hover:text-white">
          <FaPhone rotate={58} size={18} />
        </button>
        {isExpanded && <span className="text-sm">Calls</span>}
      </div>

      {/* Settings */}
      <div className="mt-auto mb-6 flex items-center gap-2">
        <button className="text-gray-400 hover:text-white">
          <FaCog size={20} />
        </button>
        {isExpanded && <span className="text-sm">Settings</span>}
      </div>

      {/* Profile Picture */}
      <div
        className="relative mb-10"
        onMouseEnter={() => setShowProfile(true)}
        onMouseLeave={() => setShowProfile(false)}
        onClick={() => setShowProfile(!showProfile)}
      >
        <img
          src="https://via.placeholder.com/40"
          alt="Profile"
          className="w-10 h-10 rounded-full border border-gray-500 hover:border-green-500 cursor-pointer"
        />
        {/* Profile Details */}
        {showProfile && (
          <div
            className="absolute left-12 -top-40 w-48 bg-gray-800 text-white rounded-lg shadow-lg p-4 z-50"
            style={{ transform: "translateY(-10%)" }}
          >
            <img
              src="https://via.placeholder.com/100"
              alt="Profile"
              className="w-16 h-16 rounded-full mx-auto mb-3"
            />
            <h3 className="text-center text-lg">John Doe</h3>
            <p className="text-sm text-center text-gray-400">Web Developer</p>
            <p className="text-sm text-center text-gray-400">
              johndoe@example.com
            </p>
            <p className="text-sm text-center text-gray-400">+123 456 7890</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Sidebar;
