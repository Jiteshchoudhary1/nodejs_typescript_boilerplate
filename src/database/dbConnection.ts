import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config({});

export const dbConnection = async () => {
  try {
    let dbUrl = process.env.DB_URL || "";
    let result = await mongoose.connect(dbUrl);
    console.log("db connection is done");
    return result;
  } catch (error: any) {
    throw Error(error);
  }
};
