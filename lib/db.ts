import mongoose from "mongoose";

const MONGODB_URI = "mongodb://127.0.0.1:27017/notes_app";

const connectDB = async () => {
  if (mongoose.connection.readyState >= 1) return;
  await mongoose.connect(MONGODB_URI);
};

export default connectDB;
