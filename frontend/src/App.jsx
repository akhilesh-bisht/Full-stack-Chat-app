import React from "react";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useAuth } from "./Context/AuthProvider";
import { Navigate } from "react-router-dom";
import Loading from "./components/Loding";

import { ToastContainer } from "react-toastify";
function App() {
  const [authUser, setAuthUser] = useAuth();
  return (
    <>
      {/* <Loading /> */}
      <ToastContainer />
      <Routes>
        <Route
          path="/"
          element={authUser ? <Home /> : <Navigate to={"/login"} />}
        />

        <Route
          path="/login"
          element={authUser ? <Navigate to="/" /> : <Login />}
        />
        <Route
          path="/signup"
          element={authUser ? <Navigate to="/" /> : <Signup />}
        />
      </Routes>
    </>
  );
}

export default App;
