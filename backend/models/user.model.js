module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("user", {
      name: {
        type: DataTypes.STRING(60),
        allowNull: false,
        validate: {
          len: [20, 60]
        }
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
        validate: {
          isEmail: true
        }
      },
      address: {
        type: DataTypes.STRING(400)
      },
      password: {
        type: DataTypes.STRING
      },
      role: {
        type: DataTypes.ENUM("admin", "user", "owner"),
        defaultValue: "user"
      }
    });
  
    return User;
  };
  