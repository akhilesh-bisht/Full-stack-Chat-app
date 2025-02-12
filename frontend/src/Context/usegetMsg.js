import React, { useEffect, useState } from "react";
import useConvo from "../zustand/UserConvo";
import axios from "axios";
const useGetMessage = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, Selectedtalk } = useConvo();

  useEffect(() => {
    const getMessages = async () => {
      setLoading(true);
      if (Selectedtalk && Selectedtalk._id) {
        try {
          const res = await axios.get(`/api/message/get/${Selectedtalk._id}`);
          setMessages(res.data);

          setLoading(false);
        } catch (error) {
          console.log("Error in getting messages", error);
          setLoading(false);
        }
      }
    };
    getMessages();
  }, [Selectedtalk, setMessages]);

  return { loading, messages };
};

export default useGetMessage;
