import React from "react";

function User({ user }) {
  return (
    <>
      <div className="flex items-center space-x-4 px-4 py-2 hover:bg-gray-700 mt-2 rounded-lg mx-2 cursor-pointer">
        <img
          src="https://via.placeholder.com/50"
          alt="User Profile"
          className="w-12 h-12 rounded-full"
        />
        <div className="text-white ">
          <h2 className="text-lg font-semibold">{user.fullName}</h2>
          <p className="text-sm text-gray-400">{user.email}</p>
        </div>
      </div>
    </>
  );
}

export default User;
