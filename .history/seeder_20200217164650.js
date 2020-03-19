const fs = require("fs");
const mongoose = require("mongoose");

const dotenv = require("dotenv");

// Load env variables
dotenv.config({ path: "config/config.env" });

//Load Models

const Bootcamp = require("./models/Bootcamp");

//connect to DB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true
});

// Read JSON files
const bootcamps = JSON.parse(
  fs.readFileSync(`${__dirname}/_data/bootcamps.json`, "utf-8")
);
