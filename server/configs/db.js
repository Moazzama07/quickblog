import mongoose from "mongoose";

const connectDB = async () => {
  try {
    mongoose.connection.on("connected", () => {
      console.log("✅ Database Connected to MongoDB Atlas");
    });

    mongoose.connection.on("error", (err) => {
      console.error("❌ MongoDB connection error:", err);
    });

    // Connect to MongoDB Atlas
    await mongoose.connect(process.env.MONGODB_URL);
  } catch (error) {
    console.log("❌ DB Connection Error:", error.message);
  }
};

export default connectDB;
