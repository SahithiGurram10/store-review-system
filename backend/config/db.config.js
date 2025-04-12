module.exports = {
    HOST: "localhost",
    USER: "postgres",
    PASSWORD: "your_password_here",
    DB: "store_review_db",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };
  