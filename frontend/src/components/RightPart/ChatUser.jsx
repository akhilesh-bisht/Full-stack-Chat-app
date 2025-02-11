import React from "react";
import { FaVideo, FaPhoneAlt, FaSearch } from "react-icons/fa";
import useConvo from "../../zustand/UserConvo";

const ChatUser = () => {
  const { Selectedtalk } = useConvo();

  return (
    <div
      className="flex items-center justify-between  text-white h-[8vh] px-4 border-b border-gray-500"
      style={{ backgroundColor: "rgb(25 25 25)" }}
    >
      {/* User Profile */}
      <div className="flex items-center gap-3">
        {/* Profile Image */}
        <img
          src="https://via.placeholder.com/40"
          alt="User Profile"
          className="w-10 h-10 rounded-full"
        />
        {/* User Name */}
        <div className="mt-3">
          <span className="text-lg font-medium text-center mt-3">
            {Selectedtalk?.fullName}
          </span>
          <h1 className="text-xs ml-1 ">online</h1>
        </div>
      </div>

      {/* Icons Section */}

      <div className="flex items-center space-x-0">
        {/* Video Call Icon */}
        <button className="hover:bg-gray-700 bg-black p-2 px-3 rounded-l-md border-r border-gray-200">
          <FaVideo className="text-lg" />
        </button>
        {/* Call Icon */}
        <button className="hover:bg-gray-700 bg-black p-[9px] px-3 rounded-r-md">
          <FaPhoneAlt className="text-base" />
        </button>
        {/* Search Icon */}
        <button className="hover:text-gray-300 ">
          <FaSearch className="text-xl ml-5" />
        </button>
      </div>
    </div>
  );
};

export default ChatUser;
