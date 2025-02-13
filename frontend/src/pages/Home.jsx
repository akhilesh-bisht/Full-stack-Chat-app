import React from "react";
import Left from "../components/leftPart/Left";
import Right from "../components/RightPart/Right";
// import Sidebar from "../components/Sidebar/Sidebar";
import Navbar from "../components/Sidebar/Navbar";
import { useState } from "react";
function Home() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div className="h-screen">
      <div>
        <Navbar />
      </div>
      <div className="flex h-[calc(100vh-45px)]">
        {/* Sidebar for desktop */}
{/* 
lassName={`fixed  left-0 top-[45px] h-full w-64 bg-white shadow-lg transform transition-transform ${
             */}

        {/* Main content */}
        <div className="flex flex-1 md:flex-row">
          <div className={`relative sm:left-[-100px] md:left-0    ${isDrawerOpen ? "" : ""}`}
            
         
          >
            <Left />
          </div>
          <Right onMenuClick={toggleDrawer} />
        </div>
      </div>
    </div>
  );
}

export default Home;
