import mongoose from "mongoose";
import { StatusCodes } from "http-status-codes";
import ApiError from "../utils/ApiError.js";

const mongoDBConnection = async () => {
  try {
    const ConnectionDB = await mongoose.connect(
      `${process.env.MONGODB_URI}/${process.env.DB_NAME}`
    );
    console.log(`MONGODB connection HOST : ${ConnectionDB.connection.host}`);
  } catch (error) {
    throw new ApiError(
      "Database connection failed",
      StatusCodes.INTERNAL_SERVER_ERROR,
      error
    );
  }
};

export { mongoDBConnection };
