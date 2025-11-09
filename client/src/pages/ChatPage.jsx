import React from "react";
import MessageList from "../components/MessageList";
import ChatInput from "../components/ChatInput";
import { useChat } from "../context/ChatContext";

const ChatPage = () => {
  const { user, typingUser } = useChat();

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <h2 style={{ padding: "10px", background: "#282c34", color: "#fff" }}>Welcome, {user}</h2>
      <MessageList />
      {typingUser && <p style={{ marginLeft: "1rem" }}>{typingUser} is typing...</p>}
      <ChatInput />
    </div>
  );
};

export default ChatPage;
