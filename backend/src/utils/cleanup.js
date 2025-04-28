import mongoose from "mongoose";
import dotenv from "dotenv";
import User from "../models/user.model.js";
import Message from "../models/message.model.js";

dotenv.config();

async function cleanupDatabase() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB ✅");

    const deleteUsers = await User.deleteMany({});
    console.log(`Deleted ${deleteUsers.deletedCount} users.`);

    const deleteMessages = await Message.deleteMany({});
    console.log(`Deleted ${deleteMessages.deletedCount} messages.`);

    console.log("Database cleanup complete ✅");
  } catch (error) {
    console.error("Error during cleanup ❌", error);
  } finally {
    await mongoose.disconnect();
    console.log("Disconnected from MongoDB 🔌");
  }
}

cleanupDatabase();
