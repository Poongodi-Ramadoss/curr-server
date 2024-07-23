const fruits = require("../fruits.json");
class Fruit {
  constructor(fruit) {
    this.genus = fruit.genus;
    this.name = fruit.name;
    this.id = fruit.id;
    this.family = fruit.family;
    this.order = fruit.order;
    this.nutritions = fruit.nutritions;
  }
  static showall() {
    return fruits.map((fruit) => new Fruit(fruit));
  }
  static show(name) {
    const fruit = fruits.find((fruit) => fruit.name.toLowerCase() == name);

    if (fruit) {
      return new Fruit(fruit);
    } else {
      throw "The fruit doesn't exist";
    }
  }
  static create(data) {
    const newFruit = data;
    fruits.push(newFruit);
    return new Fruit(newFruit);
  }
  update(data) {
    const updatedFruit = fruits.find(
      (fruit) => fruit.name.toLowerCase() == this.name.toLowerCase()
    );
    if (updatedFruit) {
      updatedFruit.name = data.name;
      updatedFruit.family = data.family;
      return new Fruit(updatedFruit);
    } else {
      throw "Fruit not Found";
    }
  }
}

module.exports = Fruit;
