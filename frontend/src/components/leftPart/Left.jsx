import React, { useState } from "react";
import Serch from "./Serch";
import User from "./User";
import { FaEdit, FaCog, FaUserCircle, FaSpinner } from "react-icons/fa";
import { motion } from "framer-motion";

import allUsers from "../../Context/allUsers";

function Left() {
  const [allUser, loading] = allUsers();
  const [search, setsearch] = useState("");

  // Filter users based on search input
  const filteredUsers = allUser.filter((user) =>
    user.fullName.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div
      className="border rounded-l-lg border-black w-[25%] relative z-0"
      style={{ backgroundColor: "rgb(25 25 25)" }}
    >
      {/* Header Section */}
      <div className="flex text-white pl-2 items-center p-4">
        <h1 className="text-2xl ml-3 font-semibold">Chats</h1>
        <div className="flex justify-end gap-6 w-full mr-3">
          {/* Edit Icon */}
          <div className="flex items-center gap-1 cursor-pointer hover:text-gray-300">
            <FaEdit size={18} />
          </div>
          {/* Settings Icon */}
          <div className="flex items-center gap-1 cursor-pointer hover:text-gray-300">
            <FaCog size={18} />
          </div>
        </div>
      </div>

      {/* Search Component */}
      <Serch search={search} setsearch={setsearch} />

      {/* User List with Search Filtering */}
      <div className="h-[calc(82vh-45px)] overflow-auto scrollbar-hide">
        {!loading ? (
          filteredUsers.length > 0 ? (
            filteredUsers.map((user) => <User key={user._id} user={user} />)
          ) : (
            <p className="text-center text-gray-400 mt-4">No users found</p>
          )
        ) : (
          <div className="flex justify-center  mt-44 items-center">
            
          <motion.div
          animate={{
            x: [ 50, 20, -20, 0], // Moves left and right
            rotate: [0, 360], // Rotates while moving
          }}
          transition={{
            duration: 2, // Total animation time
            repeat: Infinity, // Loops forever
            ease: "easeInOut",
          }}
          >
          <FaSpinner className="text-gray-400 animate-spin" size={30} />
        </motion.div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Left;

