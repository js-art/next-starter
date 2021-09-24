const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/bookit", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((con) => console.log("Connected to local database."));
