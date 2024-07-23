const express = require("express");
const cors = require("cors");
const app = express();
const fruitRouter = require("./routes/fruitRouter");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

//CORS
app.use(cors()); //middleware // its going to hit every request
app.use(express.json());
app.use("/fruits", fruitRouter);

module.exports = app;
