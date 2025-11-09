import React from "react";
import { useChat } from "../context/ChatContext";
import { useChatScroll } from "../hooks/useChatScroll";

const MessageList = () => {
  const { messages, user } = useChat();
  const ref = useChatScroll(messages);

  return (
    <div ref={ref} className="messages" style={{ flex: 1, overflowY: "auto", padding: "1rem" }}>
      {messages.map((msg, i) => (
        <div
          key={i}
          style={{
            margin: "5px 0",
            padding: "10px",
            borderRadius: "10px",
            background: msg.sender === user ? "#d1f7c4" : "#f0f0f0",
            alignSelf: msg.sender === user ? "flex-end" : "flex-start",
            maxWidth: "70%",
          }}
        >
          <strong>{msg.sender}</strong>
          <p>{msg.content}</p>
          <small>{new Date(msg.createdAt).toLocaleTimeString()}</small>
        </div>
      ))}
    </div>
  );
};

export default MessageList;
