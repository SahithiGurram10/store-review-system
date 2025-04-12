const db = require("../models");
const User = db.user;

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).send(users);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

exports.getUserById = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) return res.status(404).send({ message: "User not found" });

    res.status(200).send(user);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};
