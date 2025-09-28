const mongoose = require("mongoose");
let databaseConfig = () => {
  //monggose jevabe connect korte hoa:
  mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
      console.log("Database connected");
    })
    .catch((err) => {
      console.log("Database conection error: " + err);
    });
};

module.exports = databaseConfig;
