import React from "react";
import Serch from "./Serch";
import User from "./User";
import { FaEdit, FaCog } from "react-icons/fa"; // Importing icons from React Icons

function Left() {
  return (
    <div
      className="border rounded-l-lg border-black w-[25%] relative z-0"
      style={{ backgroundColor: "rgb(25 25 25)" }}
    >
      {/* Header Section */}
      <div className="flex text-white pl-2 items-center p-4">
        <h1 className="text-2xl ml-3 font-semibold">Chats</h1>
        <div className="flex justify-end gap-6 w-full mr-3">
          {/* Edit Icon and Text */}
          <div className="flex items-center gap-1 cursor-pointer hover:text-gray-300">
            <FaEdit size={18} />
          </div>
          {/* Setting Icon and Text */}
          <div className="flex items-center gap-1 cursor-pointer hover:text-gray-300">
            <FaCog size={18} />
          </div>
        </div>
      </div>
      {/* Search Component */}
      <Serch />

      {/*  user comp */}
      <div className="h-[calc(82vh-45px)] overflow-auto scrollbar-hide">
        <User></User>
        <User></User>
        <User></User>
        <User></User>
        <User></User>
        <User></User>
        <User></User>
        <User></User>
        <User></User>
        <User></User>
      </div>
    </div>
  );
}

export default Left;
