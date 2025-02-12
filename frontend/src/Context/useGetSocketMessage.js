import React, { useEffect } from "react";
import { useSocketContext } from "./socket.jsx";
import useConvo from "../zustand/UserConvo.js";
import sound from "../assets/notification.mp3";
const useGetSocketMessage = () => {
  const { socket } = useSocketContext();
  const { messages, setMessages } = useConvo();

  useEffect(() => {
    socket.on("newMessage", (newMessage) => {
      const notification = new Audio(sound);
      notification.play();
      setMessages([...messages, newMessage]);
    });
    return () => {
      socket.off("newMessage");
    };
  }, [socket, messages, setMessages]);
};
export default useGetSocketMessage;
