const Fruit = require("../Models/fruit");
const index = async (req, res) => {
  try {
    const fruits = await Fruit.showall();
    res.status(200).send(fruits);
  } catch (err) {
    res.status(404).send({ error: err });
  }
};
const show = async (req, res) => {
  //req.params
  const name = req.params.name.toLowerCase();
  //Check if the fruit exists in the data
  const fruit = fruits.find((fruit) => fruit.name.toLowerCase() == name);
  try {
    const fruit = fruit.show(name);
    res.status(200).send(fruit);
  } catch (err) {
    res.status(404).send({ error: err });
  }
};

const create = async (req, res) => {
  const data = req.body;
  try {
    const newFruit = await Fruit.create(data);
    res.status(201).send(newFruit);
  } catch (err) {
    res.status(409).send({ error: err });
  }
};

const update = async (req, res) => {
  const data = req.body;
  const name = req.params.name.toLowerCase();
  try {
    const updateFruit = await Fruit.update(data);
    res.status(201).send(updateFruit);
  } catch (err) {
    res.status(409).send({ error: err });
  }
};

module.exports = { index, show, create, update };
