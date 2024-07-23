const express = require("express");

//Intialising server thats gonna allow us to receive  requests and send response to server
const app = express();
const fruitRouter = require("./routes/fruitRouter");

//should be above 1024 anythign below reserved for internet
//const port = 5500;

//creating a route
// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

// app.get("/dogs", (req, res) => {
//   res.send("hey doggie");
// });

// app.get("/dogs/:name", (req, res) => {
//   console.log(req.params);
//   res.status(200).send(req.params.name);
//   //res.send(req.query);
//   //res.sendStatus(200)
//   res.json(); //this will convert what is sent to json
//   res.end(); //this will end the response process without sending any data.
// });

// app.get("/fruits");
// app.get("/fruits/:name");

//app.method('path',(request, response)=>{
//logic
//res.send(<data>)}

//Binding the server to a port
// app.listen(port, () => {
//   console.log(`Example app listening on part ${port}`);
// });

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(express.json());
app.use("/fruits", fruitRouter);

module.exports = app;
