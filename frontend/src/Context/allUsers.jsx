import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";
function allUsers() {
  const [allUser, setAllUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getUsers = async () => {
      setLoading(true);
      try {
        const token = Cookies.get("jwt");
        const response = await axios.get("/api/user/allUsers", token, {
          Credentials: "include",
          Headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`,
          },
        });
        setAllUsers(response.data);
        setLoading(false);
      } catch (error) {
        console.log(`error in all users ${error}`);
      }
    };
    getUsers();
  }, []);
  return [allUser, loading];
}

export default allUsers;
