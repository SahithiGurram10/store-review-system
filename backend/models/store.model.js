module.exports = (sequelize, DataTypes) => {
    const Store = sequelize.define("store", {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        validate: {
          isEmail: true
        }
      },
      address: {
        type: DataTypes.STRING
      }
    });
  
    return Store;
  };
  