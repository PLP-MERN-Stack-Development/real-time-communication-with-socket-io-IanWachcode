import React, { createContext, useContext, useState, useEffect } from "react";
import socket from "../socket/socket";

const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [messages, setMessages] = useState([]);
  const [typingUser, setTypingUser] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);

  useEffect(() => {
    socket.on("chat:message", (msg) => setMessages((prev) => [...prev, msg]));
    socket.on("typing", (username) => setTypingUser(username));
    socket.on("user:joined", (msg) => console.log(msg));
    socket.on("user:left", (msg) => console.log(msg));
    socket.on("chat:history", (msgs) => setMessages(msgs));

    return () => socket.off();
  }, []);

  const sendMessage = (data) => socket.emit("chat:message", data);
  const joinChat = (username) => {
    setUser(username);
    socket.emit("join", username);
  };
  const startTyping = (username) => socket.emit("typing", username);

  return (
    <ChatContext.Provider value={{ user, messages, typingUser, sendMessage, joinChat, startTyping, onlineUsers }}>
      {children}
    </ChatContext.Provider>
  );
};

export const useChat = () => useContext(ChatContext);
