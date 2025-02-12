import React, { useState } from "react";
import { FaBars, FaComments, FaPhone, FaCog } from "react-icons/fa";
import { CiLogout } from "react-icons/ci";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  // Handle Logout
  const handleLogout = async () => {
    try {
      await axios.post("/api/user/logout");
      localStorage.removeItem("userInfo");
      toast.success("Logged out successfully!", { position: "top-center" });

      setTimeout(() => {
        window.location.href = "/login";
      }, 2000);
    } catch (error) {
      toast.error("An unexpected error occurred!", { position: "top-center" });
    }
  };

  return (
    <>
      {/* Sidebar */}
      <div
        className={`${
          isExpanded ? "w-[10%]" : "w-[10%]"
        } text-white flex flex-col bg-black items-center border border-black h-[calc(100vh-45px)] transition-all duration-300 z-10`}
      >
        {/* Toggle Button */}
        <button
          className="text-gray-400 hover:text-white mt-4"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <FaBars size={20} />
        </button>

        {/* Chat */}
        <div className="mt-6 flex items-center gap-2">
          <button className="text-gray-400 hover:text-white">
            <FaComments size={20} />
          </button>
          {isExpanded && <span className="text-sm">Chats</span>}
        </div>

        {/* Calls */}
        <div className="mt-6 flex items-center gap-2">
          <button className="text-gray-400 hover:text-white">
            <FaPhone rotate={58} size={18} />
          </button>
          {isExpanded && <span className="text-sm">Calls</span>}
        </div>

        {/* Logout */}
        <div className="mt-28 flex" onClick={() => setShowLogoutModal(true)}>
          <button className="text-gray-400 font-bold hover:text-white">
            <CiLogout rotate={58} size={22} />
          </button>
          {isExpanded && <span className="text-sm">Logout</span>}
        </div>

        {/* Settings */}
        <div className="mt-auto mb-6 flex items-center gap-2">
          <button className="text-gray-400 hover:text-white">
            <FaCog size={20} />
          </button>
          {isExpanded && <span className="text-sm">Settings</span>}
        </div>
      </div>

      {/* Logout Confirmation Modal */}
      {showLogoutModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-80">
            <h2 className="text-lg font-semibold text-gray-800">
              Are you sure you want to logout?
            </h2>
            <div className="flex justify-end mt-4">
              <button
                className="bg-red-500 text-white px-4 py-2 rounded-lg mr-2 hover:bg-red-600"
                onClick={handleLogout}
              >
                Yes, Logout
              </button>
              <button
                className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-400"
                onClick={() => setShowLogoutModal(false)}
              >
                No, Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Sidebar;
