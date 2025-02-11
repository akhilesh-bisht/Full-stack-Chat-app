import React from "react";
import useConvo from "../../zustand/UserConvo";

function User({ user }) {
  const { Selectedtalk, setSelectedtalk } = useConvo();
  const isSelected = Selectedtalk?._id === user._id;
  return (
    <>
      <div>
        <div
          className={`hover:bg-slate-600 duration-300 flex items-center space-x-4 px-4 py-2  mt-2 rounded-lg mx-2 cursor-pointer ${
            isSelected ? "bg-slate-700" : ""
          }`}
          onClick={() => setSelectedtalk(user)}
        >
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
      </div>
    </>
  );
}

export default User;
