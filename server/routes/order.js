const router = require("express").Router();
const Order = require("../models/Order");
const Item = require("../models/customItems");

//for orderItem inverntory change
function manageItems(inventory, order) {
  inventory.base[order.base] -= 1;
  if (order.veggies) inventory.veggies[order.veggies] -= 1;
  inventory.sauce[order.sauce] -= 1;
  inventory.cheese[order.cheese] -= 1;

  return inventory;
}

//order add karneka

router.post("/add", async (req, res) => {
  const newOrder = new Order(req.body);
  try {
    var humariItems = await Item.findOne();
    var itemsUsed = newOrder["orderItems"].map(
      (ekitem) => ekitem["customItems"]
    );
    itemsUsed.map((ekitem) => {
      humariItems = manageItems(humariItems, ekitem);
    });
    Item.findByIdAndReplace(
      { _id: ObjectId("644d43c1826c66f01d8712e4") },
      humariItems
    );
    const savedOrder = await newOrder.save();
    res.status(201).json({ savedOrder, humariItems });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);

    //PAYMENT ADD KARNEKA HAIUIII
  }
});

//get all orders
router.get("/:id", async (req, res) => {
  try {
    const orders = await Order.find({ user_id: req.params.id });
    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json(err);
  }
});

//order update karneka - status change
router.put("/status", async (req, res) => {
  try {
    const { status, order_id } = req.body;
    Order.findByIdAndUpdate(order_id, { status : status });
    res.status(200).send("Status Updated");
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
