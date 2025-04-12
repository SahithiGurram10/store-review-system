const db = require("../models");
const Store = db.store;

exports.createStore = async (req, res) => {
  try {
    const { name, email, address } = req.body;

    const store = await Store.create({
      name,
      email,
      address,
      ownerId: req.userId // Store Owner ID
    });

    res.status(201).send({ message: "Store created successfully!", store });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

exports.getAllStores = async (req, res) => {
  try {
    const stores = await Store.findAll();
    res.status(200).send(stores);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

exports.getStoreById = async (req, res) => {
  try {
    const store = await Store.findByPk(req.params.id);
    if (!store) return res.status(404).send({ message: "Store not found" });

    res.status(200).send(store);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};
