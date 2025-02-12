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
        <Navbar onMenuClick={toggleDrawer} />
      </div>
      <div className="flex h-[calc(100vh-45px)]">
        {/* Sidebar for desktop */}

        {/* Drawer for mobile */}

        {/* Main content */}
        <div className="flex flex-1 flex-col md:flex-row">
          <Left />
          <Right />
        </div>
      </div>
    </div>
  );
}

export default Home;
