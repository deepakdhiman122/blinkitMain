const mongoose = require("mongoose");
const mongodbUrl =
  "mongodb+srv://dd6940286:teW32rN2nntWyGj5@cluster0.ibfkmka.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const connectDb = () => {
  return mongoose.connect(mongodbUrl);
};

module.exports = { connectDb };
