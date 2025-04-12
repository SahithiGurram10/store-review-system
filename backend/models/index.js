const config = require("../config/db.config");
const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(
  config.DB,
  config.USER,
  config.PASSWORD,
  {
    host: config.HOST,
    dialect: config.dialect,
    pool: config.pool
  }
);

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("./user.model")(sequelize, DataTypes);
db.store = require("./store.model")(sequelize, DataTypes);
db.rating = require("./rating.model")(sequelize, DataTypes);

// Relations
db.user.hasMany(db.rating);
db.rating.belongsTo(db.user);

db.store.hasMany(db.rating);
db.rating.belongsTo(db.store);

db.user.hasOne(db.store, { as: "ownedStore", foreignKey: "ownerId" });
db.store.belongsTo(db.user, { as: "owner", foreignKey: "ownerId" });

module.exports = db;
