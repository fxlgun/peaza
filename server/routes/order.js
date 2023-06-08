const router = require("express").Router();
const Order = require("../models/Order");
const Item = require("../models/CustomItems");
const Razorpay = require("razorpay");

var instance = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_SECRET,
});

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
    var humariItems = await Item.findOne().select({
      base: 1,
      veggies: 1,
      cheese: 1,
      sauce: 1,
      _id: 0,
    });
    // delete humariItems._id;
    var itemsUsed = newOrder["orderItems"].map(
      (ekitem) => ekitem["customItems"]
    );
    itemsUsed.map((ekitem) => {
      humariItems = manageItems(humariItems, ekitem);
    });
    Item.replaceOne({ _id: "644d43c1826c66f01d8712e4" }, humariItems)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    const savedOrder = await newOrder.save();
    res.status(201).json(savedOrder);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);

    //PAYMENT ADD KARNEKA HAIUIII
  }
});

router.post("/pay", async (req, res) => {
  var currentDate = new Date();
  instance.orders
    .create({
      amount: req.body.totalPrice * 100,
      currency: "INR",
      receipt:
        currentDate.getDate() +
        "/" +
        (currentDate.getMonth() + 1) +
        "/" +
        currentDate.getFullYear() +
        "@" +
        currentDate.getHours() +
        ":" +
        currentDate.getMinutes() +
        ":" +
        currentDate.getSeconds(),
    })
    .then((order) => res.json(order))
    .catch((err) => res.send(err));
});

//get all orders
router.get("userorders/:id", async (req, res) => {
  try {
    const orders = await Order.find({ userEmail: req.params.id });
    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json(err);
  }
});

//order update karneka - status change
router.put("/status", async (req, res) => {
  try {
    const { status, order_id } = req.body;
    Order.findByIdAndUpdate(order_id, { status: status })
      .then(res.status(200).send("Status Updated"))
      .catch((err) => console.log(err));
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

router.get("/allitems", async (req, res) => {
  try {
    await Item.findOne().then((ar) => res.status(200).send(ar));
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

router.get("/all/:id", async (req, res) => {
  try {
    if (req.params.id === "yes") {
      await Order.find()
        .sort({ createdAt: -1 })
        .then((orders) => {
          const pendingOrders = orders.filter(
            (order) => order.status === "Pending"
          );
          const preparingOrders = orders.filter(
            (order) => order.status === "Preparing"
          );
          const deliveredOrders = orders.filter(
            (order) => order.status === "Delivered"
          );
          console.log(pendingOrders, deliveredOrders);
          res
            .status(200)
            .send([...pendingOrders, ...preparingOrders, ...deliveredOrders]);
        });
    } else {
      await Order.findById(req.params.id).then((order) => {
        res.status(200).send(order);
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

module.exports = router;
