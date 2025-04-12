const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();

const db = require("./models");

app.use(cors());
app.use(express.json());

// Import routes
app.use("/api/auth", require("./routes/auth.routes"));
app.use("/api/users", require("./routes/user.routes"));
app.use("/api/stores", require("./routes/store.routes"));
app.use("/api/ratings", require("./routes/rating.routes"));

// Sync database and start server
const PORT = process.env.PORT || 8080;
db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`✅ Server running on port ${PORT}`);
  });
});
