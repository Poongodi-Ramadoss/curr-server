const express = require("express");
const fruitRouter = express.Router();
const fruits = require("../Controllers/fruits");

fruitRouter.get("/", fruits.index);

fruitRouter.get("/:name", fruits.show);

fruitRouter.post("/", fruits.create);

fruitRouter.patch("/", fruits.update);

module.exports = fruitRouter;
