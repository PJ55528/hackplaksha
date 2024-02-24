// import mongoose from "mongoose";

// const connectMongoDB = async () => {
//     try{
//         console.log(process.env.MONGODB_URI)
//         const conn = await mongoose.connect(process.env.MONGODB_URI);
//         console.log("Connected to mongoDB.");
//         return conn;
//     } catch(error){
//         console.log(error);
//     }
// };

// export default connectMongoDB;

import mongoose from "mongoose";

const DATABASE_URL = process.env.MONGODB_URI;

if (!DATABASE_URL) {
  throw new Error("Please define the DATABASE_URL environment variable inside .env.local");
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function connectMongoDB() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };

    cached.promise = mongoose.connect(DATABASE_URL, opts).then((mongoose) => {
      return mongoose;
    });
  }
  cached.conn = await cached.promise;
  return cached.conn;
}

export default connectMongoDB;