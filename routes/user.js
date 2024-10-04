const { Router } = require("express");
const User = require("../models/user");
const { signUp, signIn } = require("../controllers/user");

const router = new Router();

router.get("/signin", (req, res) => {
  res.render("signin");
});
router.get("/signup", (req, res) => {
  res.render("signup");
});

router.post("/signup", signUp);

router.post("/signin", signIn);

module.exports = router;
