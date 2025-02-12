import React from "react";
import appIcon from "../../assets/app.webp";

function Navbar() {
  return (
    <div className="bg-black border border-black h-[45px] text-white flex items-center">
      <img className="w-8 h-8 ml-4 " src={appIcon} alt="logo" />
      <h1 className="ml-2"> QuickTalk</h1>
    </div>
  );
}

export default Navbar;
