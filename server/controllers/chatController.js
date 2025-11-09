import Message from "../models/Message.js";

export const saveMessage = async (data) => {
  try {
    const newMessage = new Message({
      sender: data.sender,
      receiver: data.receiver || null,
      room: data.room || "global",
      content: data.content
    });
    await newMessage.save();
    return newMessage;
  } catch (err) {
    console.error("Error saving message:", err.message);
  }
};

export const getMessages = async (room = "global") => {
  try {
    return await Message.find({ room }).sort({ createdAt: 1 });
  } catch (err) {
    console.error("Error fetching messages:", err.message);
    return [];
  }
};
