const express = require("express");
const cors = require("cors");
const app = express();

const logger = require("./logger");
const fruitRouter = require("./routes/fruitRouter");

//CORS
app.use(cors()); //middleware // its going to hit every request
app.use(express.json());
app.use(logger);
app.use("/fruits", fruitRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

module.exports = app;
