import React, { useState } from "react";
import { useChat } from "../context/ChatContext";

const ChatInput = () => {
  const [message, setMessage] = useState("");
  const { user, sendMessage, startTyping } = useChat();

  const handleSend = () => {
    if (!message.trim()) return;
    sendMessage({ sender: user, content: message });
    setMessage("");
  };

  return (
    <div style={{ display: "flex", padding: "10px", borderTop: "1px solid #ccc" }}>
      <input
        type="text"
        placeholder="Type your message..."
        value={message}
        onChange={(e) => {
          setMessage(e.target.value);
          startTyping(user);
        }}
        onKeyDown={(e) => e.key === "Enter" && handleSend()}
        style={{ flex: 1, padding: "10px" }}
      />
      <button onClick={handleSend} style={{ marginLeft: "10px" }}>
        Send
      </button>
    </div>
  );
};

export default ChatInput;
