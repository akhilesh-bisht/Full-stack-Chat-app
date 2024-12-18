import React from "react";

function MsgBox() {
  return (
    <>
      <div className="flex items-start gap-2.5">
        {/* Profile Picture */}
        <img
          className="w-10 h-10 rounded-full"
          src="/path/to/profile-picture.jpg"
          alt="User Profile"
        />

        {/* Message Container */}
        <div className="flex flex-col gap-1">
          {/* User Info and Timestamp */}
          <div className="flex items-center space-x-2">
            <span className="text-sm font-semibold text-gray-900 dark:text-white">
              Bonnie Green
            </span>
            <span className="text-xs text-gray-500 dark:text-gray-400">
              11:46
            </span>
          </div>

          {/* Message Bubble */}
          <div className="relative flex flex-col p-4 bg-gray-100 rounded-xl dark:bg-gray-700 max-w-sm">
            {/* Text Message */}
            <p className="text-sm text-gray-900 dark:text-white">
              Hey, check out this awesome feature!
            </p>

            {/* Video or Image Attachment */}
            <img
              src="/path/to/video-or-image.jpg"
              alt="Attachment"
              className="mt-3 rounded-lg"
            />

            {/* Voice Note with Waveform */}
            <div className="flex items-center gap-2 mt-3">
              <button className="p-2 bg-gray-300 rounded-full dark:bg-gray-600">
                <svg
                  className="w-5 h-5 text-gray-700 dark:text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v18m9-9H3"
                  />
                </svg>
              </button>
              <svg
                className="w-full h-8 text-gray-400 dark:text-gray-500"
                viewBox="0 0 185 40"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect y="17" width="3" height="6" rx="1.5" fill="#6B7280" />
                <rect
                  x="7"
                  y="15.5"
                  width="3"
                  height="9"
                  rx="1.5"
                  fill="#6B7280"
                />
                <rect
                  x="14"
                  y="6.5"
                  width="3"
                  height="27"
                  rx="1.5"
                  fill="#6B7280"
                />
                <rect
                  x="21"
                  y="6.5"
                  width="3"
                  height="27"
                  rx="1.5"
                  fill="#6B7280"
                />
                <rect
                  x="28"
                  y="3"
                  width="3"
                  height="34"
                  rx="1.5"
                  fill="#6B7280"
                />
                <rect
                  x="35"
                  y="3"
                  width="3"
                  height="34"
                  rx="1.5"
                  fill="#6B7280"
                />
              </svg>
              <span className="text-xs text-gray-500 dark:text-gray-400">
                0:42
              </span>
            </div>
          </div>

          {/* Delivery Status */}
          <span className="text-xs text-gray-500 dark:text-gray-400">
            Delivered
          </span>
        </div>

        {/* Action Menu */}
        <div className="relative">
          <button
            id="menuButton"
            className="p-2 text-gray-500 bg-white rounded-lg dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600"
            aria-haspopup="true"
          >
            <svg
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <circle cx="10" cy="3" r="2" />
              <circle cx="10" cy="10" r="2" />
              <circle cx="10" cy="17" r="2" />
            </svg>
          </button>
          <div
            id="menu"
            className="absolute hidden w-40 p-2 mt-2 bg-white rounded-lg shadow-lg dark:bg-gray-700"
          >
            <ul className="space-y-1">
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600"
                >
                  Reply
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600"
                >
                  Forward
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600"
                >
                  Delete
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default MsgBox;
