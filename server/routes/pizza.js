const router = require("express").Router();
const Pizza = require("../models/Pizza");

//saaare pizzas in an array
router.get("/", async (req, res) => {
  try {
    const pizzas = await Pizza.find();
    res.status(200).json(pizzas);
  } catch (err) {
    res.status(500).json(err);
  }
});

//id bhejein, that one pizza jiska id bheja hai
router.get("/:id", async (req, res) => {
  try {
    const pizzas = await Pizza.findById(req.params.id);
    res.status(200).json(pizzas);
  } catch (err) {
    res.status(500).json(err);
  }
});




module.exports = router;
