const mongoose = require("mongoose");

var mongoDB = "mongodb://127.0.0.1:27017/olympics";
mongoose
  .connect(mongoDB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Mongodb connected");
  })
  .catch((err) => console.log("connection lost"));
