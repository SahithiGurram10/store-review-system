const db = require("../models");
const Rating = db.rating;

exports.submitRating = async (req, res) => {
  try {
    const { storeId, score } = req.body;

    // Ensure valid rating
    if (score < 1 || score > 5) {
      return res.status(400).send({ message: "Rating must be between 1 and 5" });
    }

    // Create a new rating
    const rating = await Rating.create({
      userId: req.userId,
      storeId,
      score
    });

    res.status(201).send({ message: "Rating submitted successfully!", rating });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

exports.getStoreRatings = async (req, res) => {
  try {
    const ratings = await Rating.findAll({ where: { storeId: req.params.storeId } });
    res.status(200).send(ratings);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};
