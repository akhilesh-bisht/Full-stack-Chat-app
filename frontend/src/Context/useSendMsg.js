import React, { useState } from "react";
import useConvo from "../zustand/UserConvo";
import axios from "axios";
const useSendMessage = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, Selectedtalk } = useConvo();
  const sendMessages = async (message) => {
    setLoading(true);
    try {
      const res = await axios.post(`/api/message/send/${Selectedtalk._id}`, {
        message,
      });

      setMessages([...messages, res.data.newMessage]);
          setLoading(false);
    } catch (error) {
      console.log("Error in send messages", error);
      setLoading(false);
    }
  };
  return { loading, sendMessages };
};

export default useSendMessage;
