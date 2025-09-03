/* eslint-disable @typescript-eslint/no-explicit-any */
import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI as string;
const DB_NAME = process.env.PRODUCTION_DB;

if (!MONGODB_URI) {
  throw new Error("Please add your MongoDB URI to .env.local");
}

/* 
  Global is used here to prevent multiple connections in dev mode (Hot Reload)
*/
let cached = (global as any).mongoose;

if (!cached) {
  cached = (global as any).mongoose = { conn: null, promise: null };
}

export async function connectDB() {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose
      .connect(`${MONGODB_URI}/${DB_NAME}`)
      .then((mongoose) => {
        console.log("✅ Connected to MongoDB");
        return mongoose;
      });
  }
  cached.conn = await cached.promise;
  return cached.conn;
}
