const User = require("../models/user");

const signUp = async (req, res) => {
  const { fullName, email, password } = req.body;
  try {
    await User.create({
      fullName,
      password,
      email,
    });
    return res.redirect("/");
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      error:
        "An error occurred while creating the user. Please try again later.",
      details: err.message, // Optionally include the error message for debugging
    });
  }
};

const signIn = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.matchPassword(email, password);
  console.log("User : ", user);
  return res.redirect("/");
};

module.exports = { signUp, signIn };
