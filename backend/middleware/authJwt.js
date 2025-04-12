const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const token = req.headers["x-access-token"];
  if (!token) return res.status(403).send({ message: "No token provided!" });

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.status(401).send({ message: "Unauthorized!" });

    req.userId = decoded.id;
    req.userRole = decoded.role;
    next();
  });
};

const isAdmin = (req, res, next) => {
  if (req.userRole === "admin") return next();
  return res.status(403).send({ message: "Require Admin Role!" });
};

const isOwner = (req, res, next) => {
  if (req.userRole === "owner") return next();
  return res.status(403).send({ message: "Require Store Owner Role!" });
};

module.exports = { verifyToken, isAdmin, isOwner };
