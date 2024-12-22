import React from "react";
// import Left from "./components/leftPart/Left";
// import Right from "./components/RightPart/Right";
// import Sidebar from "./components/Sidebar/Sidebar";
// import Navbar from "./components/Sidebar/Navbar";

import Signup from "./pages/signup";
import Login from "./pages/login";

function App() {
  return (
    <>
      <Login></Login>
      {/* <Signup /> */}
      {/* <div className="h-screen">
        <div>
          <Navbar />
        </div>
        <div className="flex h-[calc(100vh-45px)] ">
          <Sidebar />
          <Left />
          <Right />
        </div>
      </div> */}
    </>
  );
}

export default App;
