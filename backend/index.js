//console.log("fullstack todo project part 1");
require("dotenv").config();
const express = require("express");
 const authRoutes = require("./routes/authRoutes")
const databaseConfig = require("./config/databaseConfig");
//const dotnv = require("dotenv"); // kichu kichu jaigai sobar upore rakhte hobe.

//dotnv.config(); // upore rakhte hole 2 line r poriborte require('dotenv').config()  likhle colbe . tokhon ata sobar upore likhle colbe.
const app = express();
// const port = process.env.PORT || 8000;

//monggose jevabe connect korte hoa:
// mongoose
//   .connect(process.env.MONGO_URL)
//   .then(() => {
//     console.log("Database connected");
//   })
//   .catch((err) => {
//     console.log("Database conection error: " + err);
//   }); // ai code tuko ke alada file databaseConfig()nia rakhte hobe.

//.env ke console.log kore dekhte cacchi. & dotnv.config() likhar age ai file ta se porte pare nai tai console log a dekhabe undefined
//console.log(process.env.MONGO_URL);

// ami amar route jevabe create korte cacchi:
//Localhost:8000/api/auth/...

databaseConfig();
app.use(express.json());

app.use("/api/auth", authRoutes)

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
