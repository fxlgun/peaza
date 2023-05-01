const mongoose = require("mongoose");

const PizzaSchema = new mongoose.Schema({
  image: { type: String, required: true, unique: true },
  pizzaName: { type: String, required: true, unique: true },
  description: { type: String, required: true, unique: true },
  price: { type: Number, required: true },
});

module.exports = mongoose.model("Pizza", PizzaSchema);
