
const mongoose = require("mongoose");

const DB_URL = 'mongodb+srv://root:root@cluster0.54md9ja.mongodb.net/project?retryWrites=true&w=majority'

const connect = async () => {
  try {
    const DB = await mongoose.connect(DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    const { name, host } = DB.connection;
    console.log(`Connected to DB: ${name}, in host ${host}`);
  } catch (error) {
    console.error("Error connecting to DB", error);
  }
};

module.exports = {connect}