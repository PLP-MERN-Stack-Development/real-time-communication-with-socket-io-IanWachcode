import React, { useState } from "react";
import { useChat } from "../context/ChatContext";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const { joinChat } = useChat();

  return (
    <div style={{ display: "flex", height: "100vh", justifyContent: "center", alignItems: "center" }}>
      <div style={{ padding: "2rem", border: "1px solid #ddd", borderRadius: "10px" }}>
        <h2>Join Chat</h2>
        <input
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{ margin: "1rem 0", padding: "10px", width: "100%" }}
        />
        <button onClick={() => joinChat(username)} style={{ width: "100%", padding: "10px" }}>
          Join
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
