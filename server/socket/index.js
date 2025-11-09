import { Server } from "socket.io";
import User from "../models/User.js";
import { saveMessage, getMessages } from "../controllers/chatController.js";

export const socketSetup = (server) => {
  const io = new Server(server, {
    cors: { origin: "*", methods: ["GET", "POST"] }
  });

  io.on("connection", async (socket) => {
    console.log(`User connected: ${socket.id}`);

    // Join event
    socket.on("join", async (username) => {
      await User.findOneAndUpdate(
        { username },
        { socketId: socket.id, online: true },
        { upsert: true, new: true }
      );
      socket.broadcast.emit("user:joined", `${username} joined`);
      socket.emit("chat:history", await getMessages());
    });

    // Handle message
    socket.on("chat:message", async (msg) => {
      const saved = await saveMessage(msg);
      io.emit("chat:message", saved);
    });

    // Typing indicator
    socket.on("typing", (username) => {
      socket.broadcast.emit("typing", username);
    });

    // Disconnect
    socket.on("disconnect", async () => {
      const user = await User.findOneAndUpdate({ socketId: socket.id }, { online: false });
      if (user) io.emit("user:left", `${user.username} left`);
      console.log("User disconnected:", socket.id);
    });
  });
};
