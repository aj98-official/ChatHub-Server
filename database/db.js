import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const user = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

const Connection = async () => {
  const URL = `mongodb+srv://ashutoshjais398:${password}@chathub.fbrdou4.mongodb.net/?retryWrites=true&w=majority`;
  try {
    await mongoose.connect(URL, {
      useUnifiedTopology: true,
      useNewURLParser: true,
    });
    console.log("Database connected successfully.");
  } catch (err) {
    console.log("Error while connecting to database", err.message);
  }
};

export default Connection;
