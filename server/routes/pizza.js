const router = require("express").Router();
const Pizza = require("../models/Pizza");

router.get("/", async (req, res) => {
  try {
    const pizzas = await Pizza.find();
    res.status(200).json(pizzas);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
