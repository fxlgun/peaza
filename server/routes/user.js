const User = require("../models/User");
const router = require("express").Router();
const CryptoJs = require("crypto-js");

router.post("/register", async (req, res) => {
  const newUser = new User({
    email: req.body.email,
    address: req.body.address,
    password: CryptoJs.AES.encrypt(
      req.body.password,
      process.env.PASS_SEC
    ).toString(),
  });

  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    !user && res.status(404).json("tumhara user exist hi nahi karta!");  
    const asliPassword = CryptoJs.AES.decrypt(
      user.password,
      process.env.PASS_SEC
    ).toString(CryptoJs.enc.Utf8);
    asliPassword !== req.body.password &&
      res.status(401).json("galat password ha!");
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
