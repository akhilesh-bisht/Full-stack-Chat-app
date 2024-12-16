import React from "react";
import { FaWhatsapp } from "react-icons/fa";

function Navbar() {
  return (
    <div className="bg-black border border-black h-[45px] text-white flex items-center">
      <FaWhatsapp className="ml-[19px] mr-2 text-green-500 text-2xl" />
      <h1 className="ml-2">WhatsApp</h1>
    </div>
  );
}

export default Navbar;
