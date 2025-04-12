module.exports = (sequelize, DataTypes) => {
    const Rating = sequelize.define("rating", {
      score: {
        type: DataTypes.INTEGER,
        validate: {
          min: 1,
          max: 5
        }
      }
    });
  
    return Rating;
  };
  