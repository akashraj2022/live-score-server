import mongoose from "mongoose";

const MONGO_URL = process.env.MONGO_URL;
const connectionToDB = async function () {
  try {
    const { connection } = await mongoose.connect(MONGO_URL);
    console.log(connection.host);
  } catch (error) {
    console.log("database connection problem: ", error);
  }
};

export default connectionToDB;
