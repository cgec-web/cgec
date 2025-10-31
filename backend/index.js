import { mongoDBConnection } from "./config/db.js";
import mongoose from "mongoose";

import dotenv from "dotenv";
import createApp from "./app.js";
dotenv.config();

const PORT = process.env.PORT || 3000;
const app = createApp();

/* ======= Database Connection ====== */
(async () => {
  await mongoDBConnection();
  const server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}\nhttp://localhost:${PORT}`);
  });

  /* ====== Graceful Shutdown ====== */

  const Shutdown = async () => {
    console.log("Shutting down...");
    server.close(() => {
      console.log("HTTP server closed");
      mongoose.connection.close(false, () => {
        console.log("MongoDB connection closed");
        process.exit(0);
      });
    });
  };

  process.on("SIGINT", Shutdown);
  process.on("SIGTERM", Shutdown);
})();
