import React from "react";
import useConvo from "../../zustand/UserConvo";
import { useSocketContext } from "../../Context/socket";
import useGetMessage from "../../Context/usegetMsg";

function User({ user }) {
  const { Selectedtalk, setSelectedtalk } = useConvo();
  const { socket, onlineUsers } = useSocketContext();
  const isOnline = onlineUsers.includes(user._id);
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
          <div className="flex space-x-4 px-3 md:px-4 py-3 duration-300 cursor-pointer">
            <div className={`avatar ${isOnline ? "online" : ""}`}>
              <div className="w-12 rounded-full">
                <img
                  src={`https://ui-avatars.com/api/?name=${user.fullName}&background=random`}
                  alt="profile"
                />
              </div>
            </div>
            <div>
              <h1 className=" font-bold">{user.fullName}</h1>
              <p className="text-gray-400  text-xs md:text-xs">{user.email}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default User;
