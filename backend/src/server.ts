import dotenv from "dotenv";
import dns from "node:dns";

// 1. Load environment variables first
dotenv.config();

// 2. Network / System configurations
dns.setServers(["8.8.8.8", "8.8.4.4"]);

import app from "./app";
import connectDb from "./modules/config/db";

const PORT = process.env.PORT || 3000;

const startServer = async () => {
  try {
    // Connect to Database
    await connectDb();
    console.log("Database connected successfully.");

    // Start HTTP Listening
    app.listen(PORT, () => {
      console.log(`Server is listening on: http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start server due to connection error:", error);
    process.exit(1); // Exit process with failure
  }
};

startServer();