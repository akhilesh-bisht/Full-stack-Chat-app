import React, { useEffect } from "react";
import ChatUser from "./ChatUser";
import MsgBox from "./MsgBox";
import TypeMsg from "./TypeMsg";
import useConvo from "../../zustand/UserConvo";
import { CiMenuFries } from "react-icons/ci";
import { useAuth } from "../../Context/AuthProvider";
function Right({ onMenuClick }) {
  const { Selectedtalk, setSelectedtalk } = useConvo();
  useEffect(() => {
    return setSelectedtalk(null);
  }, [setSelectedtalk]);
  return (
    <>
      <label
        htmlFor="my-drawer-2"
        className="btn btn-ghost drawer-button lg:hidden absolute left-5 md:hidden"
        onClick={onMenuClick}
      >
        <CiMenuFries className="text-white text-xl" />
      </label>
      {!Selectedtalk ? (
        <NoChatSelected onMenuClick={onMenuClick} />
      ) : (
        <div
          className="border border-black 2px w-full "
          style={{ backgroundColor: "rgb(25 25 25)" }}
        >
          <ChatUser />
          <div
            className="  flex-1 overflow-y-auto scrollbar-hide"
            style={{ maxHeight: "calc(92vh - 14.5vh)" }}
          >
            <MsgBox />
          </div>
          <div className="bg-gray-600">
            <TypeMsg />
          </div>
        </div>
      )}
    </>
  );
}

export default Right;

const NoChatSelected = () => {
  const [authUser] = useAuth();
  return (
    <>
      <div className="relative mx-auto">
        <div className="flex h-[90vh] items-center justify-center">
          <h1 className="text-center">
            Welcome{" "}
            <span className="font-semibold text-xl">
              {authUser.user.fullname}
            </span>
            <br />
            No chat selected, please start conversation by selecting anyone to
            your contacts
          </h1>
        </div>
      </div>
    </>
  );
};
