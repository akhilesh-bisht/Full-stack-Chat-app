import React from "react";
import { FaVideo, FaPhoneAlt, FaSearch } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import useConvo from "../../zustand/UserConvo";
import { useSocketContext } from "../../Context/socket";

const ChatUser = () => {
  const { Selectedtalk } = useConvo();
  const { onlineUsers } = useSocketContext();
  const isOnline = onlineUsers.includes(Selectedtalk._id);

  const getOnlineUsersStatus = (userId) => {
    return onlineUsers.includes(userId) ? "Online" : "";
  };

  return (
    <div
      className="flex items-center justify-between  text-white h-[8vh] px-4 border-b border-gray-500"
      style={{ backgroundColor: "rgb(25 25 25)" }}
    >
      {/* User Profile */}
      <div className="flex items-center gap-3">
        <div className={`avatar w-10  ${isOnline ? "online" : ""}`}>
          <img
            className="rounded-full"
            src={`https://ui-avatars.com/api/?name=${Selectedtalk.fullName}&background=random`}
            alt="profile"
          />
        </div>
        {/* <FaUserCircle className="mt-2" size={30} /> */}
        {/* User Name */}
        <div className="">
          <span className="text-lg font-medium text-center mt-3">
            {Selectedtalk.fullName}
          </span>
          <div className="text-xs">
            {getOnlineUsersStatus(Selectedtalk._id)}
          </div>
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
