import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { aliveRouter } from "./routes/alive.routes.js";

const createApp = () => {
  const app = express();

  /* ====== Middlewares ====== */

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(
    cors({
      origin: "http://localhost:5173",
      credentials: true,
      methods: ["GET", "POST", "PUT", "DELETE"],
    })
  );
  app.use(express.static("public"));
  app.use(cookieParser());

  /* ====== API Routes ====== */

  app.use("/api/v1/alive", aliveRouter);

  /* ===== 404 handler ===== */
  app.use((req, res, next) => {
    res.status(404).json({ error: "Not found" });
  });

  return app;
};

export default createApp;
