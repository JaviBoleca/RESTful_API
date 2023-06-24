const bcrypt = require("bcrypt");

const express = require("express");
const router = express.Router();

const Login = require("../Model/loginModel");

router.post("/signup", async (req, res) => {
  try {
    const data = new Login({
      email: req.body.email,
      password: await bcrypt.hash(req.body.password, 10),
      role: req.body.role,
    });

    const user = await data.save();
    res.status(200).json({ status: "succeeded", user, error: null });
  } catch (error) {
    res
      .status(400)
      .json({ status: "failed", user: null, error: error.message });
  }
});

module.exports = router;
